import { html,render } from "./lib/lit-html.js";
export default class Home extends HTMLElement{
    constructor(){
        super();
    }

    getRoot(){
        return this;
    }

    connectedCallback(){
        render(this.renderView(),this.getRoot());
    }

    renderView(){
        return html`
            <section class="hero">
                <div class="hero-body">
                <p class="title">
                    Blog di post
                </p>
                <p class="subtitle">
                    news, sport, salute, economia
                </p>
                </div>
            </section>
        `;
    }
}
customElements.define("blog-home", Home);