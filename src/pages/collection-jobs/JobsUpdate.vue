<script setup lang="ts">
import { ref, type Ref, computed } from 'vue';

import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import AddButton from '../../components/AddButton.vue';
import BasicButton from '../../components/BasicButton.vue';
import NavMenu from '../../components/NavMenu.vue';

const name: Ref<string> = ref("");
const newSource: Ref<string> = ref("");
const currentSource: Ref<string> = ref("");
const listSources: Ref<Array<string>> = ref([]);
const jobClon: Ref<string> = ref("");
const collectionDate: Ref<Date> = ref(new Date());
const collector: Ref<string> = ref("");

const addType: Ref<string> = ref("custom");

const addSource = () => {

    if (newSource.value === "") {
        alert("Por favor elija al menos una fuente de las disponibles");
    } else {
        listSources.value.push(newSource.value);
    }
    newSource.value = "";

};

const removeSource = () => {
    if (currentSource.value === "") {
        alert("Por favor elija al menos una fuente de las disponibles");
        return;
    }
    listSources.value = listSources.value.filter(item => item !== currentSource.value);
    currentSource.value = "";
};

const showNav: Ref<Boolean> = ref(false);
const showMenu = () => {
    if (showNav.value == false) {
        showNav.value = true;
    } else {
        showNav.value = false
    }
};

const cancel = () => { window.history.back(); };

const updateJob = () => {
    if (name.value === "") alert("Por favor escriba un nombre");
    if (listSources.value.length === 0) alert("Por favor elija al menos una fuente de las disponibles");
    if (collector.value === "") alert("Por favor elija un recolector");
    const source = {
        name: name.value,
        listSources: (addType.value === "custom" ? listSources.value : jobClon.value),
        collector: collector.value,
        date: collectionDate.value,
    }
    console.log(source);
    window.location.pathname = "jobs";

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
    <Header headerTitle="Actualizar Recolección" @showMenu="showMenu" />
    <NavMenu v-show="showNav" />
    <main class="sm:w-3/4 flex flex-col justify-center">
        <form action="" @submit.prevent="" class="grid grid-cols-2 grid-rows-7 items-center gap-2 p-3 ">
            <label for="name">Nombre*:</label>
            <div class="border-2 border-green-600 flex p-2 rounded-lg">
                <input v-model="name" class="w-full outline-0" placeholder="Escriba el nombre de la recolección"
                    type="text" name="name" id="">
            </div>
            <label for="custom-add"><input v-model="addType" type="radio" value="custom" name="add-type"
                    id="custom-add"> Establecer fuentes a recolectar y recolector</label>
            <label for="clone-add"> <input v-model="addType" type="radio" value="clone" name="add-type" id="clone-add">
                Clonar otra recolección</label>
            <label for="new-source">Fuente:</label>
            <div class="border-2 border-green-600 flex gap-1  p-2 rounded-lg">
                <select v-model="newSource" class="w-full bg-transparent outline-0" name="new-source" id=""
                    :disabled="addType === 'clone'">
                    <option value="">Elija una fuente para agregar</option>
                    <option value="q">Elija una fuente para agregar</option>
                    <option value="w">Elija una fuente para agregar</option>
                </select>
                <button class="bg-green-600 rounded-lg disabled:opacity-50" :disabled="addType === 'clone'"
                    @click="addSource"><img src="/src//assets/add.svg" alt=""></button>
            </div>
            <label for="source-list">Fuentes*:</label>
            <div class=" border-2 border-green-600 flex gap-1 p-2 rounded-lg">
                <select v-model="currentSource" class="w-full bg-transparent outline-0" name="source-list"
                    :disabled="addType === 'clone'" id="">
                    <option v-for="(source, index) in listSources" :key="index" :value="source">{{ source }}</option>
                </select>
                <button class="bg-red-600 rounded-lg disabled:opacity-50" :disabled="addType === 'clone'"
                    @click="removeSource"><img src="/src//assets/delete.svg" alt=""></button>
            </div>
            <label for="crawl-list">Recolector*:</label>
            <div class="border-2 border-green-600 flex gap-1 p-2 rounded-lg">
                <select v-model="collector" class="w-full bg-transparent outline-0 " name="crawl-list" id=""
                    :disabled="addType === 'custom'">
                    <option value="">Elija un Recolector</option>
                </select>

            </div>
            <label for="date">Fecha de recolección</label>
            <div class="border-2 border-green-600 flex gap-1 p-2 rounded-lg">
                <input class="w-full bg-transparent outline-0 border-0" type="datetime-local" name="" id=""
                    :min="getCurrentDate">
            </div>
            <AddButton text="Agregar" :onClickAction="updateJob" />
            <BasicButton text="Cancel" :onClickAction="cancel" />
        </form>
    </main>
    <Footer />
</template>

<style scoped>
label {
    text-align: center;
}
</style>
