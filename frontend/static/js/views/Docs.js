import AbstractView from "./_AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Docs");
    }

    async getHtml() {
        return `
            <h1>SQDSH API Documentation</h1>
            <p>Say welcome for SQDSH API! This is our documentation and we are so happy to introduce our project.</p>
            
            <h3>API hostname</h3>
            <p>Our API hostname is <code>https://api.sqdsh.top</code></p>

            <h3>Images API</h3>
            <ul>
                <li>- Demotivator: <code>/demotivator?token=***&text=hello | world !&imageURL=URL</code></li>
                <li>- GTA: <code>/gta?token=***&text=hello world!&imageURL=URL</code></li>
                <li>Allowed URLs: <code>cdn.discordapp.com, media.discordapp.net, i.imgur.com, api.telegram.org</code></li>
                <li>All generated images is stored on servers for 30 seconds, after which it is deleted</li>
                <li>Image will be only png/jpg</li>
                <li>You can generate an image 15 times in 30 seconds</li>
            </ul>

            <h3>Untrustworthy data</h3>
            <ul>
                <li>- Discord users blacklist: <code>/blacklist/:userID?token=***</code> (spammers, scammers, violate Discord ToS & Guidelines and more)</li>
                <li>- URLs blacklist: <code>/untrustworthy-links?token=***</code> (scam, spam and more)</li>
                <li>This is Sonata (<a href="https://bot.sqdsh.top/en" target="_blank">bot.sqdsh.top</a>) data, no third party services</li>
            </ul>
            
            <h3>More links</h3>
            <ul>
                <li><a href="https://api.sqdsh.top/authorize" target="blank">Get a API token</a></li>
                <li><a href="/check" data-link>Discord user check</a></li>
                <li><a href="https://github.com/sqdsh" target="blank">Our github organization</a></li>
            </ul>
        `;
    }
}