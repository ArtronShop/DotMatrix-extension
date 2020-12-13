from micropython import const
from machine import Pin, SPI
from utime import sleep_ms
from display import font_6_8

CMD_NOOP = const(0)
CMD_DIGIT0 = const(1)
CMD_DECODEMODE = const(9)
CMD_INTENSITY = const(10)
CMD_SCANLIMIT = const(11)
CMD_SHUTDOWN = const(12)
CMD_DISPLAYTEST = const(15)

class IOXhop_DotMatrix:
    def __init__(self, max_device=8, cs=5, dio=23, clk=18):
        self.display_number = max_device

        self.spi = SPI(1, 8000000, sck=Pin(clk), mosi=Pin(dio))
        self.cs = Pin(cs)
        self.cs.init(Pin.OUT, True)
        self.cs(1)
        
        self.shutdown(True)

        self._write(CMD_DISPLAYTEST, 0)
        self._write(CMD_SCANLIMIT, 7)
        self._write(CMD_DECODEMODE, 0)

        self.shutdown(False)
        self.intensity(15)

        self.bufferDisplay = bytearray(8 * self.display_number)

    def shutdown(self, value=False):
        self._write(CMD_SHUTDOWN, 0 if value else 1)

    def intensity(self, level=15):
        self._write(CMD_INTENSITY, level)

    def _write(self, command, data):
        self.cs(0)
        for _ in range(self.display_number):
            self.spi.write(bytearray([ command, data ]))
        self.cs(1)

    def show(self):
        writeData = bytearray(8 * self.display_number)

        # Flip Buffer
        for seg in range(self.display_number):
            for y in range(8):
                for x in range(8):
                    writeData[(seg * 8) + y] |= (1 if (self.bufferDisplay[(seg * 8) + (7 - x)] & (1 << (7 - y))) != 0 else 0) << x;

        for row in range(8):
            self.cs(0)
            for i in range(self.display_number):
                self.spi.write(bytearray([ CMD_DIGIT0 + row, writeData[(i * 8) + row] ]))
            self.cs(1)

    def clear(self):
        self.bufferDisplay = bytearray(8 * self.display_number)
        self.show()

    def calcTextWidth(self, text):
        return len(text) * 6

    def invertColor(self, showOnDisplay=True):
        for i in range(self.display_number * 8):
            self.bufferDisplay[i] = self.bufferDisplay[i] ^ 0xFF
        if showOnDisplay:
            self.show()

    def showText(self, text, top=0, left=0, invert=False):
        text = str(text).encode()
        textWidth = len(text) * 6
        bufferText = bytearray(textWidth)
        for i in range(len(text)):
            for n in range(6):
                bufferText[(i * 6) + n] = font_6_8[(text[i] * 6) + n]

        if top > 0:
            for i in range(textWidth):
                bufferText[i] >>= top
        elif top < 0:
            for i in range(textWidth):
                bufferText[i] <<= -top

        displayWidth = self.display_number * 8
        self.bufferDisplay = bytearray(8 * self.display_number)
        if left < displayWidth:
            if left >= 0:
                for n in range(min(textWidth, displayWidth - left)):
                    self.bufferDisplay[int(left + n)] = bufferText[int(n)]
            else:
                for n in range(min(textWidth + left, displayWidth)):
                    self.bufferDisplay[int(n)] = bufferText[int((-left) + n)]

        if invert:
            self.invertColor(False)

        self.show()

    def calCenter(self, text):
        return (self.display_number * 8 / 2) - (self.calcTextWidth(text) / 2)

    def showTextCenter(self, text):
        self.showText(text, 0, self.calCenter(text) - 1)

    def scrollInLeft(self, text, speed=50):
        textWidth = self.calcTextWidth(text)
        for left in range(-textWidth, self.calCenter(text) + 1, 1):
            self.showText(text, 0, left)
            sleep_ms(int(speed))

    def scrollOutLeft(self, text, speed=50):
        for left in range(self.calCenter(text), -self.calcTextWidth(text) - 1, -1):
            self.showText(text, 0, left)
            sleep_ms(int(speed))

    def scrollInRight(self, text, speed=50):
        for left in range(8*8, self.calCenter(text) - 1, -1):
            self.showText(text, 0, left)
            sleep_ms(int(speed))

    def scrollOutRight(self, text, speed=50):
        for left in range(self.calCenter(text), (8*8) + 1, 1):
            self.showText(text, 0, left)
            sleep_ms(int(speed))

    def scrollInTop(self, text, speed=50):
        for top in range(-8, 0 + 1, 1):
            self.showText(text, top, self.calCenter(text))
            sleep_ms(int(speed))

    def scrollOutTop(self, text, speed=50):
        for top in range(0, 8 + 1, 1):
            self.showText(text, top, self.calCenter(text))
            sleep_ms(int(speed))

    def scrollInBottom(self, text, speed=50):
        for top in range(8, 0 - 1, -1):
            self.showText(text, top, self.calCenter(text))
            sleep_ms(int(speed))

    def scrollOutBottom(self, text, speed=50):
        for top in range(0, 8 + 1, 1):
            self.showText(text, top, self.calCenter(text))
            sleep_ms(int(speed))

    def scrollLeftToRight(self, text, speed=50, pause=0):
        self.scrollInLeft(text, speed)
        sleep_ms(int(pause))
        self.scrollOutRight(text, speed)

    def scrollRightToLeft(self, text, speed=50, pause=0):
        self.scrollInRight(text, speed)
        sleep_ms(int(pause))
        self.scrollOutLeft(text, speed)
