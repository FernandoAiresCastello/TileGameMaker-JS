class TGM_Ui {

    constructor() {
        this.defineWindows();
        this.initStyles();
        this.initButtonHandlers();
        this.fadeIn();
    }

    defineWindows() {
        this.defineWindow('#top-left-window', 'bookshelf', 'Object Library');
        this.defineWindow('#top-center-window', 'grid', 'Map');
        this.defineWindow('#top-right-window', 'cube-outline', 'Properties');
        this.defineWindow('#bottom-left-window', 'dock-window', 'Window');
        this.defineWindow('#bottom-center-window', 'dock-window', 'Window');
        this.defineWindow('#bottom-right-window', 'dock-window', 'Window');
    }

    defineWindow(windowSelector, icon, title, footer, content) {
        const window = $(windowSelector);
        window.find('span.mdi').replaceWith(`<span class="mdi mdi-${icon ? icon : ''}">`);
        window.find('.window-title').html(title ? title : '');
        window.find('.window-footer').html(footer ? footer : '');
        window.find('.window-content').html(content ? content : '');
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
    }

    fadeIn() {
        $('body').fadeIn('slow');
    }

    initButtonHandlers() {
        $('#btn-new').click(() => this.btnNewClick());
        $('#btn-export').click(() => this.btnExportClick());
        $('#btn-import').click(() => this.btnImportClick());
        $('#btn-settings').click(() => this.btnSettingsClick());
        $('#btn-help').click(() => this.btnHelpClick());
    }

    alert(x, y, width, height, message, title, footer) {
        this.showFloatingWindow(x, y, width, height, message, title ? title : 'Alert', footer);
    }

    btnHelpClick() {
        this.alert(100, 100, 300, 200, "There's no help here...", "Help");
    }

    showFloatingWindow(x, y, width, height, content, title, footer) {
        const style = `top:${y}; left:${x}; width:${width}; height:${height}`;
        const window =
        `<div class="window floating-window" style="${style}">
            <div class="window-title-bar">
                <span class="window-title">${title ? title : ''}</span>
                <span class="mdi mdi-close"></span>
            </div>
            <div class="window-content">${content}</div>
            <div class="window-footer">${footer ? footer : ''}</div>
        </div>`;

        $('.floating-window-container').append(window);
        $('.floating-window-container').fadeIn();
        $('.floating-window .mdi-close').click(() => this.closeFloatingWindows());
        $('.floating-window .mdi-close').css('cursor', 'pointer');

        this.initStyles();
    }

    closeFloatingWindows() {
        $('.floating-window-container').fadeOut();
        $('.floating-window').remove();
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

    makeGradient(color1, color2) {
        return 'linear-gradient(0deg, ' + color2 + ' 0%, ' + color1 + ' 100%)';
    }
}
