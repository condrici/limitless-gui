import axios from "axios";

enum RequestMethods {
    GET="GET", 
    POST="POST", 
    PUT="PUT", 
    PATCH="PATCH", 
    DELETE="DELETE"
}

type RequestMethod = keyof typeof RequestMethods;

class ApiEndpoints {
    readonly API_ANALYTICS_ENDPOINT = 
        import.meta.env.VITE_ANALYTICS_API_PROTOCOL + '://' +
        import.meta.env.VITE_ANALYTICS_API_HOSTNAME + ':' +
        import.meta.env.VITE_ANALYTICS_API_PORT
}

class Api {
    private api_module: typeof axios;

    constructor(api: typeof axios) {
        this.api_module = api
    }

    public sendGetRequest(url: string) {
        return this.request(url, RequestMethods.GET)
    }

    protected request(url: string, method: RequestMethod) {
        return this.api_module({
            method,
            url: url
        });
    }
}

let api = new Api(axios)
let apiEndpoints = new ApiEndpoints
export {api, apiEndpoints}