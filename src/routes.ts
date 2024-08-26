import AddLLM from "./pages/llms/AddLLM.vue";
import AddSources from "./pages/sources/AddSources.vue";
import ContainerComponent from './components/ContainerComponent.vue'
import ChatScreen from "./pages/Chat/ChatScreen.vue";
import SourceList from "./pages/sources/SourcesList.vue";
import JobsList from "./pages/collection-jobs/JobsList.vue";
import JobsAdd from "./pages/collection-jobs/JobsAdd.vue";
import JobsUpdate from "./pages/collection-jobs/JobsUpdate.vue";
import JobsLogs from "./pages/collection-jobs/JobsLogs.vue";
import LoginScreen from "./pages/Login/LoginScreen.vue";
import LLMs from "./pages/llms/LLMs.vue";
import MainMenu from "./pages/main-view/MainMenu.vue";
import UpdateLLM from "./pages/llms/UpdateLLM.vue";
import UpdateSources from "./pages/sources/UpdateSources.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginScreen,
  },
  {
    path: "/chat",
    name: "chat",
    component: ChatScreen,
  },
  {
    path: "/root",
    name: "main",
    component: MainMenu
  },
  {
    path: "/sources",
    name: "sourcesroot",
    component: ContainerComponent,
    children: [
      {
        path: "",
        name: "sourceslist",
        component: SourceList,
      },
      {
        path: "add",
        name: "addsources",
        component: AddSources,
      },
      {
        path: "update/:id",
        name: "updatesources",
        component: UpdateSources,
      },
    ]
  },
  {
    path: "/crawljobs",
    name: "crawljobs",
    component: ContainerComponent,
    children: [
      {
        path: "",
        name: "crawljobslist",
        component: JobsList
      },
      {
        path: "add",
        name: "addcrawljobs",
        component: JobsAdd
      },
      {
        path: "update/:id",
        name: "updatecrawljobs",
        component: JobsUpdate
      },
      {
        path: "logs/:id",
        name: "crawljobslogs",
        component: JobsLogs
      },
    ]
  },
  {
    path: "/llms",
    name: "llms",
    component: ContainerComponent,
    children: [
      {
        path: "",
        name: "llmslist",
        component: LLMs,
      },
      {
        path: "add",
        name: "addllm",
        component: AddLLM
      },
      {
        path: "update/:id",
        name: "updatellm",
        component: UpdateLLM
      }
    ]
  },
];

export { routes };

