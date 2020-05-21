/*=============================================================================
    GameObject
    Represents any standalone single tile-sized game element
=============================================================================*/
class TGL_GameObject {
    libraryId = null;
    name = '';
    tiles = new Array();
    properties = new Map();
    visible = true;

    constructor(name, tiles, properties, visible) {
        if (name !== undefined)
            this.name = name;
        if (tiles !== undefined)
            this.tiles = tiles;
        if (properties !== undefined)
            this.properties = properties;
        if (visible !== undefined)
            this.visible = visible;

        if (this.tiles.length === 0)
            this.addTile();
    }

    addTile(color0, color1, pixels) {
        this.tiles.push(new TGL_Tile(color0, color1, pixels));
    }

    addToLibrary(library) {
        library.addObject(this);
    }
}
