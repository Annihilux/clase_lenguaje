<script setup>
import { ref } from 'vue';

const emit=defineEmits(['cancelar']);


const sUsuarioRe=ref("");
const sPasswordRe=ref("");
const sPasswordReRepetir=ref("");


function clickcancelar(){
    emit('cancelar');
}

function clickaceptar(){
    
}



</script>

<template>
  
    <div id="contenedor-registro">
        <h1> REGISTRAR </h1>

        <div>
            <label> USUARIO: </label>
            <input type="text" v-model="sUsuarioRe">
        </div>

        <div>
            <label> CONTRASEÑA: </label>
            <input type="password" v-model="sPasswordRe">
        </div>

        <div>
            <label> REPETIR CONTRASEÑA: </label>
            <input type="password" v-model="sPasswordReRepetir">
        </div>


        <button @click="clickregistrar"> REGISTRAR </button>
        <button @click="clickcancelar"> CANCELAR </button>
    </div>

</template>

<style scoped>

</style>