const handlers = {};

$(() => {
    const app = Sammy('#container', function() {
        this.use('Handlebars', 'hbs');

        this.get('/index.html', handlers.getHome);
        this.get('/', handlers.getHome);
        this.get('#/home', handlers.getHome);

        this.get('#/register', handlers.getRegister);
        this.get('#/login', handlers.getLogin);

        this.post('#/register', handlers.registerUser);
        this.post('#/login', handlers.loginUser);
        this.get('#/logout', handlers.logoutUser);

        //movies
        this.get('#/cinema', handlers.getCinema);
        this.get('#/add', handlers.getAddMovie);
        this.get('#/myMovies', handlers.getMyMovies);
        
        this.post('#/add', handlers.addMovie);

        this.get('#/delete/:id', handlers.getRemoveMovie);
        this.post('#/delete/:id', handlers.removeMovie);

        this.get('#/buyTicket/:id', handlers.buyTicket);
        this.get('#/details/:id', handlers.getCurrentMovie);

        this.get('#/edit/:id', handlers.getEditMovie);
        this.post('#/edit/:id', handlers.editCurrentMovie);

        this.get('#/getFilteredMovies', handlers.getFilteredMovies);
    });

    app.run('#/home');  
});