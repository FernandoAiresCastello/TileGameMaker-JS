/*=============================================================================
    ObjectMap
    Represents a stack of game object layers
=============================================================================*/
class TGL_ObjectMap {
    layers = new Array();
    width = 0;
    height = 0;

    constructor(layerCount, width, height) {
        this.initLayers(layerCount, width, height);
    }

    initLayers(layerCount, width, height) {
        if (layerCount <= 0) {
            console.error(`Invalid layer count: ${layerCount}`);
        }

        this.width = width;
        this.height = height;
        
        for (let i = 0; i < layerCount; i++) {
            this.layers.push(new TGL_ObjectLayer(width, height));
        }
    }

    getSize() {
        return this.width * this.height;
    }
}
