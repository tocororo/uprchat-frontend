<script setup lang="ts">
import { ref, type Ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import AddIcon from '../../assets/AddIcon.vue';
import BasicButton from '../../components/BasicButton.vue';
import CancelButton from '../../components/CancelButton.vue';
import DeleteIcon from '../../assets/DeleteIcon.vue';
import LoadingAnimation from '../../components/LoadingAnimation.vue';
import ModalWindow from '../../components/ModalWindow.vue';
import UpdateButton from '../../components/UpdateButton.vue';

const paramsId = useRoute().params["id"];

const name: Ref<string> = ref(paramsId.toString());
const newSource: Ref<string> = ref("");
const currentSource: Ref<string> = ref("");
const cloneSelected: Ref<string> = ref("");
const listSources: Ref<Array<string>> = ref([]);
const collectionDate: Ref<Date> = ref(new Date());

const isLoading = ref<boolean>(false);
const showModal = ref<boolean>(false);
let modalMsg = "";

const loadingSources = ref<boolean>(true);
const loadingCollectors = ref<boolean>(true);

const router = useRouter();

interface Source {
    name: string
    urls: Array<string>
    domains: Array<string>
    collector: string
}

interface Collector {
    name: string,
    sources: Array<string>
    date: string
}

const listSourcesPossible = ref<Array<Source>>([]);

const addType: Ref<string> = ref("custom");
const fetchSources = async () => {
    const response = await fetch("https://fake-backend-upr-chat.onrender.com/sources");
    listSourcesPossible.value = await response.json();
    loadingSources.value = false;
};

fetchSources();

const listCollectorPossible = ref<Array<Collector>>([]);

const fetchCollectors = async () => {
    const response = await fetch("https://fake-backend-upr-chat.onrender.com/jobs");
    listCollectorPossible.value = await response.json();
    loadingCollectors.value = false;
};

fetchCollectors();

const addSource = () => {

    if (newSource.value === "") {
        modalMsg = "Por favor elija al menos una fuente de las disponibles";
        showModal.value = true;
    } else {
        listSources.value.push(newSource.value);
    }
    newSource.value = "";
};

const removeSource = () => {
    if (currentSource.value === "") {
        modalMsg = "Por favor elija al menos una fuente de las disponibles";
        showModal.value = true;
        return;
    }
    listSources.value = listSources.value.filter(item => item !== currentSource.value);
    currentSource.value = "";
};

const cancel = () => { router.push({ name: "crawljobslist" }); };

const updateJob = async () => {
    if (addType.value !== "custom") {
        listSources.value = listCollectorPossible.value.filter((c) => c.name === cloneSelected.value)[0].sources;
    }
    if (name.value === "") {
        modalMsg = "Por favor escriba un nombre";
        showModal.value = true;
        return;
    }
    if (listSources.value.length === 0) {
        modalMsg = "Por favor elija al menos una fuente de las disponibles";
        showModal.value = true;
        return;
    }
    isLoading.value = true;
    const data = {
        name: name.value,
        sources: listSources.value,
        date: collectionDate.value.toString(),
    }
    const req = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    const response = await fetch("https://fake-backend-upr-chat.onrender.com/jobs", req);

    if (response.ok) {
        router.push({ name: "crawljobslist" });
    } else {
        modalMsg = "Error: " + response.body;
        isLoading.value = false;
    }
};

const getCurrentDate = computed(() => {
    let now = new Date();

    let year = now.getFullYear();
    let month = ("0" + (now.getMonth() + 1)).slice(-2);
    let day = ("0" + now.getDate()).slice(-2);
    let hour = ("0" + now.getHours()).slice(-2);
    let minute = ("0" + now.getMinutes()).slice(-2);
    let minDate = `${year}-${month}-${day}T${hour}:${minute}`;
    return minDate
});

</script>

<template>
    <ModalWindow :open="showModal ? true : false" modal-title="Atención" :modal-content="modalMsg">
        <basic-button text="OK" @click-action="() => showModal = false" />
    </ModalWindow>
    <main class="w-3/4 flex flex-col justify-center">
        <form action="" @submit.prevent=""
            class="grid grid-cols-1 sm:grid-cols-2  sm:grid-rows-7 grid-flow-row items-center gap-2 p-3 ">
            <label for="name">Nombre*:</label>
            <div class="border-2 border-green-600 flex p-2 rounded-lg">
                <input disabled v-model="name" class="w-full outline-0"
                    placeholder="Escriba el nombre de la recolección" type="text" name="name" id="">
            </div>
            <label for="custom-add"><input v-model="addType" type="radio" value="custom" name="add-type"
                    id="custom-add"> Establecer fuentes a recolectar y recolector</label>
            <label for="clone-add"> <input v-model="addType" type="radio" value="clone" name="add-type" id="clone-add">
                Clonar otra recolección</label>
            <label for="new-source">Fuente:</label>
            <div v-show="!loadingSources" class="border-2 border-green-600 flex gap-1  p-2 rounded-lg">
                <select v-model="newSource" class="w-full bg-transparent outline-0" name="new-source" id=""
                    :disabled="addType === 'clone'">
                    <option v-for="source in listSourcesPossible" :key="source.name" :value="source.name">{{
                        source.name
                        }}</option>
                </select>
                <button class="bg-green-600 rounded-lg disabled:opacity-50" :disabled="addType === 'clone'"
                    @click="addSource">
                    <AddIcon />
                </button>
            </div>
            <p class="flex justify-center items-center" v-show="loadingSources">Cargando fuentes &nbsp;
                <LoadingAnimation class="w-10" />
            </p>
            <label for="source-list">Fuentes*:</label>
            <div class=" border-2 border-green-600 flex gap-1 p-2 rounded-lg">
                <select v-model="currentSource" class="w-full bg-transparent outline-0" name="source-list"
                    :disabled="addType === 'clone'" id="">
                    <option v-for="(source, index) in listSources" :key="index" :value="source">{{ source }}</option>
                </select>
                <button class="bg-red-600 rounded-lg disabled:opacity-50" :disabled="addType === 'clone'"
                    @click="removeSource">
                    <DeleteIcon />
                </button>
            </div>
            <label for="clone">Recolección a clonar</label>
            <div v-show="!loadingCollectors" class=" border-2 border-green-600 flex gap-1 p-2 rounded-lg">
                <select v-model="cloneSelected" class="w-full bg-transparent outline-0" name="clone"
                    :disabled="addType !== 'clone'" id="">
                    <option v-for="(job, index) in listCollectorPossible" :key="index" :value="job.name">{{ job.name }}
                    </option>
                </select>
            </div>
            <p class="flex justify-center items-center" v-show="loadingCollectors">Cargando recoleciones &nbsp;
                <LoadingAnimation class="w-10" />
            </p>
            <label for="date">Fecha de recolección</label>
            <div class="border-2 border-green-600 flex gap-1 p-2 rounded-lg">
                <input v-model="collectionDate" class="w-full bg-transparent outline-0 border-0" type="datetime-local"
                    name="" id="" :min="getCurrentDate">
            </div>
            <UpdateButton v-show="!isLoading" text="Actualizar" :onClickAction="updateJob" />
            <CancelButton v-show="!isLoading" text="Cancelar" :onClickAction="cancel" />
            <LoadingAnimation class="loading" v-show="isLoading" />
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
