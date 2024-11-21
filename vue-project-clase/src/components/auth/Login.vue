<script setup>
import { ref } from 'vue';
import {
  getRedirectResult,
  signInWithRedirect,
  signOut,
} from 'firebase/auth'

import { useCurrentUser, useFirebaseAuth } from 'vuefire';
import { signInWithEmailAndPassword } from 'firebase/auth';

const emit=defineEmits(['solicitarRegistro','LoginConExito']);

const sUsuario=ref("");
const sPassword=ref("");

const auth = useFirebaseAuth();

function LoginPresionado(){
    signInWithEmailAndPassword(auth,sUsuario.value,sPassword.value)
    .then((userCredential) => {
        const user=userCredential.user;
        alert("BIEN BIEN");
        emit('LoginConExito');
    })
    .catch((reason)=>
    {
        alert("MAL");
    })
    
    //alert("TODO BIEN");
};

function clickregistrar(){
    emit('solicitarRegistro');
};

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