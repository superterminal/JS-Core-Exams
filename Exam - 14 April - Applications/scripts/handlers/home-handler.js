handlers.getHome = function(ctx) {
    ctx.isAuth = userService.isAuth();

    if (userService.isAuth()) {
        ctx.username = sessionStorage.getItem('username');
    }

    ctx.loadPartials({
        header: '../../templates/common/header.hbs',
        footer: '../../templates/common/footer.hbs'
    }).then(function() {
        this.partial('../../templates/bg.hbs');
    }).catch(function(err) {
        console.log(err);
    });
};