const movieService = (() => {

    function createMovie (data) {
        return kinvey.post('appdata', 'movies', 'kinvey', data);
    }

    function getAllMovies() {
        return kinvey.get('appdata', 'movies', 'kinvey', '?query={}&sort={"tickets": -1}');
    }

    function getAllMyMovies(id) {
        return kinvey.get('appdata', 'movies', 'kinvey', `?query={"_acl.creator":"${id}"}`);        
    }

    function buyTicket(id, movie) {
        return kinvey.update('appdata', `movies/${id}`, 'kinvey', movie);
    }

    function deleteMovie(id) {
        return kinvey.remove('appdata', `movies/${id}`, 'kinvey');
    }

    function getAMovie(id) {
        return kinvey.get('appdata', `movies/${id}`, 'kinvey');
    }

    function editMovie(id, data) {
        return kinvey.update('appdata', `movies/${id}`, 'kinvey', data);
    }

    function getMoviesFromSearch(thingToSearchFor) {
        return kinvey.get('appdata', 'movies', 'kinvey', `?query={"genres": "${thingToSearchFor}"}&fields=genres`)
    }

    return {
        createMovie,
        getAllMovies,
        getAllMyMovies,
        buyTicket,
        deleteMovie,
        getAMovie,
        editMovie,
        getMoviesFromSearch
    }
})();