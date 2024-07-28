import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Login from "./pages/Login.vue";
import Chat from "./pages/Chat.vue";
import SourceList from "./pages/sources/SourcesList.vue";
import AddSources from "./pages/sources/AddSources.vue";
import LLMs from "./pages/llms/LLMs.vue";
import AddLLM from "./pages/llms/AddLLM.vue";
import JobsList from "./pages/collection-jobs/JobsList.vue";

const listLinks: Array<Object> = [
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
    url: "/collector",
    text: "Recolecciones",
  },
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
    path: "/sources/add",
    name: "Nueva Fuente",
    component: AddSources,
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
  },
  {
    path: "/collector",
    name: "Recolecciones",
    component: JobsList
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");

export { listLinks };
