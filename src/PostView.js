import { html, render } from "./lib/lit-html.js";
import { router } from "./lib/vaadin-router.js";
import { router } from "./index.js";
import { findPost } from "./postStore.js"

export default class PostView extends HTMLElement {

    constructor() {
        super();
    }

    getRoot() {
        return this;
    }

    connectedCallback() {
        const { location } = router;
        this.id = location.params.idpost ;
        render(this.renderView(), this.getRoot());
        if (this.idpost == "undefined") {
            console.log("create..")
            this.idpost = {
                title:'',
                content:''
            }
            render(this.renderView(), this.getRoot());
        } else {
            findPost(this.idpost)
                .then(idpost => {
                    this.idpost = idpost;
                    render(this.renderView(), this.getRoot());
                })
        }
    }

    renderView() {
        return html`
            <h1><a href="/posts/"> ${post.idpost} | ${post.title}</a></h1>
            <div> ${post.category} | ${post.content} | ${post.created}</div> 
        `;
    }
}
customElements.define("post-view", PostView);