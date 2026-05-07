class login {
    constructor(page) {
        this.page = page;
        this.email = this.page.getByLabel("Email");
        this.password = this.page.getByLabel("Password");
        this.signin = this.page.getByRole('button', { name: "Sign In" });
    }

    async goToLogin() {
        // await this.page.goto('/login');
        // await this.page.waitForURL('*/login');
        // */login means one level check ex. app/login, **/login** means any level check 
        // ex. app/login, app/user/login, app/user/profile/login
        // to optimize the above code we can use promise.all 
        // to run both the tasks in parallel and wait for both to complete
        await Promise.all([
            this.page.goto('/login'),
            this.page.waitForURL('**/login**')
        ])
    }

    async clearInput() {
        await this.email.clear();
        await this.password.clear();
    }

    async fillEmail(email) {
        await this.email.fill(email);
    }

    async fillPassword(password) {
        await this.password.fill(password);
    }

    async signIn() {
        await this.signin.click();
    }

    async getEmailId() {
        return await this.email.inputValue();
    }

    async getPassword() {
        return await this.password.inputValue();
    }

}

module.exports = { login };