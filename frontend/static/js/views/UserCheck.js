import AbstractView from "./_AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Discord user check");
        this.execute = this.userCheck;
    }

    userCheck() {
        let id = window.location.pathname.split("/check/")[1];
        if (!id) return;
    
        return fetch(`/api/user/${id}`).then(r => r.json()).then(r => {
            if (!r.ok) return document.getElementById('status').innerText = r.message;
            Object.keys(r.response).map(key => {
                let row = document.getElementById(key);
                if (row) row.innerText = r.response[key];
            });
            if (r.response.warns >= 10) {
                document.getElementById('reason-span').style = "";
                document.getElementById('reason').innerText = r.response.reason;
            }
            if (r.response.nikaWarns)
                document.getElementById('nikaWarns-span').style = "";
    
            document.getElementById('status').innerText = "User blacklist data";
            return document.getElementById('description').style = "";
        }).catch(console.error);
    }

    async getHtml() {
        return `
            <h1>Discord user check</h1>
            <p id="status">Please wait, we are checking user...</p>
            <div id="description" style="display: none;">
                <hr>Database row ID: <b id="id"></b>
                <br>User ID: <b id="userID"></b>
                <br>Warns: <b id="warns"></b>
                <span id="reason-span" style="display: none;"><br>Ban reason: <b id="reason"></b></span>
                <span id="nikaWarns-span" style="display: none;"><br>Nika warns: <b id="nikaWarns"></b></span>
            </div>
        `;
    }
}