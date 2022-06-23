import { html,render } from "./lib/lit-html.js";

export default class PostList extends HTMLElement {

    constructor() {
        super();
        console.log("costruzione oggetto post-list");
        this.root = this//.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        console.log("post-list caricato nel DOM");
        fetch('http://127.0.0.1:5000/posts')
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
    onCreate(e){
        e.preventDefault();
        Router.go(`/creapost`)
}

    onEdit(e, id) {
        e.preventDefault();
        Router.go(`/posts${id}`)
    }

    onDelete(e, id) {
        e.preventDefault(); 
        deletePost(id)
        .then(resp=> {
            this.loadAndRenderPosts();
        })
        
    }

    renderView() {
        return html`
            <!-- <h2 class="title"> Elenco Post: </h2>-->
            <ul>
                ${this.data.map(post => this.renderPost(post))}
            <ul>
        `;
    }

    renderPost(post){
        return html`
           <h1><a href="/posts/${post.id}"> ${post.title}</a></h1>
           <div>${post.created} | ${post.category} | <button class="button">Edit</button><button class="button">Delete</button><button @click = ${e => this.onCreate(e)} class="button">crea</button></div> 
       `;
    }
}

customElements.define("post-list", PostList);