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
                    ELENCO DEGLI ARGOMENTI TRATTATI:
                <ul style = "list-style-type:disc;">
                <li> News </li>
                <li> Sport </li>
                <li> Economia </li>
                <li> Salute </li>
                </ul>
                </p>
                </div>
            </section>
        `;
    }
}
customElements.define("blog-home", Home);