let {login} = require('./login.js');

class pommanager {
    constructor(){
        this.loginObj = new login();
    }

    getLoginObj(){
        return this.loginObj;
    }
}

module.exports = {pommanager};