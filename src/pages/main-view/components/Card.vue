<script setup lang="ts">
    const props = defineProps(
        {"cardTitle":String,
         "cardDescription":String,
         "cardLink":String,
         });
</script>

<template>
    <div class="flex flex-col rounded-lg border-2 border-green-700 p-2">
        <h2 class="text-green-600 text-2xl">{{ props.cardTitle }}</h2>
        <slot ></slot>
        <p >Descripción: {{ props.cardDescription }}</p>
        <a :href="props.cardLink" class="w-full justify-self-end bg-green-600 text-white text-center rounded-lg">Ir</a>
    </div>
</template>
