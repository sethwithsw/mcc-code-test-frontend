import Config from '../config/Config';

export default class Query {
    static signUp = async (data) => {
        try {
            console.log(data);
            let res = await fetch(
                Config.server + Config.apiRoot + '/auth/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(data)
                });
            let json = await res.json();
            return json;
        } catch (err) {
            return err;
        }
    };

    static signIn = async (data) => {
        try {
            console.log(data);
            let res = await fetch(
                Config.server + Config.apiRoot + '/auth/signin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
            let json = await res.json();
            return json;
        } catch (err) {
            return err;
        }
    }

    static newRecord = async (data) => {
        try {
            console.log(data);
            console.log(global.token);
            let res = await fetch(
                Config.server + Config.apiRoot + '/record', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + global.token
                    },
                    body: JSON.stringify(data)
                });
            let json = await res.json();
            return json;
        } catch (err) {
            return err;
        }
    }

    static checkRecord = async (data) => {
        try {
            console.log(data);
            let res = await fetch(
                Config.server + Config.apiRoot + '/record/' + global.user.id + '?from=' + data.from + '&to=' + data.to, {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + global.token
                    }
                });
            let json = await res.json();
            return json;
        } catch (err) {
            return err;
        }
    }

    static getApiRoot = () => {
        return Config.server + Config.apiRoot;
    };
}