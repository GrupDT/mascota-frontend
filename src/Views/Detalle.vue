<template>
    <div id="detalle" class="container mt-5">
        <div class="row   shadow p-3 mb-5 bg-body rounded">
            <div class="col-lg-5 col-md-5">
                <img class="imaged" v-bind:src="mascota.imagen" alt="">
            </div>
            <div class="col-lg-7 col-md-7">
                <h3 class="text-center">{{mascota.nombre}} </h3>
                <p>{{mascota.descripcion}}</p>
            </div>
            <div class="text-end">
                <button class="btn btn-secondary" @click="regresar">Regresar</button>
            </div>
        </div>
    </div>
</template>

<script >
export default {
    data() {
        return {
            imgUrl: '/src/assets/lbo.jpg',
            mascota: Object
        }
    },
    methods: {

        /**
         * regresar
         * esta funcion nos permiter regresar a una pagina
         */

        regresar() {
            this.$router.back()
        },

        /**
         * getById
         * esta funcion nos permite consultar por el id de la mascota
         */
        async getById() {
            try {

                const id = this.$route.params.id

                const respuesta = await fetch(`http://localhost:5000/mascotas/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                this.mascota = await respuesta.json();

            } catch (error) {
                console.log(error);
            }
        },


    },
    mounted() {
        this.getById()
    },
}
</script>

<style>
.imaged {
    object-fit: cover;
    width: 100%;


}
</style>