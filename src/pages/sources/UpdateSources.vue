<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import AddIcon from '../../assets/AddIcon.vue';
import BasicButton from '../../components/BasicButton.vue';
import CancelButton from '../../components/CancelButton.vue';
import DeleteIcon from '../../assets/DeleteIcon.vue';
import LoadingAnimation from '../../components/LoadingAnimation.vue';
import ModalWindow from '../../components/ModalWindow.vue';
import UpdateButton from '../../components/UpdateButton.vue';

const paramsId = useRoute().params["id"];

const name = ref<string>(paramsId.toString());
const newUrl = ref<string>("");
const currentUrl = ref<string>("");
const listUrl = ref<Array<string>>([]);
const newDomain = ref<string>("");
const currentDomain = ref<string>("");
const listDomains = ref<Array<string>>([]);
const collector = ref<string>("");
const isLoading = ref<boolean>(false);
const showModal = ref<boolean>(false);
let modalMsg = "";

const router = useRouter();

const addUrl = () => {

    if (newUrl.value === "") {

        modalMsg = "Por favor inserte una url valida";
        showModal.value = true;
        return;
    }
    listUrl.value.push(newUrl.value);
    newUrl.value = "";
};

const removeUrl = () => {
    if (currentUrl.value === "") {
        modalMsg = "Por favor elija una url";
        showModal.value = true;
        return;
    }
    listUrl.value = listUrl.value.filter(item => item !== currentUrl.value);
    currentUrl.value = "";
};

const addDomain = () => {
    if (newDomain.value === "") {
        modalMsg = "Por favor inserte un dominio valido";
        showModal.value = true;
        return;
    }
    listDomains.value.push(newDomain.value);
    newDomain.value = "";
};

const removeDomain = () => {
    if (currentDomain.value === "") {
        modalMsg = "Por favor elija un dominio";
        showModal.value = true;
        return;
    }
    listDomains.value = listDomains.value.filter(item => item !== currentDomain.value);
    currentDomain.value = "";
};

const cancel = () => { router.push({ name: "sourceslist" }); };

const updateSource = async () => {
    let flag = false;
    isLoading.value = true;
    if (name.value === "") {
        modalMsg = "Por favor escriba un nombre";
        flag = true;
    }
    if (listUrl.value.length === 0) {
        modalMsg = "Por favor agregue al menos una url de inicio";
        flag = true;
    }
    if (collector.value === "") {
        modalMsg = "Por favor elija un recolector";
        flag = true;
    }
    if (flag) {
        showModal.value = true;
        isLoading.value = false;
        return;
    }

    const data = {
        name: name.value,
        urls: listUrl.value,
        domains: listDomains.value,
        collector: collector.value,
    }
    const req = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    const response = await fetch("https://fake-backend-upr-chat.onrender.com/sources", req);

    if (response.ok) {
        router.push({ name: "sourceslist" });
    } else {
        modalMsg = "Error: " + response.body;
        isLoading.value = false;
    }
};


</script>

<template>
    <ModalWindow :open="showModal ? true : false" modal-title="Atención" :modal-content="modalMsg">
        <basic-button text="OK" @click-action="() => showModal = false" />
    </ModalWindow>
    <main class="sm:w-3/4 w-4/5 flex flex-col justify-center">
        <form action="" @submit.prevent="" class="grid grid-cols-1 sm:grid-cols-2 grid-rows-7 items-center gap-2 p-3 ">
            <label for="name">Nombre*:</label>
            <div class="border-2 border-gray-600 flex p-2 rounded-lg">
                <input v-model="name" disabled class="w-full outline-0 text-gray-500"
                    placeholder="Escriba el nombre de la fuente" type="text" name="name" id="">
            </div>
            <label for="new-url">Nueva URL:</label>
            <div class="border-2 border-green-600 flex gap-1  p-2 rounded-lg">
                <input class="w-full outline-0" placeholder="Escriba la url de inicio a agregar" type="text"
                    name="new-url" id="" v-model="newUrl">
                <button class="bg-green-600 rounded-lg " @click="addUrl">
                    <AddIcon />
                </button>
            </div>
            <label for="url-list">URLs de Inicio*:</label>
            <div class="border-2 border-green-600 flex gap-1 p-2 rounded-lg">
                <select v-model="currentUrl" class="w-full bg-transparent outline-0" name="url-list" id="">
                    <option v-for="(url, index) in listUrl" :key="index" :value="url">{{ url }}</option>
                </select>
                <button class="bg-red-600 rounded-lg " @click="removeUrl">
                    <DeleteIcon />
                </button>
            </div>
            <label for="new-domain">Nuevo Dominio:</label>
            <div class="border-2 border-green-600 flex p-2 rounded-lg">
                <input v-model="newDomain" class="w-full outline-0" type="text"
                    placeholder="Escriba el dominio a agregar" name="domain-url" id="">
                <button class="bg-green-600 rounded-lg " @click="addDomain">
                    <AddIcon />
                </button>
            </div>
            <label for="domain-list">Dominios permitidos*:</label>
            <div class="border-2 border-green-600 flex p-2 rounded-lg">
                <select v-model="currentDomain" class="w-full bg-transparent outline-0" name="domain-list" id="">
                    <option v-for="(domain, i) in listDomains" :key="i" :value="domain">{{ domain }}</option>
                </select>
                <button class="bg-red-600 rounded-lg " @click="removeDomain">
                    <DeleteIcon />
                </button>

            </div>
            <label for="collector">Recolector*:</label>
            <div class="border-2 border-green-600 flex p-2 rounded-lg">
                <input v-model="collector" class="w-full outline-0" type="text" name="collector" id=""
                    placeholder="Escriba el recolector q usará la fuente">
            </div>
            <LoadingAnimation v-show="isLoading" class="loading" />
            <UpdateButton v-show="!isLoading" text="Actualizar" :onClickAction="updateSource" />
            <CancelButton v-show="!isLoading" text="Cancel" :onClickAction="cancel" />
        </form>
    </main>
</template>

<style scoped>
label {
    text-align: center;
}

.loading {
    grid-column: 1 / 3;
}
</style>
