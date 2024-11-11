<script setup>
import { ref } from 'vue';

const emit=defineEmits(['solicitarRegistro','LoginConExito']);

const sUsuario=ref("");
const sPassword=ref("");


function LoginPresionado(){
    emit('LoginConExito');
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


        <button @click="LoginPresionado"> LOG IN </button>
        <button @click="clickregistrar"> REGISTRARSE </button>
    </div>



</template>

<style scoped>

</style>