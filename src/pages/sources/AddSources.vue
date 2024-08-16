<script setup lang="ts">
import { ref, type Ref } from 'vue';

import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import AddButton from '../../components/AddButton.vue';
import CancelButton from '../../components/CancelButton.vue';
import AddIcon from '../../assets/AddIcon.vue';
import DeleteIcon from '../../assets/DeleteIcon.vue';

const name: Ref<string> = ref("");
const newUrl: Ref<string> = ref("");
const currentUrl: Ref<string> = ref("");
const listUrl: Ref<Array<string>> = ref([]);
const newDomain: Ref<string> = ref("");
const currentDomain: Ref<string> = ref("");
const listDomains: Ref<Array<string>> = ref([]);
const collector: Ref<string> = ref("");

const validateURL = (url: string) => {
    const regex = new RegExp(
        '^' +
        '(?:http|ftp)s?://' +
        '((?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+(?:[A-Z]{2,6}\.?|[A-Z0-9-]{2,}\.?)|' +
        '(?:localhost|' +
        '[A-Z0-9._%+-]+@' +
        '[A-Z]{2,}\.?))' +
        '(:\\d+)?' +
        '(?:[/?#][^\\s]*)?' +
        '$'
    );
    return regex.test(url);
}

const addUrl = () => {

    if (newUrl.value === "" || !validateURL(newUrl.value)) {
        alert("Por favor inserte una url valida");
    } else {
        listUrl.value.push(newUrl.value);
    }
    newUrl.value = "";

};

const removeUrl = () => {
    if (currentUrl.value === "") {
        alert("Por favor elija una url");
        return;
    }
    listUrl.value = listUrl.value.filter(item => item !== currentUrl.value);
    currentUrl.value = "";
};

const validateDomain = (domain: string) => {
    const regex = /^[A-Za-z0-9.-]+\.[A-Za-z]{2,}(\.[A-Za-z]{2,})?$/;
    return regex.test(domain);
}

const addDomain = () => {
    if (newDomain.value === "" || !validateDomain(newDomain.value)) {
        alert("Por favor inserte un dominio valido");
    } else {
        listDomains.value.push(newDomain.value);
    }
    newDomain.value = "";

};

const removeDomain = () => {
    if (currentDomain.value === "") {
        alert("Por favor elija un dominio");
        return;
    }
    listDomains.value = listDomains.value.filter(item => item !== currentDomain.value);
    currentDomain.value = "";
};

const cancel = ()=> {window.history.back();};

const addSource = () => {
    if (name.value === "") alert("Por favor escriba un nombre");
    if (listUrl.value.length === 0) alert("Por favor agregue una al menos una url de inicio");
    if (collector.value === "") alert("Por favor elija un recolector");
    const source = {
        name: name.value,
        listUrl: listUrl.value,
        listDomains: listDomains.value,
        collector: collector
    }
    console.log(source);
    window.location.pathname = "sources";

};

</script>

<template>
    <Header headerTitle="Nueva Fuente" />
    <main class="sm:w-3/4 w-4/5 flex flex-col justify-center">
        <form action="" @submit.prevent="" class="grid grid-cols-1 sm:grid-cols-2 grid-rows-7 items-center gap-2 p-3 ">
            <label for="name">Nombre*:</label>
            <div class="border-2 border-green-600 flex p-2 rounded-lg">
                <input v-model="name" class="w-full outline-0" placeholder="Escriba el nombre de la fuente" type="text"
                    name="name" id="">
            </div>
            <label for="new-url">Nueva URL:</label>
            <div class="border-2 border-green-600 flex gap-1  p-2 rounded-lg">
                <input class="w-full outline-0" placeholder="Escriba la url de inicio a agregar" type="text"
                    name="new-url" id="" v-model="newUrl">
                <button class="bg-green-600 rounded-lg " @click="addUrl"><AddIcon/></button>
            </div>
            <label for="url-list">URLs de Inicio*:</label>
            <div class="border-2 border-green-600 flex gap-1 p-2 rounded-lg">
                <select v-model="currentUrl" class="w-full bg-transparent outline-0" name="url-list" id="">
                    <option v-for="(url, index) in listUrl" :key="index" :value="url">{{ url }}</option>
                </select>
                <button class="bg-red-600 rounded-lg " @click="removeUrl"><DeleteIcon/></button>
            </div>
            <label for="new-domain">Nuevo Dominio:</label>
            <div class="border-2 border-green-600 flex p-2 rounded-lg">
                <input v-model="newDomain" class="w-full outline-0" type="text"
                    placeholder="Escriba el dominio a agregar" name="domain-url" id="">
                <button class="bg-green-600 rounded-lg " @click="addDomain"><AddIcon/></button>
            </div>
            <label for="domain-list">Dominios permitidos*:</label>
            <div class="border-2 border-green-600 flex p-2 rounded-lg">
                <select v-model="currentDomain" class="w-full bg-transparent outline-0" name="domain-list" id="">
                    <option v-for="(domain, i) in listDomains" :key="i" :value="domain">{{ domain }}</option>
                </select>
                <button class="bg-red-600 rounded-lg " @click="removeDomain">
                    <DeleteIcon/>
                </button>

            </div>
            <label for="collector">Recolector*:</label>
            <div class="border-2 border-green-600 flex p-2 rounded-lg">
                <input v-model="collector" class="w-full outline-0" type="text" name="collector" id=""
                    placeholder="Escriba el recolector q usará la fuente">
            </div>
            <AddButton text="Agregar" :onClickAction="addSource"/>
            <CancelButton text="Cancel" :onClickAction="cancel" />
        </form>
    </main>
    <Footer />
</template>

<style scoped>
label {
    text-align: center;
}
</style>
