<template>
    <div id="mascota-item">

        <div class="card" style="width: 18rem;">
            <img v-bind:src="mascota.imagen" class="card-img-top" style="height: 10rem;" alt="...">
            <div class="card-body">
                <h5 class="card-title">Nombre:{{mascota.nombre}}</h5>
                <p class="card-text">{{mascota.descripcion}}</p>
            </div>
            <div class="card-body text-end">
                <RouterLink v-bind:to="urlr" @click="detalle" class="btn btn-primary m-2 ">Detalle</RouterLink>
                <RouterLink v-bind:to="urld" class="btn btn-success">Adoptar</RouterLink>
            </div>
        </div>
    </div>
</template>

<script >



export default {

    /**
    * @typedef {Object} mascota
    * @property {String} id_mascota
    * @property {String} nombre
    * @property {String} descripcion
    * @property {String} categoria
    * @property {String} imagen
     */

    /**
     * MascotaItem
     * este componente recibe como parametro una mascota
     * @param {mascota} mascota
     */
    props: {
        mascota: Object
    },
    data() {
        /**
         * definimos algunas variable para el control de rutas y carga de imagen
         */
        return {
            imgUrl: this.mascota.imagen,
            urlr: 'detalle/' + this.mascota.id_mascota,
            urld: 'adoptar/' + this.mascota.id_mascota
        }
    },
    methods: {

        detalle() {

        }

    },

}

</script>
