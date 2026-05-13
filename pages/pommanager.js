let {login} = require('./login');

class pommanager {
    constructor(page){
        this.loginObj = new login(page);
    }

    getLoginObj(){
        return this.loginObj;
    }
}

module.exports = {pommanager};