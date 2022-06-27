import { html, render } from "./lib/lit-html.js";
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
        this.loadAndRenderPosts();

    }
    loadAndRenderPosts(){
        const {location} = router;
        this.id = location.params.idpost;
        console.log(this.id);

        fetch(`http://127.0.0.1:5000/posts/${this.id}`)
        .then(resp=> {
            if(resp.status != 200){
                console.log("Staus Error", resp.status);
                throw new Error("Fetch Bad Status");
            }
            return resp.json()
        })
        .then(data=> {
            this.data= data;
            render(this.renderView(),this.getRoot());
        })
    }
    renderView() {
        return html`
            <h1> ${this.data.idpost} | ${this.data.title}</h1>
            <div> ${this.data.category} | ${this.data.created}</div> 
            <p> ${this.data.content} </p>
            <div class="boxpost"></div>
        `;
    }
}
customElements.define("post-view", PostView);