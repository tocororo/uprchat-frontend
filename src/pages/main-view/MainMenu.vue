<script setup lang="ts">
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import Card from "./components/Card.vue"


</script>

<template>
    <Header header-title="Menú Principal" />
    <main class="flex flex-col  sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-4 mt-3 mb-3 w-3/4">
        <Card card-title="Chat" 
        card-description="Aquí podrá acceder a la sección de chat" 
        card-link="/chat">
            <img src="/src/assets/chat-card.svg"  alt="">
        </Card>
        <Card card-title="Fuentes" 
        card-description="Aquí podrá acceder a las fuentes" 
        card-link="/sources">
            <img src="/src/assets/sources-card.svg"  alt="">
        </Card>
        <Card card-title="Recolecciones" 
        card-description="Aquí podrá acceder a las recolecciones" 
        card-link="/jobs">
        <img src="/src/assets/crawl-card.svg"  alt="">
        </Card>
        <Card card-title="Mappings" 
        card-description="Aquí podrá acceder las funciones de mapeo" 
        card-link="/mappings">
        <img src="/src/assets/mapping-card.svg"  alt="">
        </Card>
        <Card card-title="Mapping Jobs" 
        card-description="Aquí podrá acceder a los mapping jobs" 
        card-link="/mappingjobs">
        <img src="/src/assets/mapping-jobs-card.svg"  alt="">
        </Card>
        <Card card-title="LLMs" 
        card-description="Aquí podrá acceder a los LLMs" 
        card-link="/llms">
        <img src="/src/assets/llms-card.svg"  alt="">
        </Card>
        <Card card-title="Data Viewer" 
        card-description="Aquí podrá visualizar datos recolectados" 
        card-link="/viewer">
        <img src="/src/assets/viewer-card.svg"  alt="">
        </Card>
    </main>
    <Footer />
</template>
