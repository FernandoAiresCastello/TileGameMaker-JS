class TGM_Ui {

    constructor() {
        this.defineButtons();
        this.defineWindows();
        this.initStyles();
        this.fadeIn();
    }

    defineButtons() {
       this.defineButton('file-outline', 'New', () => this.btnNewClick());
       this.defineButton('content-save', 'Save', () => this.btnSaveClick());
       this.defineButton('folder-open', 'Load', () => this.btnLoadClick());
       this.defineButton('tools', 'Settings', () => this.btnSettingsClick());
       this.defineButton('help-circle', 'Help', () => this.btnHelpClick());
    }

    defineButton(icon, title, onclick) {
        const buttons = $('.button-container');
        const button = `<div class="button"><span class="mdi mdi-${icon}"></span>${title}</div>`;
        buttons.append(button).click(onclick);
    }

    defineWindows() {
        $('.floating-window .mdi-close').click(this.hideFloatingWindow);
        // Map
        this.defineWindow('#top-center-window', 'grid', 'Map');
        this.addToolButton('#top-center-window', 'file-outline', 'New map');
        this.addToolButton('#top-center-window', 'broom', 'Clear map');
        // Object
        this.defineWindow('#top-left-window', 'cube-outline', 'Object');
        // Object library
        this.defineWindow('#bottom-left-window', 'bookshelf', 'Object library');
        // Map properties
        this.defineWindow('#top-right-window', 'format-list-bulleted-type', 'Map properties');
        // Map library
        this.defineWindow('#bottom-right-window', 'map-outline', 'Map library');
    }

    defineWindow(windowSelector, icon, title, footer, content) {
        const window = $(windowSelector);
        window.find('span.mdi').first().replaceWith(`<span class="mdi mdi-${icon ? icon : ''}">`);
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

    addToolButton(windowSelector, icon, title, onclick) {
        const window = $(windowSelector);
        const button = `<span class="mdi mdi-${icon}"></span>`;
        const toolbar = window.find('.window-toolbar');
        toolbar.append(button);
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
