<script setup>
import {ref} from 'vue';
import Login from './auth/Login.vue';
import Register from './auth/Register.vue';

const blLoginVisible=ref(true);
const blRegistroVisible=ref(false);


function mostrarRegistro(){
  blLoginVisible.value=false;
  blRegistroVisible.value=true;
}

function mostrarLogin(){
  blLoginVisible.value=true;
  blRegistroVisible.value=false;
}

function cancelar(){
  blLoginVisible.value=true;
  blRegistroVisible.value=false;
}


</script>

<template>
  

  <Login v-if="blLoginVisible" @logeado="mostrarLogin" @solicitarRegistro="mostrarRegistro" @cancelar="cancelar"></Login>
  <Register v-if="blRegistroVisible" @cancelar="cancelar"></Register>



</template>

<style scoped>

</style>