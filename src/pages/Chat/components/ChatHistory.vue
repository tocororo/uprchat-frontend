<script setup lang="ts">
import DeleteIcon from '../../../assets/DeleteIcon.vue';
import AddButton from '../../../components/AddButton.vue';
</script>

<template>
    <div class="border-2 bg-green-700 rounded-r-lg p-4 text-white sm:flex sm:flex-col gap-2 hidden justify-between">
        <AddButton class="border-2 p-1 rounded-lg flex justify-center bg-green-800 hover:bg-green-700"
            text="Nuevo Chat" />
        <div class="grow border-2 p-1 rounded-lg flex flex-col">
            <h3 class="text-center underline">Historial</h3>
            <div class="history-container justify-self-start">
                <ul class="flex flex-col gap-1 overflow-y-scroll max-h-full">
                    <li class="flex justify-between p-1">
                        <a href="#">Chat 1</a>
                        <button class="flex justify-center items-center bg-red-700 rounded-lg">
                            <DeleteIcon />
                        </button>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<style scoped>
.history-container {
    max-height: 60dvh;
}
</style>
