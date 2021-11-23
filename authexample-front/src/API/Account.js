import axios from "axios";
import { PROFILE_ENDPOINT } from "../Constants/API";

export function getProfile(onSuccess, onError, onDone) {
    axios.get(PROFILE_ENDPOINT).then(onSuccess).catch(onError).then(onDone);
}
