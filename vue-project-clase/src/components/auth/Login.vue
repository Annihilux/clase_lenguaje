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


        <v-btn @click="LoginPresionado"> <v-icon icon="mdi-login"> </v-icon> LOG IN </v-btn><br><br>
        <v-btn @click="clickregistrar"> REGISTRARSE </v-btn><br><br>
        <v-btn @click="presionaRecuperar"> RECUPERAR CONTRASEÑA </v-btn>

        <v-chip closable></v-chip>
    </div>

    



</template>

<style scoped>

</style>