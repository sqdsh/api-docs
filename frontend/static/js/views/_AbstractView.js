export default class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = `${title} | SQDSH`;
    }

    execute = false;

    async getHtml() {
        return "";
    }
}