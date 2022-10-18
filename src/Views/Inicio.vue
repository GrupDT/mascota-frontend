
<template>
    <div id="inicio" class="position-relative ">
        <img class="imagen w-100 object-center object-cover " v-bind:src="fondo" alt="">
        <div class="position-absolute text m-5">
            <h1  class="text-white">hacemos realidad tus sueños</h1>
            <p class="text-white opacity-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quia Lorem ipsum dolor sit <br> amet
                consectetur adipisicing elit. Voluptatum, quia.</p>
            <button class="btn btn-primary">saber mas..</button>
        </div>

    </div>
</template>

<script >

export default {
    data() {
        return {
            fondo: "/src/assets/ini2.jpg"
        }
    }
}
</script>


<style>
.imagen {
    
    height: 91vh;

}
.text{
    top: 25%;
}
</style>