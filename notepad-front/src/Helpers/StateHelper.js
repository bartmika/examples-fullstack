export function setGlobalState(globalState) {
    const globalStateString = JSON.stringify(globalState);
    localStorage.setItem("NOTEPAD_STORAGE", globalStateString)
}

export function appendGlobalState(localState) {
    let globalState = getGlobalState();
    for (let key in localState) {
        globalState[key] = localState[key];
    }
    setGlobalState(globalState);
}

export function getGlobalState() {
    const globalStateString = localStorage.getItem("NOTEPAD_STORAGE");
    return JSON.parse(globalStateString);
}

export function getOrCreateGlobalState() {
    const globalStateString = localStorage.getItem("NOTEPAD_STORAGE");
    if (globalStateString === undefined || globalStateString === null || globalStateString === "") {
        localStorage.setItem("NOTEPAD_STORAGE",  JSON.stringify({}))
        return {};
    } else {
        return JSON.parse(globalStateString);
    }
}
