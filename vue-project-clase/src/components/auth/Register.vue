<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Para navegar entre vistas
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useFirebaseAuth } from 'vuefire';
import { sendEmailVerification } from 'firebase/auth';
import Home from '../Home/Home.vue';

const emit = defineEmits(['cancelar']); // Emitir el evento 'cancelar'

const sUsuarioRe = ref("");
const sPasswordRe = ref("");
const errorMessage = ref(""); // Para mostrar errores
const successMessage = ref(""); // Para mostrar mensajes de éxito
const router = useRouter(); // Router para redirigir
const auth = useFirebaseAuth(); // Obtenemos la instancia de Firebase Auth

function clickcancelar() {
  emit('cancelar');
}

async function clickregistrar() {
  errorMessage.value = ""; // Limpiar mensajes de error
  successMessage.value = ""; // Limpiar mensajes de éxito

  // Validar si los campos están vacíos
  if (!sUsuarioRe.value || !sPasswordRe.value) {
    errorMessage.value = "Por favor, complete todos los campos.";
    return;
  }

  try {
    // Registrar usuario con Firebase Auth
    await createUserWithEmailAndPassword(auth, sUsuarioRe.value, sPasswordRe.value);
    
    // Si el registro es exitoso:
    successMessage.value = "Registro exitoso. Redirigiendo a Home...";
    sendEmailVerification(auth.currentUser);
    
    // Redirigir a Home.vue después de un breve retraso
    setTimeout(() => {
      router.push(vue-project-clase/src/components/Home/Home.vue); // Reemplaza '/home' con la ruta configurada para Home.vue
    }, 1500);
  } catch (error) {
    // Manejar errores de Firebase
    if (error.code === "auth/email-already-in-use") {
      errorMessage.value = "El correo ya está registrado.";
    } else if (error.code === "auth/weak-password") {
      errorMessage.value = "La contraseña es demasiado débil.";
    } else {
      errorMessage.value = "Error al registrar: " + error.message;
    }
  }
}
</script>

<template>
  <div id="contenedor-registro">
    <h1>REGISTRAR</h1>

    <div>
      <label>CORREO:</label>
      <input type="text" v-model="sUsuarioRe">
    </div>

    <div>
      <label>CONTRASEÑA:</label>
      <input type="password" v-model="sPasswordRe">
    </div>

    <!-- Mostrar mensajes de error o éxito -->
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    <p v-if="successMessage" style="color: green;">{{ successMessage }}</p>

    <button @click="clickregistrar">REGISTRAR</button>
    <button @click="clickcancelar">CANCELAR</button>
  </div>
</template>

<style scoped>
/* Puedes añadir estilos aquí */
</style>