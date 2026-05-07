let {login} = require('./login.js');

class pommanager {
    constructor(page){
        this.loginObj = new login(page);
    }

    getLoginObj(){
        return this.loginObj;
    }
}

module.exports = {pommanager};