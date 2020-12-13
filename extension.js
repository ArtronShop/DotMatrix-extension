({
    name: "Dot Matrix", // Category Name
    description: "Show text with animation to MAX7219 Dot Matrix",
    author: "IOXhop.com",
    category: "Display",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#3498DB", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="dot_matrix_setup">
                    <field name="max_devices">8</field>
                    <field name="DIN">23</field>
                    <field name="CS">19</field>
                    <field name="CLK">18</field>
                </block>
            `
        },
        {
            xml: `
                <block type="dot_matrix_show_text">
                    <value name="text">
                        <shadow type="text">
                            <field name="TEXT">Hello!</field>
                          </shadow>
                    </value>
                    <value name="left">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="top">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="dot_matrix_show_text_center">
                    <value name="text">
                        <shadow type="text">
                            <field name="TEXT">Hello!</field>
                          </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="dot_matrix_scroll_in_left">
                    <value name="text">
                        <shadow type="text">
                            <field name="TEXT">Hello!</field>
                          </shadow>
                    </value>
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="dot_matrix_scroll_in_right">
                    <value name="text">
                        <shadow type="text">
                            <field name="TEXT">Hello!</field>
                          </shadow>
                    </value>
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="dot_matrix_scroll_in_top">
                    <value name="text">
                        <shadow type="text">
                            <field name="TEXT">Hello!</field>
                          </shadow>
                    </value>
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="dot_matrix_scroll_in_bottom">
                    <value name="text">
                        <shadow type="text">
                            <field name="TEXT">Hello!</field>
                          </shadow>
                    </value>
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="dot_matrix_scroll_out_left">
                    <value name="text">
                        <shadow type="text">
                            <field name="TEXT">Hello!</field>
                          </shadow>
                    </value>
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="dot_matrix_scroll_out_right">
                    <value name="text">
                        <shadow type="text">
                            <field name="TEXT">Hello!</field>
                          </shadow>
                    </value>
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="dot_matrix_scroll_out_top">
                    <value name="text">
                        <shadow type="text">
                            <field name="TEXT">Hello!</field>
                          </shadow>
                    </value>
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="dot_matrix_scroll_out_bottom">
                    <value name="text">
                        <shadow type="text">
                            <field name="TEXT">Hello!</field>
                          </shadow>
                    </value>
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="dot_matrix_scroll_left_to_right">
                    <value name="text">
                        <shadow type="text">
                            <field name="TEXT">Hello!</field>
                          </shadow>
                    </value>
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="pause">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="dot_matrix_scroll_right_to_left">
                    <value name="text">
                        <shadow type="text">
                            <field name="TEXT">Hello!</field>
                          </shadow>
                    </value>
                    <value name="speed">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                    <value name="pause">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "dot_matrix_invert_color",
        "dot_matrix_clear",
    ]
});
