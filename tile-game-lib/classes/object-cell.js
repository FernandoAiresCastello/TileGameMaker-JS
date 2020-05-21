/*=============================================================================
    ObjectCell
    Represents a position on an object layer where a game object can be placed
=============================================================================*/
class TGL_ObjectCell {
    objectId = null;
    
    constructor(objectId) {
        if (objectId !== undefined)
            this.objectId = objectId;
    }
}
