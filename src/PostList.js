import { html,render } from "./lib/lit-html.js";

export default class PostList extends HTMLElement {

    constructor() {
        super();
        console.log("costruzione oggetto post-list");
        this.root = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        console.log("post-list caricato nel DOM");
        fetch('http://localhost:5000')
            .then(resp => {
                if (resp.status != 200) {
                    console.log("stato errato ", resp.status);
                    throw new Error("fetch bad status");
                }
                return resp.json()
            })
            .then(data => {
                this.data = data;
                render(this.renderView(),this.root);
            })
    }

    disconnectedCallback() {
        console.log("post-list scaricato dal DOM");
    }

    renderView() {
        return html`
            <ul>
                ${this.data.map(post=> this.renderPost(post))}
            </ul>
            
        `;
    }
    renderPost(post){
        return html`
            <li>${post.title}</li>
        `;
    }
}

customElements.define("post-list", PostList);