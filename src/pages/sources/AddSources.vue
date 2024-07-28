<script setup lang="ts">
import { ref, type Ref } from 'vue';

import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import { listLinks } from '../../main.ts';
import AddButton from '../../components/AddButton.vue';
import BasicButton from '../../components/BasicButton.vue';

const name: Ref<String> = ref("");
const listUrl: Ref<Array<String>> = ref([]);
const listDomains: Ref<Array<String>> = ref([]);
const collector: Ref<String> = ref("");

</script>

<template>
    <Header header-title="Nueva Fuente" :list-links="listLinks" />
    <main class="w-3/4">
        <form action="" class="grid grid-cols-2 grid-rows-7 gap-2 p-3 ">
            <label for="name">Nombre*:</label>
            <div class="border-2 border-green-600 flex p-2 rounded-lg">
                <input v-model="name" class="w-full" placeholder="Escriba el nombre de la fuente" type="text" name="name" id="">
            </div>
            <label for="new-url">Nueva URL:</label>
            <div class="border-2 border-green-600 flex gap-1  p-2 rounded-lg">
                <input class="w-full outline-0" placeholder="Escriba la url de inicio a agregar" type="text" name="new-url" id="">
                <button class="bg-green-600 rounded-lg " ><img src="/src//assets/add.svg" alt=""></button>
            </div>
            <label for="url-list">URLs de Inicio*:</label>
            <div class="border-2 border-green-600 flex gap-1 p-2 rounded-lg">
                <select class="w-full outline-0" name="url-list" id="">
                    <option value="" selected>Elija la URL a eliminar</option>
                </select>
                <button class="bg-red-600 rounded-lg " ><img src="/src//assets/delete.svg" alt=""></button>
            </div>
            <label for="new-domain">Nuevo Dominio:</label>
            <div class="border-2 border-green-600 flex p-2 rounded-lg">
                <input class="w-full outline-0" type="text" placeholder="Escriba el dominio a agregar" name="domain-url" id="">
                <button class="bg-green-600 rounded-lg " ><img src="/src//assets/add.svg" alt=""></button>
            </div>
            <label for="domain-list">Dominios permitidos*:</label>
            <div class="border-2 border-green-600 flex p-2 rounded-lg">
                <select class="w-full outline-0" name="domain-list" id="">
                    <option value="" selected>Elija el dominio a eliminar</option>
                </select>
                <button class="bg-red-600 rounded-lg " ><img src="/src//assets/delete.svg" alt=""></button>
            </div>
            <label for="collector">Recolector*:</label>
            <div class="border-2 border-green-600 flex p-2 rounded-lg">
                <input type="text" name="collector" id="" placeholder="Escriba el recolector q usará la fuente">
            </div>
            <AddButton text="Agregar" />
            <BasicButton text="Cancel"/>
        </form>
    </main>
    <Footer />
</template>

<style scoped>
    label {
        text-align: center;
    }
</style>
