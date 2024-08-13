import Login from "./pages/Login.vue";
import Chat from "./pages/Chat.vue";
import SourceList from "./pages/sources/SourcesList.vue";
import AddSources from "./pages/sources/AddSources.vue";
import UpdateSources from "./pages/sources/UpdateSources.vue";
import LLMs from "./pages/llms/LLMs.vue";
import AddLLM from "./pages/llms/AddLLM.vue";
import JobsList from "./pages/collection-jobs/JobsList.vue";
import JobsAdd from "./pages/collection-jobs/JobsAdd.vue";
import JobsUpdate from "./pages/collection-jobs/JobsUpdate.vue";
import JobsLogs from "./pages/collection-jobs/JobsLogs.vue";
import UpdateLLM from "./pages/llms/UpdateLLM.vue";

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
      path: "/sources/update",
      name: "Actualizar Fuente",
      component: UpdateSources,
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
      path: "/jobs",
      name: "Recolecciones",
      component: JobsList
    },
    {
      path: "/jobs/add",
      name: "Nueva Recolección",
      component: JobsAdd
    },
    {
      path: "/jobs/update",
      name: "Actualizar Recolección",
      component: JobsUpdate
    },
    {
      path: "/jobs/logs",
      name: "Recolección",
      component: JobsLogs
    },
    {
      path: "/llms/update",
      name: "UpdateLLM",
      component: UpdateLLM
    }
  ];

export { routes };

