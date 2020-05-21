/*=============================================================================
    Util
    Collection of useful static methods
=============================================================================*/
class TGL_Util {
    static _idAlphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    static _idLength = 8;

    static log(message) {
        console.log(message);
    }
    
    static debug(object) {
        console.log(JSON.stringify(object));
    }

    static generateId() {
        var id = '';
        for (var i = 0; i < TGL_Util._idLength; i++) {
          id += TGL_Util._idAlphabet.charAt(Math.floor(Math.random() * TGL_Util._idAlphabet.length));
        }
        return id;
    }
}
