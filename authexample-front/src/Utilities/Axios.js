import axios from "axios";

export function attachTokenToAxios() {
    const token = localStorage.getItem("APP_API_KEY");
    axios.defaults.headers.common['authorization'] = token // for all requests
}
