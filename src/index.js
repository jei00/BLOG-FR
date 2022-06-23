import "./PostList.js";
import "./PostEdit.js";
import "./Menu.js";
import "./Home.js"
import "./PostView.js"
import "./postStore.js"
import { Router } from "./lib/vaadin-router.js";

const outlet = document.querySelector('main');
const router = new Router(outlet);

router.setRoutes([
    {path: '/',     component: 'blog-home'},
    {path: '/posts',     component: 'post-list'},
    {path: '/posts/:idpost',   component: 'post-view'},
    {path: '/creapost',     component: 'postEdit'},
    {path: '/delete',     component: 'postEdit'},
  ]);

export {router};