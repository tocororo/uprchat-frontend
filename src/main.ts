import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Login from "./pages/Login.vue";
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");

export { listLinks };
