import "./PostList.js";
import "./PostEdit.js";
import "./Menu.js";
import "./Home.js";
import "./PostView.js"
import {Router } from "./lib/vaadin-router.js";

const outlet = document.querySelector('main');
const router = new Router(outlet);

/*collegamento router */
router.setRoutes([
    {path: '/',     component: 'blog-home'},
    {path: '/posts',     component: 'post-list'},
    {path: '/posts/:idpost',   component: 'post-view'},
    {path: '/editpost/:idpost',     component: 'post-edit'}
  ]);

export {router};