<script setup>
import {ref} from 'vue';
import Login from './auth/Login.vue';
import Register from './auth/Register.vue';

const blLoginVisible=ref(true);
const blRegistroVisible=ref(false);
const blLoginPendiente=ref(true);



function mostrarRegistro(){
  blLoginVisible.value=false;
  blRegistroVisible.value=true;
}

function cancelar(){
  blLoginVisible.value=true;
  blRegistroVisible.value=false;
}

function LoginOK(){
    blLoginPendiente.value=false;
}


</script>

<template>
  
    <div class="contenedor">
        <h1> {{sTitulo}} </h1>
        <img src="../assets/logo.svg" alt="Logo" class="logo" v-if="blLoginPendiente"/>
        <div class="loginregister" v-if="blLoginPendiente">
            <Login v-if="blLoginVisible" @solicitarRegistro="mostrarRegistro" @cancelar="cancelar" @LoginConExito="LoginOK"></Login>
            <Register v-if="blRegistroVisible" @cancelar="cancelar"></Register>
        </div>

    <div class="appmain" v-if="!blLoginPendiente">
            <h1> ESTAMOS DENTRO </h1>
        </div>

    </div>

    

</template>

<style scoped>

    .contenedor{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-color: antiquewhite;
    }

    .logo{
        width: 180px;
        height: auto;
    }

</style>