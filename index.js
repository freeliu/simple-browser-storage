let sessionTimer = {}
let localTimer = {}
let storage = {

}
/**
 * @param {string} name sessionStorage name
 * @param {string} value sessionStorage value
 * @param {number} expried expried in how many millisecond
 */
export function sessionSet(name, value, expried) {
    sessionStorage[name] = value
    if (sessionTimer.name) {
        clearTimeout(sessionTimer.name);
    }
    sessionTimer[name] = setTimeout(() => {
        sessionStorage.removeItem(name)
    }, expried)
}

/**
 * @param {string} name sessionStorage name
 * @param {string} value sessionStorage value
 * @param {number} expried expried in how many millisecond
 */
export function localSet(name, value, expried) {
    localStorage[name] = value
    if (localTimer[name]) {
        clearTimeout(localTimer.name);
    }
    localTimer.name = setTimeout(() => {
        localStorage.removeItem(name)
    }, expried)
}

export default {
    session: {
        set: sessionSet,
        get: name=>sessionStorage.name
    },
    local: {
        set: localSet,
        get: name=>localStorage.name
    }

}