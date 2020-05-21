/*=============================================================================
    TilePixels
    Represents the pixel rows in a tile
=============================================================================*/
class TGL_TilePixels {
    static requiredRowCount = 8;
    rows = new Array();

    constructor(rows) {
        if (rows === undefined) {
            rows = new Array();
            for (let i = 0; i < TGL_TilePixels.requiredRowCount; i++) {
                rows.push(0);
            }
        }
        
        this.rows = rows;

        if (this.rows.length != TGL_TilePixels.requiredRowCount)
            console.warn('TilePixels does not have exactly ' + TGL_TilePixels.requiredRowCount + ' rows');
    }

    clear() {
        for (let i = 0; i < TGL_TilePixels.requiredRowCount; i++) {
            this.rows[i] = 0;
        }
    }
}
