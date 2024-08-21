<script setup lang="ts">

const props = defineProps({
    modalTitle: String,
    modalContent: String,
});
</script>

<template>
    <dialog id="modal"
        class="flex flex-col gap-3 w-2/3 sm:w-2/5 border-4 border-green-600 rounded-lg p-2 fixed top-60 overflow-clip">
        <h1 class="text-2xl text-green-700 flex items-center">
            <img class="inline" src="/src/assets/warn.svg" alt="">
            &nbsp;
            {{ props.modalTitle }}
        </h1>
        <p class="px-10">{{ modalContent }}</p>
        <slot></slot>
    </dialog>
</template>


<style>
dialog[open] {
    z-index: 100;
    scale: 1;
    transition: scale .2s ease-in-out;
    @starting-style {
        scale: 0;
    }
}

dialog {
    transition: scale .2s ease-in-out, display .2s ease-in-out allow-discrete;
    scale: 0;
}

</style>
