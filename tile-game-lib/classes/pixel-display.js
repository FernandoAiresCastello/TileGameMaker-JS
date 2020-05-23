/*=============================================================================
    PixelDisplay
    Represents a rectangular pixel display
=============================================================================*/
class TGL_PixelDisplay {
    width = 0;
    height = 0;
    pixels = new Array();

    constructor(canvas, clearToColor) {
        this.width = canvas.width();
        this.height = canvas.height();

        for (let i = 0; i < this.getSize(); i++) {
            this.pixels.push(null);
        }
        
        if (!clearToColor) {
            clearToColor = '#000000';
        }

        this.clear(clearToColor);
    }

    getSize() {
        return this.width * this.height;
    }

    setPixel(x, y, color) {
        this.pixels[y * this.width + x] = color;
    }

    getPixel(x, y) {
        return this.pixels[y * this.width + x];
    }

    clear(color) {
        for (let i = 0; i < this.getSize(); i++) {
            this.pixels[i] = color;
        }        
    }
}
