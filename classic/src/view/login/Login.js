Ext.define("Login.view.login.Login", {

    extend: "Ext.panel.Panel",
    xtype: "loginPage", // unique Name
    controller: "login", // Name of Controller
    // model: "login",

    // files we need before UI is loaded
    requires: [
        "Login.view.login.LoginController",
        "Ext.plugin.Viewport",
        "Ext.form.Panel"
    ],

    closable: false,

    plugins: "viewport",

    // add the mentioned items to body
    items:{

        // add the mentioned items to form
        xtype: 'form',
        reference: 'form',
        items: [
            {
                xtype: "textfield",
                name: "username",
                fieldLabel: "Username",
                allowBlank : false,
                value: "Username",
                inputType: "text"
            },
            {
                xtype: "textfield",
                name: "password",
                fieldLabel: "Password",
                allowBlank : false,
                inputType: "password"
            }
        ],

        buttons :[
            {
                text : 'Login',
                formBind: true,
                listeners: {
                    click: "onLoginClick"
                }
            }
        ]

    }









})