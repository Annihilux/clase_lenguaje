<script setup>
import { ref } from 'vue';
import {
  getRedirectResult,
  signInWithRedirect,
  signOut,
} from 'firebase/auth'

import { useCurrentUser, useFirebaseAuth } from 'vuefire';
import { signInWithEmailAndPassword,sendPasswordResetEmail } from 'firebase/auth';

const emit=defineEmits(['solicitarRegistro','LoginConExito']);

const sUsuario=ref("");
const sPassword=ref("");

const auth = useFirebaseAuth();

function LoginPresionado(){
    signInWithEmailAndPassword(auth,sUsuario.value,sPassword.value)
    .then(loginOK)
    .catch(loginNOK);
};

function clickregistrar(){
    emit('solicitarRegistro');
};

function presionaRecuperar(){
   sendPasswordResetEmail(auth, sUsuario.value);
}

function loginOK(userCredential){
    const user=userCredential.user;
        alert("BIEN BIEN");
        emit('LoginConExito');
}

function loginNOK(reason){
    alert("MAL");
}

</script>

<template>

    <div id="contenedor-login">
        <h1> LOG IN </h1>

        <div>
            <label> CORREO: </label>
            <input type="text" v-model="sUsuario">
        </div>

        <div>
            <label> CONTRASEÑA: </label>
            <input type="password" v-model="sPassword">
        </div>


        <button @click="LoginPresionado"> LOG IN </button>
        <button @click="clickregistrar"> REGISTRARSE </button>
        <button @click="presionaRecuperar"> RECUPERAR CONTRASEÑA </button>
    </div>



</template>

<style scoped>

</style>