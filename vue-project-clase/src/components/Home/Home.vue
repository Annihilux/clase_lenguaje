<script setup>
    import { ref } from 'vue';
    import cascimg from '@/assets/cascada.jpg';
    import { doc, collection, getDoc, getDocs, setDoc, addDoc } from 'firebase/firestore';
    import { useFirestore } from 'vuefire';

    const posts = ref([
        {id:1, title:"Post1", body:"Este es el cuerpo del post 1."},
        {id:2, title:"Post2", body:"Este es el cuerpo del post 2."},
        {id:3, title:"Post3", body:"Este es el cuerpo del post 3."},
        {id:4, title:"Post4", body:"Este es el cuerpo del post 4."}
    ]);

    const sNuevoTitulo=ref('');
    const sNuevoCuerpo=ref('');
    const sNuevoBotonAg=ref('Agregar');
    const sNumeroLikes=ref('');

    const auth = useFirebaseAuth(); // Obtenemos la instancia de Firebase Auth
    const db = useFirestore();



    function agregarpost(){
        const datosNuevoPost={
            //id:agregarpost,
            title:sNuevoTitulo.value,
            body:sNuevoCuerpo.value,
            likes:0,
            imagen:''};

        //const documentoRefPostNuevo=doc(db,"Profiles/manuel1/Posts", ""+Date.now());
        const collectionRefPosts=collection(db,"Profiles/manuel1/Posts");
        //setDoc(documentoRefPostNuevo, datosNuevoPost)
        addDoc(collectionRefPosts,datosNuevoPost)
        .then(postInsertadoOK)
        .catch(postInsertadoNOK);
    }

    function postInsertadoOK(docRef){
        alert("BIEN INSERTADO" +docRef.id) ;
    }

    function postInsertadoNOK(){
        alert("BIEN INSERTADO");
    }


    function DescargarPost(){
        const docRef=doc(db, "Profiles/manuel1/Posts", "post1");
        getDoc(docRef)
        .then(descargaOK)
        .catch(descargaNOK);
    };

    function DescargarPosts(){
        const collectionRef=collection(db, "Profiles/"+auth.currentUser.uid+"/Posts");
        getDocs(collectionRef)
        .then(descargaPostsOK)
        .catch(descargaPostsNOK);
    };

    function descargaPostsOK(postsDescargados){
        posts.value.splice(0,posts.value.length);
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