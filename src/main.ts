import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Login from "./pages/Login.vue";
import Chat from "./pages/Chat.vue";
import SourceList from "./pages/sources/sources-list/SourcesList.vue";

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
    path:"/sources",
    name:"Fuentes",
    component: SourceList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
