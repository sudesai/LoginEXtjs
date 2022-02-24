Ext.define("Login.view.login.LoginController", {

    alias: "controller.login",
    extend: "Ext.app.ViewController",

    onLoginClick: function(){

        localStorage.setItem("LoggedIn", true)

        // 1 . Destry current View
        this.getView().destroy()

        // 2. Load new View
        Ext.widget("app-main")
    }




})