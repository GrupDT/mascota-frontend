<template>
  <div id="tabla-mascotas">
    <div v-if="!mascotas.length" class="alert alert-info" role="alert">
      No se han agregado Mascotas
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="mascota in mascotas" :key="mascota.id">
          <td v-if="editando === mascota.id_mascota">
            <input type="text" class="form-control" v-model="mascota.nombre" />
          </td>
          <td v-else>
            {{ mascota.nombre }}
          </td>
          <td v-if="editando === mascota.id_mascota">
            <input type="text" class="form-control" v-model="mascota.descripcion" />
          </td>
          <td v-else>
            {{ mascota.descripcion }}
          </td>
          <td v-if="editando === mascota.id_mascota">
            <button class="btn btn-success" @click="guardarMascota(mascota)">
              💾 Guardar
            </button>
            <button class="btn btn-secondary ml-2" @click="cancelarEdicion(mascota)">
              ❌ Cancelar
            </button>
          </td>
          <td v-else>
            <button class="btn btn-info" @click="editarMascota(mascota)">
              ✏️ Editar
            </button>
            <button class="btn btn-danger ml-2" @click="$emit('delete-mascota', mascota.id_mascota)">
              🗑️ Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "tabla-mascotas",

  /**
    * @typedef {Object} mascota
    * @property {String} id_mascota
    * @property {String} nombre
    * @property {String} descripcion
    * @property {String} categoria
    * @property {String} imagen
   */
  
  /**
   * este componente recibe una lista de mascota
   * @param {Array<mascota>} mascotas
   */
  props: {
    mascotas: Array,
  },
  data() {
    return {
      editando: null,
    };
  },
  methods: {
    /**
    * 
    * @typedef {Object} mascota
    * @property {String} id_mascota
    * @property {String} nombre
    * @property {String} descripcion
    * @property {String} categoria
    * @property {String} imagen
    */

    /**
     * @type {mascota}
     */


     /**
      * editarMascota
      * esta funcion nos permite editar la informacion de una mascota
      * @param {mascota} mascota
      */

    editarMascota(mascota) {
      this.mascotaEditada = Object.assign({}, mascota);
      this.editando = mascota.id_mascota;
    },

    /**
     * guardarMascota
     * esta funcion nos permite emitir la informacion necesaria para guardar una mascota
     * @param {mascota} mascota 
     */
    guardarMascota(mascota) {
      if (!mascota.nombre.length) {
        return;
      }
      this.$emit("actualizar-mascota", mascota.id_mascota, mascota);
      this.editando = null;
    },

    /**
     * cancelarEdicion
     * esta funcion nos permite cancelar el proceso de edicion de una mascota
     * @param {mascota} mascota 
     */
    cancelarEdicion(mascota) {
      Object.assign(mascota, this.mascotaEditada);
      this.editando = null;
    },
  },
};
</script>

<style scoped>

</style>