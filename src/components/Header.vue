<script setup lang="ts">

    const props = defineProps(['mensaje'])

</script>

<template>
    <header class="bg-green-800 w-full h-20 flex items-center justify-center absolute top-0">
        <p class="text-white text-4xl">{{ mensaje }}</p>
    </header>
</template>