

<template>
    <div id="card-mascota" class="row  gap-2 mt-5">
        <div v-for="mascota in mascotas" :key="mascota.id" class="col">
            <MascotaItem :mascota="mascota" />
        </div>
    </div>
</template>


<script >
import MascotaItem from './MascotaItem.vue';

export default {
    components: {
        MascotaItem
    },

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
     * @param {Array<mascota>} mascotas
     */
    props: {
        mascotas: Array
    }
}
</script>