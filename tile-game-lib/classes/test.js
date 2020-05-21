/*=============================================================================
    Test
    Collection of static methods for testing the library
=============================================================================*/
class TGL_Test {

    static run() {
        console.log('--- TileGameLib tests started ---');

        this.testTile();
        this.testGameObject();
        this.testObjectLibrary();
        this.testObjectLayer();

        console.log('--- TileGameLib tests finished ---');
    }

    static testObjectLayer() {
        const layer = new TGL_ObjectLayer(32, 24);
        console.assert(layer.width === 32, 'ObjectLayer.width should be 32');
        console.assert(layer.height === 24, 'ObjectLayer.width should be 24');
        console.assert(layer.getSize() === 32 * 24, 'ObjectLayer size should be 32 * 24');

        layer.setObject('testId', 11, 22);
        const cell = layer.getCell(11, 22);
        console.assert(cell, 'Cell should be defined');
        console.assert(cell.objectId === 'testId', 'Cell should contain object id "testId"');
    }

    static testObjectLibrary() {
        const objlib = new TGL_ObjectLibrary();
        console.assert(objlib.objects instanceof Array, 'ObjectLibrary.objects should be an array');
        console.assert(objlib.objects.length === 0, 'ObjectLibrary.objects.length should be 0');

        const obj1 = new TGL_GameObject();
        const obj2 = new TGL_GameObject();

        objlib.addObject(obj1);
        console.assert(objlib.objects.length === 1, 'ObjectLibrary.objects.length should be 1');
        console.assert(objlib.objects[0] === obj1, 'Added object should be the same instance as obj1');
        objlib.addObject(obj2);
        console.assert(objlib.objects.length === 2, 'ObjectLibrary.objects.length should be 2');
        console.assert(objlib.objects[1] === obj2, 'Added object should be the same instance as obj2');

        const idObj1 = obj1.libraryId;
        const idObj2 = obj2.libraryId;
        
        console.assert(idObj1, 'idObj1 should be defined');
        console.assert(idObj2, 'idObj2 should be defined');
        console.assert(idObj1 != idObj2, 'idObj1 should be different from idObj2');

        const refObj1 = objlib.findObjectById(idObj1);
        console.assert(refObj1, 'refObj1 should be defined');
        console.assert(refObj1 === obj1, 'refObj1 should be the same instance as obj1');

        objlib.removeObjectById(idObj1);
        console.assert(objlib.objects.length === 1, 'ObjectLibrary.objects.length should be 1');
        objlib.removeObjectById(idObj2);
        console.assert(objlib.objects.length === 0, 'ObjectLibrary.objects.length should be 0');
    }

    static testGameObject() {
        const obj = new TGL_GameObject();
        console.assert(obj.libraryId === null, 'GameObject.libraryId should be null');
        console.assert(obj.visible === true, 'GameObject.visible should be true');
        console.assert(obj.name === '', 'GameObject.name should be an empty string');
        console.assert(obj.tiles instanceof Array, 'GameObject.tiles should be an array');
        console.assert(obj.tiles.length === 1, 'GameObject.tiles.length should be 1');
        console.assert(obj.properties instanceof Map, 'GameObject.properties should be an empty map');

        obj.properties.set('test_prop', 'This is a test property!');
        console.assert(obj.properties.size === 1, 'GameObject.properties.size should be 1');
        console.assert(obj.properties.get('test_prop'), 'GameObject.properties should have a test_prop key');
        console.assert(obj.properties.get('test_prop') === 'This is a test property!', 
            'GameObject.properties["test_prop"] has an unexpected value');
    }

    static testTile() {
        const tile = new TGL_Tile();
        console.assert(tile.color0 === TGL_Tile.defaultColor0, 'Tile.color0 should be ' + TGL_Tile.defaultColor0);
        console.assert(tile.color1 === TGL_Tile.defaultColor1, 'Tile.color1 should be ' + TGL_Tile.defaultColor1);
        console.assert(tile.pixels, 'Tile.pixels is null');
        console.assert(tile.pixels.rows.length === 8, 'Tile.pixels should have 8 rows');
        
        let allRowsZero = true;
        tile.pixels.rows.forEach((row) => {
            if (row !== 0) {
                allRowsZero = false;
                return;
            }
        });

        console.assert(allRowsZero, 'TilePixels.rows should all be equal to zero');
    }
}
