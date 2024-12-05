<script setup lang="ts">
import { RouterLink } from 'vue-router';
const props = defineProps(
    {
        "cardTitle": String,
        "cardDescription": String,
        "cardLink": {
            type: String,
            required: true, 
        },
    });
</script>

<template>
    <div class="flex flex-col rounded-lg border-2 border-green-700 p-2">
        <h2 class="text-green-600 text-2xl">{{ props.cardTitle }}</h2>
        <slot></slot>
        <p>Descripción: {{ props.cardDescription }}</p>
        <Router-Link :to="props.cardLink"
            class="w-full justify-self-end bg-green-600 text-white text-center rounded-lg">Ir</Router-Link>
    </div>
</template>
