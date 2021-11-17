export function setGlobalState(globalState) {
    const globalStateString = JSON.stringify(globalState);
    localStorage.setItem("NOTEPAD_STORAGE", globalStateString)
}

export function getGlobalState() {
    const globalStateString = localStorage.getItem("NOTEPAD_STORAGE");
    const globalState = JSON.parse(globalStateString);
    return globalState;
}
