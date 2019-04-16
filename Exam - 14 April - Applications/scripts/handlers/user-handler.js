handlers.getRegister = function(ctx) {
    ctx.loadPartials({
        header: '../../templates/common/header.hbs',
        footer: '../../templates/common/footer.hbs'
    }).then(function() {
        this.partial('../../templates/user/register-form.hbs');
    }).catch(function(err) {
        console.log(err);
    });
};

handlers.getLogin = function(ctx) {
    ctx.loadPartials({
        header: '../../templates/common/header.hbs',
        footer: '../../templates/common/footer.hbs'
    }).then(function() {
        this.partial('../../templates/user/login-form.hbs');
    }).catch(function(err) {
        console.log(err);
    });
};

handlers.registerUser = function(ctx) {
    let username = ctx.params.username;
    let password = ctx.params.password;
    let repeatPassword = ctx.params.repeatPassword;

    if (username.length < 3) {
        notifications.showError('Error! Username must be atleast 3 characters long!');
        return;
    } else if (password.length < 6) {
        notifications.showError('Error! Password must be atleast 6 characters long!');
        return;
    } else if (repeatPassword !== password) {
        notifications.showError('Error! Passwords must match!!!');
        return;
    }

    userService.register(username, password).then(res => {
        userService.saveSession(res);
        notifications.showSuccess('User registraction successful.');
        ctx.redirect('#/home');
    }).catch(function(err) {
        notifications.showError(err.responseJSON.description);
    });
};

handlers.logoutUser = function(ctx) {
    userService.logout().then(() => {
        sessionStorage.clear();
        notifications.showSuccess('Logout successful.');
        ctx.redirect('#/home');
    }).catch(function(err) {
        console.log(err);
    });
};

handlers.loginUser = function(ctx) {
    let username = ctx.params.username;
    let password = ctx.params.password;
    
    userService.login(username, password).then((res) => {
        userService.saveSession(res);
        notifications.showSuccess('Login successful.');
        ctx.redirect('#/home');
    }).catch(function(err) {
        notifications.showError(err.responseJSON.description);
    });
}
