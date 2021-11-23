import axios from "axios";
import  { LOGIN_ENDPOINT, REGISTER_ENDPOINT } from  "../Constants/API";


export function postLogin(data, onSuccess, onError, onDone) {
    axios.post(LOGIN_ENDPOINT, data).then(onSuccess).catch(onError).then(onDone);
}

export function postRegister(data, onSuccess, onError, onDone) {
    axios.post(REGISTER_ENDPOINT, data).then(onSuccess).catch(onError).then(onDone);
}
