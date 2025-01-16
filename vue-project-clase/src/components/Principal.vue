<script setup>
import {ref} from 'vue';
import Login from './auth/Login.vue';
import Register from './auth/Register.vue';
import Home from './Home/Home.vue';

const blLoginVisible=ref(true);
const blRegistroVisible=ref(false);
const blLoginPendiente=ref(true);
const drawer=ref(false);



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

    <div id="contenedor_principal">
        <h1> {{sTitulo}} </h1>
        <img src="../assets/logo.svg" alt="Logo" class="logo" v-if="blLoginPendiente"/>
        <div class="loginregister" v-if="blLoginPendiente">
            <Login v-if="blLoginVisible" @solicitarRegistro="mostrarRegistro" @LoginConExito="LoginOK"></Login>
            <Register v-if="blRegistroVisible" @cambiarALogin="cancelar"></Register>
        </div>

        <div class="appmain" v-if="!blLoginPendiente">
            <Home>  </Home>
        </div>
        
    </div>
    
</template>

<style scoped>

    #contenedor_principal{
        background-color: rgb(193, 213, 255);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .logo{
        width: 180px;
        height: auto;
    }

    

</style>