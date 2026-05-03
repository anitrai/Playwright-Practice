class login {
    constructor(page){
        this.page = page;
        this.email = this.page.getByLabel("Email");
        this.password = this.page.getByLabel("Password");
        this.signin = this.page.getByRole('button',{name: "Sign In"});
    }

    async fillEmail(email){
        await this.email.fill(email);
    }

    async fillPassword(password){
        await this.password.fill(password);
    }

    async signIn(){
        await this.signin.click();
    }

    async getEmailId(){
        return await this.email.inputValue();
    }
    
    async getPassword(){
        return await this.password.inputValue();
    }
    
}

module.exports = {login};