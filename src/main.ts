import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Login from "./pages/Login.vue";
<<<<<<< HEAD
import Root from "./pages/Root.vue";
import Chat from "./pages/Chat.vue";
import SourceList from "./pages/sources/sources-list/SourcesList.vue";
import LLMs from "./pages/llms/LLMs.vue";
import AddLLM from "./pages/llms/AddLLM.vue";

const listLinks: Array<Object> = [
  {
    url: "/",
    text: "Login",
  },
  {
    url: "/chat",
    text: "Chat",
  },
  {
    url: "/sources",
    text: "Fuentes",
  },
  {
    url: "/llms",
    text: "LLMs",
  },
  {
    url: '/llms/add',
    text:"Agregar LLM"
  }
];
=======
import Chat from "./pages/Chat.vue";
import SourceList from "./pages/sources/sources-list/SourcesList.vue";
>>>>>>> 55f2ca3f881061df70d64015dc2c00bf3821d2c9

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
  },
  {
<<<<<<< HEAD
    path: "/sources",
    name: "Fuentes",
    component: SourceList,
  },
  {
    path: "/llms",
    name: "LLMs",
    component: LLMs,
  },
  {
    path: "/llms/add",
    name: "AddLLM",
    component: AddLLM
  }
=======
    path:"/sources",
    name:"Fuentes",
    component: SourceList,
  },
>>>>>>> 55f2ca3f881061df70d64015dc2c00bf3821d2c9
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");

export { listLinks };
