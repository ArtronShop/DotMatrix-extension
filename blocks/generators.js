Blockly.Python['dot_matrix_setup'] = function(block) {
  Blockly.Python.definitions_['from_IOXhop_DotMatrix_import_IOXhop_DotMatrix'] = 'from IOXhop_DotMatrix import IOXhop_DotMatrix';

  var number_max_devices = block.getFieldValue('max_devices');
  var dropdown_din = block.getFieldValue('DIN');
  var dropdown_cs = block.getFieldValue('CS');
  var dropdown_clk = block.getFieldValue('CLK');
  
  var code = `dot = IOXhop_DotMatrix(${number_max_devices}, ${dropdown_cs}, ${dropdown_din}, ${dropdown_clk})\n`;
  return code;
};

Blockly.Python['dot_matrix_show_text'] = function(block) {
  Blockly.Python.definitions_['from_IOXhop_DotMatrix_import_IOXhop_DotMatrix'] = 'from IOXhop_DotMatrix import IOXhop_DotMatrix';

  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_left = Blockly.Python.valueToCode(block, 'left', Blockly.Python.ORDER_ATOMIC);
  var value_top = Blockly.Python.valueToCode(block, 'top', Blockly.Python.ORDER_ATOMIC);

  var code = `dot.showText(${value_text}, ${value_top}, ${value_left})\n`;
  return code;
};

Blockly.Python['dot_matrix_show_text_center'] = function(block) {
  Blockly.Python.definitions_['from_IOXhop_DotMatrix_import_IOXhop_DotMatrix'] = 'from IOXhop_DotMatrix import IOXhop_DotMatrix';

  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);

  var code = `dot.showTextCenter(${value_text})\n`;
  return code;
};

Blockly.Python['dot_matrix_scroll_in_left'] = function(block) {
  Blockly.Python.definitions_['from_IOXhop_DotMatrix_import_IOXhop_DotMatrix'] = 'from IOXhop_DotMatrix import IOXhop_DotMatrix';

  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);

  var code = `dot.scrollInLeft(${value_text}, ${value_speed} * 1000)\n`;
  return code;
};

Blockly.Python['dot_matrix_scroll_in_right'] = function(block) {
  Blockly.Python.definitions_['from_IOXhop_DotMatrix_import_IOXhop_DotMatrix'] = 'from IOXhop_DotMatrix import IOXhop_DotMatrix';

  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);

  var code = `dot.scrollInRight(${value_text}, ${value_speed} * 1000)\n`;
  return code;
};

Blockly.Python['dot_matrix_scroll_in_top'] = function(block) {
  Blockly.Python.definitions_['from_IOXhop_DotMatrix_import_IOXhop_DotMatrix'] = 'from IOXhop_DotMatrix import IOXhop_DotMatrix';

  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);

  var code = `dot.scrollInTop(${value_text}, ${value_speed} * 1000)\n`;
  return code;
};

Blockly.Python['dot_matrix_scroll_in_bottom'] = function(block) {
  Blockly.Python.definitions_['from_IOXhop_DotMatrix_import_IOXhop_DotMatrix'] = 'from IOXhop_DotMatrix import IOXhop_DotMatrix';

  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);

  var code = `dot.scrollInBottom(${value_text}, ${value_speed} * 1000)\n`;
  return code;
};

Blockly.Python['dot_matrix_scroll_out_left'] = function(block) {
  Blockly.Python.definitions_['from_IOXhop_DotMatrix_import_IOXhop_DotMatrix'] = 'from IOXhop_DotMatrix import IOXhop_DotMatrix';

  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);

  var code = `dot.scrollOutLeft(${value_text}, ${value_speed} * 1000)\n`;
  return code;
};

Blockly.Python['dot_matrix_scroll_out_right'] = function(block) {
  Blockly.Python.definitions_['from_IOXhop_DotMatrix_import_IOXhop_DotMatrix'] = 'from IOXhop_DotMatrix import IOXhop_DotMatrix';

  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);

  var code = `dot.scrollOutRight(${value_text}, ${value_speed} * 1000)\n`;
  return code;
};

Blockly.Python['dot_matrix_scroll_out_top'] = function(block) {
  Blockly.Python.definitions_['from_IOXhop_DotMatrix_import_IOXhop_DotMatrix'] = 'from IOXhop_DotMatrix import IOXhop_DotMatrix';

  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);

  var code = `dot.scrollOutTop(${value_text}, ${value_speed} * 1000)\n`;
  return code;
};

Blockly.Python['dot_matrix_scroll_out_bottom'] = function(block) {
  Blockly.Python.definitions_['from_IOXhop_DotMatrix_import_IOXhop_DotMatrix'] = 'from IOXhop_DotMatrix import IOXhop_DotMatrix';

  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);

  var code = `dot.scrollOutBottom(${value_text}, ${value_speed} * 1000)\n`;
  return code;
};

Blockly.Python['dot_matrix_scroll_left_to_right'] = function(block) {
  Blockly.Python.definitions_['from_IOXhop_DotMatrix_import_IOXhop_DotMatrix'] = 'from IOXhop_DotMatrix import IOXhop_DotMatrix';

  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_pause = Blockly.Python.valueToCode(block, 'pause', Blockly.Python.ORDER_ATOMIC);

  var code = `dot.scrollLeftToRight(${value_text}, ${value_speed} * 1000, ${value_pause})\n`;
  return code;
};

Blockly.Python['dot_matrix_scroll_right_to_left'] = function(block) {
  Blockly.Python.definitions_['from_IOXhop_DotMatrix_import_IOXhop_DotMatrix'] = 'from IOXhop_DotMatrix import IOXhop_DotMatrix';

  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_pause = Blockly.Python.valueToCode(block, 'pause', Blockly.Python.ORDER_ATOMIC);

  var code = `dot.scrollRightToLeft(${value_text}, ${value_speed} * 1000, ${value_pause})\n`;
  return code;
};

Blockly.Python['dot_matrix_invert_color'] = function(block) {
  Blockly.Python.definitions_['from_IOXhop_DotMatrix_import_IOXhop_DotMatrix'] = 'from IOXhop_DotMatrix import IOXhop_DotMatrix';

  var code = `dot.invertColor()\n`;
  return code;
};

Blockly.Python['dot_matrix_clear'] = function(block) {
  Blockly.Python.definitions_['from_IOXhop_DotMatrix_import_IOXhop_DotMatrix'] = 'from IOXhop_DotMatrix import IOXhop_DotMatrix';

  var code = `dot.clear()\n`;
  return code;
};
