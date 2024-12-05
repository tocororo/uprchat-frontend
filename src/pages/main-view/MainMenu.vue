<script setup lang="ts">
import HeaderComponent from '../../components/HeaderComponent.vue';
import CardComponent from "./components/CardComponent.vue"
import FooterComponent from '../../components/FooterComponent.vue';
</script>

<template>
    <HeaderComponent />
    <main class="flex flex-col  sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-4 mt-3 mb-3 w-3/4">
        <CardComponent card-title="Chat" card-description="Aquí podrá acceder a la sección de chat" card-link="/chat">
            <img src="/src/assets/chat-card.svg" alt="">
        </CardComponent>
        <CardComponent card-title="Fuentes" card-description="Aquí podrá acceder a las fuentes" card-link="/sources">
            <img src="/src/assets/sources-card.svg" alt="">
        </CardComponent>
        <CardComponent card-title="Recolecciones" card-description="Aquí podrá acceder a las recolecciones"
            card-link="/crawljobs">
            <img src="/src/assets/crawl-card.svg" alt="">
        </CardComponent>
        <CardComponent card-title="Mappings" card-description="Aquí podrá acceder las funciones de mapeo"
            card-link="/root">
            <img src="/src/assets/mapping-card.svg" alt="">
        </CardComponent>
        <CardComponent card-title="Mapping Jobs" card-description="Aquí podrá acceder a los mapping jobs"
            card-link="/root">
            <img src="/src/assets/mapping-jobs-card.svg" alt="">
        </CardComponent>
        <CardComponent card-title="LLMs" card-description="Aquí podrá acceder a los LLMs" card-link="/llms">
            <img src="/src/assets/llms-card.svg" alt="">
        </CardComponent>
        <CardComponent card-title="Data Viewer" card-description="Aquí podrá visualizar datos recolectados"
            card-link="/root">
            <img src="/src/assets/viewer-card.svg" alt="">
        </CardComponent>
    </main>
    <FooterComponent />
</template>
