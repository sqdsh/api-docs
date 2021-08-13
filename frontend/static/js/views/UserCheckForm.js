import AbstractView from "./_AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Discord user check");
        this.execute = this.userCheckForm;
    }

    userCheckForm() {
        document.getElementById('sub').addEventListener('click', (e) => {
            e.preventDefault();

            let id = document.getElementById('userID');
            if (!id) return;
        
            return window.navigateTo(`/check/${id.value}`);
        });
    }

    async getHtml() {
        return `
            <h1>Discord user check</h1>
            <p>Please enter Discord user ID in the field below.</p>

            <hr><input type="text" id="userID" placeholder="000000000000000000" minlength="16" maxlength="32" required>
            <br><button id="sub">Check</button>
            </form>
        `;
    }
}