/*=============================================================================
    ObjectLibrary
    Represents a collection of distinct reusable game objects
=============================================================================*/
class TGL_ObjectLibrary {
    objects = new Array();

    constructor() {
    }

    addObject(gameObject) {
        gameObject.libraryId = TGL_Util.generateId();
        this.objects.push(gameObject);
    }

    findObjectById(libraryId) {
        const obj = _.find(this.objects, (o) => o.libraryId === libraryId);
        if (!obj) {
            console.warn('Object with libraryId ' + libraryId + ' not found');
        }
        return obj;
    }

    removeObjectById(libraryId) {
        const obj = this.findObjectById(libraryId);
        if (obj) {
            _.remove(this.objects, (o) => o.libraryId === libraryId);
        }
    }
}
