<script setup>
    import { ref } from 'vue';

    const posts = ref([
        {id:1, titulo:"Post1", cuerpo:"Este es el cuerpo del post 1."},
        {id:2, titulo:"Post2", cuerpo:"Este es el cuerpo del post 2."},
        {id:3, titulo:"Post3", cuerpo:"Este es el cuerpo del post 3."},
        {id:4, titulo:"Post4", cuerpo:"Este es el cuerpo del post 4."}
    ]);

    const sNuevoTitulo=ref('');
    const sNuevoCuerpo=ref('');
    const sNuevoBotonAg=ref('Agregar');

    function agregarpost(){
        const idNuevoPost=posts.value.length+1;
        posts.value.push({
            id:agregarpost,
            titulo:sNuevoTitulo.value,
            cuerpo:sNuevoCuerpo.value });
            s.sNuevoCuerpo.value='';
            sNuevoCuerpo.value='';
    };


</script>

<template>

    <h1>HOME</h1>

    <div class="contenedor-form">
        <input v-model="sNuevoTitulo" placeholder="Titulo"><br>
        <textarea v-model="sNuevoCuerpo" placeholder="Descripción"></textarea><br>
        <button @click="agregarpost"> {{ sNuevoBotonAg }} </button>
    </div>

    <div class="contenedor-posts">
        <h1> MIS POSTS SON: </h1>
        <div v-for="post in posts" :key="post.id" class="post">
            <img src="../../assets/logo.svg" alt="Logo" class="logo"/>
            <h2> {{ post.titulo }} </h2>
            <p> {{ post.cuerpo }} </p>

        </div>

    </div>

</template>

<style scoped>

    .logo{
            width: 50px;
            height: auto;
        }

</style>