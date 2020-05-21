/*=============================================================================
    ObjectLayer
    Represents a two-dimensional grid of game object cells
=============================================================================*/
class TGL_ObjectLayer {
    cells = new Array();
    width = 0;
    height = 0;

    constructor(width, height) {
        this.initCells(width, height);
    }

    initCells(width, height) {
        if (!width || !height || width <= 0 || height <= 0) {
            console.error(`Invalid layer size: width = ${width}; height = ${height}`);
        }

        this.width = width;
        this.height = height;

        for (let i = 0; i < this.getSize(); i++) {
            this.cells.push(new TGL_ObjectCell());
        }
    }

    getSize() {
        return this.width * this.height;
    }

    setObject(objectId, x, y) {
        const cell = this.getCell(x, y);
        if (cell) {
            cell.objectId = objectId;
        }
    }

    getObject(x, y) {
        const cell = this.getCell(x, y);
        return cell ? cell.objectId : null;
    }

    getCell(x, y) {
        if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
            console.error(`Invalid layer cell X:${x} Y:${y}. Layer size = Width:${this.width} Height:${this.height}`);
            return null;
        }
        else {
            const cellIndex = y * this.width + x;
            return this.cells[cellIndex];
        }
    }
}
