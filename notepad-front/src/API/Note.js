import { NOTE_LIST_CREATE_ENDPOINT, NOTE_RETRIEVE_UPDATE_DELETE_ENDPOINT } from "../Constants/API";
import axios from "axios";

export function getNotes(onSuccess, onError, onDone) {
    axios.get(NOTE_LIST_CREATE_ENDPOINT).then(onSuccess).catch(onError).then(onDone);
}

export function postNote(postData, onSuccess, onError, onDone) {
    axios.post(NOTE_LIST_CREATE_ENDPOINT, postData).then(onSuccess).catch(onError).then(onDone);
}

export function getNote(noteId, onSuccess, onError, onDone) {
    const url = NOTE_RETRIEVE_UPDATE_DELETE_ENDPOINT.replace("<xxx>", noteId);
    axios.get(url).then(onSuccess).catch(onError).then(onDone);
}

export function putNote(postData, onSuccess, onError, onDone) {
    const url = NOTE_RETRIEVE_UPDATE_DELETE_ENDPOINT.replace("<xxx>", postData.id);
    axios.put(url, postData).then(onSuccess).catch(onError).then(onDone);
}

export function deleteNote(noteId, onSuccess, onError, onDone) {
    const url = NOTE_RETRIEVE_UPDATE_DELETE_ENDPOINT.replace("<xxx>", noteId);
    axios.delete(url).then(onSuccess).catch(onError).then(onDone);
}
