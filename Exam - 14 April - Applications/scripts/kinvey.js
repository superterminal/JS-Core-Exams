const kinvey = (() => {
    const baseUrl = 'https://baas.kinvey.com/';
    const appKey = 'kid_HJdDrne5N';
    const appSecret = '0d15c88a718c406a8b76127f2b8280e0';

    function makeAuth(auth) {
        if (auth === 'basic') {
            return {
                'Authorization': `Basic ${btoa(appKey + ':' + appSecret)}`
            }
        } else {
            return {
                'Authorization': `Kinvey ${sessionStorage.getItem('authtoken')}`
            }
        }
    }

    function makeRequest(method, collection, endPoint, auth) {
        return {
            url: baseUrl + collection + '/' + appKey + '/' + endPoint,
            method,
            headers: makeAuth(auth)
        }
    }

    function post(collection, endPoint, auth, data) {
        let req = makeRequest('POST', collection, endPoint, auth);
        req.data = data;
        return $.ajax(req);
    }

    function get(collection, endPoint, auth, query) {
        if(query) {
            endPoint += query;
        }
        return $.ajax(makeRequest('GET', collection, endPoint, auth));
    }

    function update(collection, endPoint, auth, data) {
        let req = makeRequest('PUT', collection, endPoint, auth);
        req.data = data;
        return $.ajax(req);
    }

    function remove(collection, endPoint, auth) {
        return $.ajax(makeRequest('DELETE', collection, endPoint, auth));
    }

    return {
        get,
        post,
        update,
        remove
    }
})()