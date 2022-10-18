
    
<template>
    <div id="perro" class="container">



        <Search @buscar-mascota="buscarMascota" />

        <div v-if="perros.length !== 0">
            <CardMascota :mascotas="perros" />

        </div>
        <div v-else>
            <div class="alert alert-danger" role="alert">
                no existe mascota con el nombre {{nombre}}
            </div>

        </div>
    </div>
</template>

<script >
import CardMascota from '../components/CardMascota.vue';
import Search from '../components/Search.vue';

export default {
    name: "registro-mascota",
    components: {
        CardMascota,
        Search
    },
    data() {
        return {
            perros: [],
            nombre: ''
        };
    },
    methods: {
        async getPerros() {
            try {

                console.log("cargando perros")
                const respuesta = await fetch("http://localhost:5000/mascotasCategoria/1", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                this.perros = await respuesta.json();


            } catch (error) {
                console.log(error);
            }
        },
        /**
         * buscarMascota
         * buscar mascota por nombre
         * @param {String} nombre 
         */

        buscarMascota(nombre) {

            this.nombre = nombre

            this.perros = this.perros.filter(perro => perro.nombre === nombre)


        }

    },
    mounted() {


        this.getPerros();
    },



}

</script>