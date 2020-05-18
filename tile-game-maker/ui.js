class Ui {

    constructor() {
        this.initStyles();
        this.initButtonHandlers();
    }

    initStyles() {
        // Application bars
        this.setAppBarBackColor('#3080f0');
        this.setAppBarTextColor('#ffffff');
        // Borders
        this.setBorderColor('#103080');
        // Buttons
        this.setButtonColor('#2040d0');
        // Workspace
        this.setWorkspaceBackColor('#2060e0');
        // Windows
        this.setWindowBarBackColor('#3080f0');
        this.setWindowBarTextColor('#ffffff');
        this.setWindowBackColor('#ffffff');
        this.setWindowTextColor('#000000');
    }

    initButtonHandlers() {
        $('#btn-new').click(() => alert('New'));
        $('#btn-export').click(() => alert('Export'));
        $('#btn-import').click(() => alert('Import'));
        $('#btn-help').click(() => alert('Help'));
    }

    setWorkspaceBackColor(color) {
        $('.workspace-panel').css('background', color);
    }

    setAppBarBackColor(color) {
        $('td.bar div').css('background', color);
    }

    setAppBarTextColor(color) {
        $('td.bar div').css('color', color);
    }

    setBorderColor(color) {
        $('.title-bar').css('border-bottom-color', color);
        $('.footer-bar').css('border-top-color', color);
        $('.window').css('border-color', color);
        $('.window-title').css('border-bottom-color', color);
        $('.window-footer').css('border-top-color', color);
    }

    setButtonColor(normalColor) {
        $('.button').css('background', normalColor);
    }

    setWindowTextColor(color) {
        $('.window').css('color', color);
    }

    setWindowBackColor(color) {
        $('.window').css('background', color);
    }

    setWindowBarBackColor(color) {
        $('.window-title').css('background', color);
        $('.window-footer').css('background', color);
    }

    setWindowBarTextColor(color) {
        $('.window-title').css('color', color);
        $('.window-footer').css('color', color);
    }

    makeGradient(color1, color2) {
        return 'linear-gradient(0deg, ' + color2 + ' 0%, ' + color1 + ' 100%)';
    }
}
