handlers.getCinema = async function(ctx) {

    ctx.isAuth = userService.isAuth();

    if (userService.isAuth()) {
        ctx.username = sessionStorage.getItem('username');
    }

    try {
        let movies = await movieService.getAllMovies();

        ctx.movies = movies;

        ctx.loadPartials({
            header: '../../templates/common/header.hbs',
            footer: '../../templates/common/footer.hbs',
            movie: '../../templates/movies/movie.hbs'
        }).then(function() {
            this.partial('../../templates/movies/cinema.hbs');
        }).catch(function(err) {
            console.log(err);
        });

    } catch(err) {
        console.log(err);
    }
};

handlers.getAddMovie = function(ctx) {
    ctx.isAuth = userService.isAuth();

    if (userService.isAuth()) {
        ctx.username = sessionStorage.getItem('username');
    }

    ctx.loadPartials({
        header: '../../templates/common/header.hbs',
        footer: '../../templates/common/footer.hbs'
    }).then(function() {
         this.partial('../../templates/movies/add-movie-form.hbs');
    }).catch(function(err) {
        console.log(err);
    });
}

handlers.getMyMovies = function(ctx) {
    ctx.isAuth = userService.isAuth();

    if (userService.isAuth()) {
        ctx.username = sessionStorage.getItem('username');
    }

    let id = sessionStorage.getItem('id');

    movieService.getAllMyMovies(id).then(function(res) {

        ctx.myMovies = res;

        ctx.loadPartials({
            header: '../../templates/common/header.hbs',
            footer: '../../templates/common/footer.hbs',
            myMovie: '../../templates/movies/my-movie.hbs'
        }).then(function() {
            this.partial('../../templates/movies/my-movies.hbs');
        }).catch(function (err) {
            console.log(err);
        })
    });
}

handlers.addMovie = function(ctx) {
    let title = ctx.params.title;
    let description = ctx.params.description;
    let genres = ctx.params.genres;
    let imageUrl = ctx.params.imageUrl;
    let tickets = ctx.params.tickets;

    let imgPattern = /^(http:\/\/|https:\/\/).*$/g;

    if (title.length < 6) {
        notifications.showError('Error! Title should be atleast 6 chars long!');
        return;
    } else if (description.length < 10) {
        notifications.showError('Error! Description should be atleast 10 chars long!');
        return;
    } else if (!imgPattern.test(imageUrl)) {
        notifications.showError('Error! Url should start with http:// or https://');
        return;
    } else if (isNaN(tickets)) {
        notifications.showError('Error! Tickets must be a number');
        return;
    }

    let data = {...ctx.params};

    movieService.createMovie(data).then(function(res) {
        notifications.showSuccess('Movie created successfully');
        ctx.redirect('#/home');  
    }).catch(function (err) {
        console.log(err);
    })
}

handlers.getRemoveMovie = function (ctx) {
    
    ctx.isAuth = userService.isAuth();

    if (userService.isAuth()) {
        ctx.username = sessionStorage.getItem('username');
    }

    let id = ctx.params.id;
    movieService.getAMovie(id).then(function(res) {
        
        ctx.title = res.title;
        ctx.imageUrl = res.imageUrl;
        ctx.description = res.description;
        ctx.genres = res.genres;
        ctx.tickets = res.tickets;
        ctx._id = id;

        ctx.loadPartials({
            header: '../../templates/common/header.hbs',
            footer: '../../templates/common/footer.hbs',
        }).then(function() {
            this.partial('../../templates/movies/delete-movie-form.hbs');
        }).catch(function(err) {
            console.log(err);
        })
    }).catch(function(err) {
        confirm.log(err);
    });
}

handlers.removeMovie = function(ctx) {

    movieService.deleteMovie(ctx.params.id).then(function(res) {
        notifications.showSuccess('Movie deleted successfully!');
        ctx.redirect('#/home');
    }).catch(function(err) {
        console.log(err);
    });

}

handlers.buyTicket = function (ctx) {

    let id = ctx.params.id;
    movieService.getAMovie(id).then(function (res) {
        let movie = res;

        let currTicketCount = Number(movie.tickets);

        if (currTicketCount > 0) {
            movie.tickets -= 1;
            movieService.buyTicket(id, movie).then(function (res) {
                notifications.showSuccess('Ticket bought successfully');
                ctx.redirect('#/cinema');
            }).catch(function (err) {
                console.log(err);
            });
        } else {
            notifications.showError('No tickets available');
        }
    });
}

handlers.getCurrentMovie = function (ctx) {
    let id = ctx.params.id;

    ctx.isAuth = userService.isAuth();

    if (userService.isAuth()) {
        ctx.username = sessionStorage.getItem('username');
    }

    movieService.getAMovie(id).then(function (res) {

        ctx.title = res.title;
        ctx.imageUrl = res.imageUrl;
        ctx.description = res.description;
        ctx.genres = res.genres;
        ctx.tickets = res.tickets;
        ctx._id = id;

        ctx.loadPartials({
            header: '../../templates/common/header.hbs',
            footer: '../../templates/common/footer.hbs',
        }).then(function() {
            this.partial('../../templates/movies/details-movie.hbs');
        }).catch(function (err) {
            console.log(err);
        })
    }).catch(function (err) {
        console.log(err);
    })
}

handlers.getEditMovie = function(ctx) {
    ctx.isAuth = userService.isAuth();

    if (userService.isAuth()) {
        ctx.username = sessionStorage.getItem('username');
    }

    let id = ctx.params.id;
    movieService.getAMovie(id).then(function(res) {
        
        ctx.title = res.title;
        ctx.imageUrl = res.imageUrl;
        ctx.description = res.description;
        ctx.genres = res.genres;
        ctx.tickets = res.tickets;
        ctx._id = id;

        ctx.loadPartials({
            header: '../../templates/common/header.hbs',
            footer: '../../templates/common/footer.hbs',
        }).then(function() {
            this.partial('../../templates/movies/edit-movie-form.hbs');
        }).catch(function(err) {
            console.log(err);
        })
    }).catch(function(err) {
        confirm.log(err);
    });
}

handlers.editCurrentMovie = function(ctx) {

    let title = $('#editTitle').val();
    let imageUrl = $('#editImage').val();
    let description = $('#editDescription').val();
    let genres = $('#editGenres').val();
    let tickets = $('#editTickets').val();

    let data = {
        title,
        imageUrl,
        description,
        genres,
        tickets
    }

    movieService.editMovie(ctx.params.id, data).then(function(res) {
        notifications.showSuccess('Movie edited successfully!');
        ctx.redirect('#/home');
    }).catch(function(err) {
        console.log(err);
    });
}

handlers.getFilteredMovies = async function(ctx) {

    ctx.isAuth = userService.isAuth();

    if (userService.isAuth()) {
        ctx.username = sessionStorage.getItem('username');
    }

    let srcField = ctx.params.search;

    try {
        let filteredMovies = await movieService.getMoviesFromSearch(srcField);
        let currentMovies = [];
        
        for (let el of filteredMovies) {
            let res = await movieService.getAMovie(el._id);
            currentMovies.push(res);
        }
        
        ctx.movies = currentMovies;
    
        ctx.loadPartials({
            header: '../../templates/common/header.hbs',
            footer: '../../templates/common/footer.hbs',
            movie: '../../templates/movies/movie.hbs'
        }).then(function() {
            this.partial('../../templates/movies/cinema.hbs');
        }).catch(function(err) {
            console.log(err);
        }); 
    } catch(err) {
        console.log(err);
    }
    
};