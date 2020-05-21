/*=============================================================================
    Tile
    Represents a square, two-colored 1bpp image
=============================================================================*/
class TGL_Tile {
    static width = 8;
    static height = 8;
    static defaultColor0 = '#ffffff';
    static defaultColor1 = '#000000';

    color0 = TGL_Tile.defaultColor0;
    color1 = TGL_Tile.defaultColor1;
    pixels = new TGL_TilePixels();

    constructor(color0, color1, pixels) {
        if (color0 !== undefined)
            this.color0 = color0;
        if (color1 !== undefined)
            this.color1 = color1;
        
        if (pixels !== undefined)
            this.pixels = pixels;
        else
            this.clear();

        if (this.pixels.rows.length != TGL_TilePixels.requiredRowCount)
            console.warn('TilePixels does not have exactly ' + TGL_TilePixels.requiredRowCount + ' rows');
    }

    clear() {
        this.pixels.clear();
    }
}
