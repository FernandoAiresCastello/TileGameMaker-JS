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
        this.testPixelDisplay();

        console.log('--- TileGameLib tests finished ---');
    }

    static testPixelDisplay() {
        const initialColor = '#0000ff';
        const mockCanvas = { width: () => 256, height: () => 192 };
        const display = new TGL_PixelDisplay(mockCanvas, initialColor);
        console.assert(display.pixels);
        console.assert(display.width === 256);
        console.assert(display.height === 192);
        console.assert(display.getSize() === 256 * 192);
        console.assert(display.pixels.length === 256 * 192);
        
        const randomX = 123;
        const randomY = 66;
        const randomColor = '#f5ec46'
        display.setPixel(randomX, randomY, randomColor);
        console.assert(display.getPixel(randomX, randomY) === randomColor);

        for (let y = 0; y < display.height; y++) {
            for (let x = 0; x < display.width; x++) {
                if (y === randomY && x === randomX) {
                    console.assert(display.getPixel(x, y) === randomColor);
                }
                else {
                    console.assert(display.getPixel(x, y) === initialColor);
                }
            }
        }
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
