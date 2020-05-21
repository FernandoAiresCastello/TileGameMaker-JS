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
        this.testObjectMap();

        console.log('--- TileGameLib tests finished ---');
    }

    static testObjectMap() {
        const map = new TGL_ObjectMap(2, 20, 15);
        console.assert(map.width === 20);
        console.assert(map.height === 15);
        console.assert(map.getSize() === 20 * 15);
        
        console.assert(map.layers.length === 2);

        console.assert(map.layers[0].width === 20);
        console.assert(map.layers[0].height === 15);
        console.assert(map.layers[0].getSize() === 20 * 15);
        console.assert(map.layers[0].getSize() === map.layers[1].getSize());
    }

    static testObjectLayer() {
        const layer = new TGL_ObjectLayer(32, 24);
        console.assert(layer.width === 32);
        console.assert(layer.height === 24);
        console.assert(layer.getSize() === 32 * 24);

        layer.setObject('testId', 11, 22);
        const cell = layer.getCell(11, 22);
        console.assert(cell);
        console.assert(cell.objectId === 'testId');
    }

    static testObjectLibrary() {
        const objlib = new TGL_ObjectLibrary();
        console.assert(objlib.objects instanceof Array);
        console.assert(objlib.objects.length === 0);

        const obj1 = new TGL_GameObject();
        const obj2 = new TGL_GameObject();

        objlib.addObject(obj1);
        console.assert(objlib.objects.length === 1);
        console.assert(objlib.objects[0] === obj1);
        objlib.addObject(obj2);
        console.assert(objlib.objects.length === 2);
        console.assert(objlib.objects[1] === obj2);

        const idObj1 = obj1.libraryId;
        const idObj2 = obj2.libraryId;
        
        console.assert(idObj1);
        console.assert(idObj2);
        console.assert(idObj1 !== idObj2);

        const refObj1 = objlib.findObjectById(idObj1);
        console.assert(refObj1);
        console.assert(refObj1 === obj1);

        objlib.removeObjectById(idObj1);
        console.assert(objlib.objects.length === 1);
        objlib.removeObjectById(idObj2);
        console.assert(objlib.objects.length === 0);
    }

    static testGameObject() {
        const obj = new TGL_GameObject();
        console.assert(obj.libraryId === null);
        console.assert(obj.visible === true);
        console.assert(obj.name === '');
        console.assert(obj.tiles instanceof Array);
        console.assert(obj.tiles.length === 1);
        console.assert(obj.properties instanceof Map);

        obj.properties.set('test_prop', 'This is a test property!');
        console.assert(obj.properties.size === 1);
        console.assert(obj.properties.get('test_prop'));
        console.assert(obj.properties.get('test_prop') === 'This is a test property!');
    }

    static testTile() {
        const tile = new TGL_Tile();
        console.assert(tile.color0 === TGL_Tile.defaultColor0);
        console.assert(tile.color1 === TGL_Tile.defaultColor1);
        console.assert(tile.pixels);
        console.assert(tile.pixels.rows.length === 8);
        
        let allRowsZero = true;
        tile.pixels.rows.forEach((row) => {
            if (row !== 0) {
                allRowsZero = false;
                return;
            }
        });

        console.assert(allRowsZero);
    }
}
