<script setup>
import { ref } from 'vue';

const emit=defineEmits(['logeado','solicitarRegistro']);

const sUsuario=ref("");
const sPassword=ref("");


function clicklogin(){
    emit('logeado');
}

function clickregistrar(){
    emit('solicitarRegistro');
}

</script>

<template>

    <div id="contenedor-login">
        <h1> LOG IN </h1>

        <div>
            <label> USUARIO: </label>
            <input type="text" v-model="sUsuario">
        </div>

        <div>
            <label> CONTRASEÑA: </label>
            <input type="password" v-model="sPassword">
        </div>

        <div>
            <label> REPETIR CONTRASEÑA: </label>
            <input type="password" v-model="sPassword">
        </div>


        <button @click="clicklogin"> LOG IN </button>
        <button @click="clickregistrar"> REGISTRARSE </button>
    </div>



</template>

<style scoped>

</style>