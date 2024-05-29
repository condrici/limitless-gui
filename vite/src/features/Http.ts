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
    readonly API_GATEWAY_ENDPOINT = 
        import.meta.env.VITE_API_GATEWAY_PROTOCOL + '://' +
        import.meta.env.VITE_API_GATEWAY_HOSTNAME + ':' +
        import.meta.env.VITE_API_GATEWAY_PORT + '/api/v1.0'

    readonly API_ANALYTICS_ENDPOINT = 
        import.meta.env.VITE_ANALYTICS_API_PROTOCOL + '://' +
        import.meta.env.VITE_ANALYTICS_API_HOSTNAME + ':' +
        import.meta.env.VITE_ANALYTICS_API_PORT
}

class Http {
    private api_module: typeof axios;

    constructor(api_module: typeof axios) {
        this.api_module = api_module
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

let http = new Http(axios)
let apiEndpoints = new ApiEndpoints
export {http, apiEndpoints}