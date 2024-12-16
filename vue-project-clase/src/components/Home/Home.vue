<script setup>
    import { ref } from 'vue';
    import cascimg from '@/assets/cascada.jpg';
    //import { db } from '@/firebase';
    import { doc, collection, getDoc, getDocs } from 'firebase/firestore';
    import { useFirestore } from 'vuefire';

    const posts = ref([
        {id:1, title:"Post1", body:"Este es el cuerpo del post 1.", likes:"75667"},
        {id:2, title:"Post2", body:"Este es el cuerpo del post 2.", likes:"46456"},
        {id:3, title:"Post3", body:"Este es el cuerpo del post 3.", likes:"8896"},
        {id:4, title:"Post4", body:"Este es el cuerpo del post 4.", likes:"23456"}
    ]);

    const sNuevoTitulo=ref('');
    const sNuevoCuerpo=ref('');
    const sNuevoBotonAg=ref('Agregar');
    const sNumeroLikes=ref('');

    function agregarpost(){
        const idNuevoPost=posts.value.length+1;
        posts.value.push({
            id:agregarpost,
            title:sNuevoTitulo.value,
            body:sNuevoCuerpo.value,
            likes:sNumeroLikes.value,
            imagen:''});
            s.sNuevoCuerpo.value='';
            sNuevoCuerpo.value='';
    };

    const db=useFirestore();

    function DescargarPost(){
        const docRef=doc(db, "Profiles/miguel1/Posts", "post1");
        getDoc(docRef)
        .then(descargaOK)
        .catch(descargaNOK);
    };

    function DescargarPosts(){
        const collectionRef=collection(db, "Profiles/miguel1/Posts");
        getDocs(collectionRef)
        .then(descargaPostsOK)
        .catch(descargaPostsNOK);
    };

    function descargaPostsOK(postsDescargados){
        postsDescargados.forEach((post)=>{
            posts.value.push(post.data());
        });
    }

    function descargaPostsNOK(){
        console.log("MAL");
    }


    function descargaOK(docPost){
        if(docPost.exists()){
            const datos=docPost.data();
            alert("Document data: TITULO: " +docPost.data()['title']);
            posts.value.push(datos);
        }
        else{
            console.log("No existe!!");
        }
    }

    function descargaNOK(){
        console.log("MAL");
    }

</script>

<template>

    <h1>HOME</h1>

    <div class="contenedor-form">
        <input v-model="sNuevoTitulo" placeholder="Titulo"><br>
        <textarea v-model="sNuevoCuerpo" placeholder="Descripción"></textarea><br>
        <button @click="agregarpost"> {{ sNuevoBotonAg }} </button>
        <button @click="DescargarPost"> Descargar Post </button>
        <button @click="DescargarPosts"> Descargar Todos los Posts </button>
    </div>

    <div class="contenedor-posts">
        <h1> MIS POSTS SON: </h1>
        <div v-for="post in posts" :key="post.id" class="post">
            <h2> {{ post.title }} </h2>
            <p> {{ post.body }} </p>
            <p> {{ post.likes }} </p>

        </div>

    </div>

</template>

<style scoped>



</style>