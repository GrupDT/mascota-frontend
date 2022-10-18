<template>
    <div id="gato" class="container">
        <Search @buscar-mascota="buscarMascota" />

        <div v-if="gatos.length !== 0">
            <CardMascota :mascotas="gatos" />
           
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
            gatos: [],
            nombre:''
        };
    },
    methods: {

        /**
        * getGatos
        * esta funcion nos permite filtrar listado de mascotas gatos
        */
        async getGatos() {
            try {

                console.log("cargando gatos")

                const respuesta = await fetch("http://localhost:5000/mascotasCategoria/2", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                this.gatos = await respuesta.json();

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

            this.gatos = this.gatos.filter(gato => gato.nombre === nombre)


        }


    },
    mounted() {
        this.getGatos();
    },
}

</script>