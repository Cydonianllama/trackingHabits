export const ignoreAnclas = (hashCode) => {
    switch (hashCode) {
        case '#Home':
            return true
        case '#features':
            return true
        case '#fake-pricing':
            return true
        case '#git-hub-integration':
            return true
        default:
            return false
    }
}