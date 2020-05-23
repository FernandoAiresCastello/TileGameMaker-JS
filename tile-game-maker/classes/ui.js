/*=============================================================================
    Ui
    Represents the user interface
=============================================================================*/
class TGM_Ui {
    display = null;

    constructor() {
        this.initButtonHandlers();
        this.initMainDisplay();
        this.initStyles();
        this.fadeIn();
    }

    initButtonHandlers() {
        // Main application buttons
        $('#btn-new').click(() => this.btnNewClick());
        $('#btn-save').click(() => this.btnSaveClick());
        $('#btn-load').click(() => this.btnLoadClick());
        $('#btn-settings').click(() => this.btnSettingsClick());
        $('#btn-help').click(() => this.btnHelpClick());
        // Floating window buttons
        $('.floating-window .mdi-close').click(() => this.hideFloatingWindow());
    }

    initMainDisplay() {
        const canvas = $('canvas#main-display');
        canvas.width(256 * 2);
        canvas.height(192 * 2);

        this.display = new TGL_PixelDisplay(canvas, '#0000ff');
    }

    initStyles() {
        // Application bars
        this.setAppBarBackColor('#3080f0');
        this.setAppBarTextColor('#ffffff');
        // Borders
        this.setBorderColor('#2040d0');
        // Buttons
        this.setButtonColor('#2040d0');
        // Workspace
        this.setWorkspaceBackColor('#2060e0');
        // Windows
        this.setWindowBarBackColor('#3080f0');
        this.setWindowBarTextColor('#ffffff');
        this.setWindowBackColor('#ffffff');
        this.setWindowTextColor('#000000');
        // Toolbars
        this.setToolbarBackColor('#e0e0e0');
        this.setToolbarTextColor('#303030');
    }

    fadeIn() {
        $('body').fadeIn('slow');
    }

    alert(message, title, footer) {
        this.showFloatingWindow(message, title, footer);
    }

    btnNewClick() {
    }

    btnSaveClick() {
    }

    btnLoadClick() {
    }

    btnSettingsClick() {
    }

    btnHelpClick() {
        this.alert("There's no help here...", "Help", "Click on the X to close this window");
    }

    showFloatingWindow(content, title, footer) {
        const window = $('.floating-window-container');
        window.find('.window-title').html(title ? title : '');
        window.find('.window-footer').html(footer ? footer : '');
        window.find('.window-content').html(content ? content : '');
        window.fadeIn();
    }

    hideFloatingWindow() {
        $('.floating-window-container').fadeOut();
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
        $('.window-title-bar').css('border-bottom-color', color);
        $('.window-toolbar').css('border-bottom-color', color);
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
        $('.window-title-bar').css('background', color);
        $('.window-footer').css('background', color);
    }

    setWindowBarTextColor(color) {
        $('.window-title-bar').css('color', color);
        $('.window-footer').css('color', color);
    }

    setToolbarBackColor(color) {
        $('.window-toolbar').css('background', color);
    }

    setToolbarTextColor(color) {
        $('.window-toolbar').css('color', color);
    }

    makeGradient(color1, color2) {
        return 'linear-gradient(0deg, ' + color2 + ' 0%, ' + color1 + ' 100%)';
    }
}
