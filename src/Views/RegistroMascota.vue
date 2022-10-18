<template>
  <div id="registro-mascota" class="container">
    <div class="row">
      <div class="col-md-12 mt-4 mb-2">
        <h3>Mascotas</h3>
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <formulario-mascota @add-mascota="agregarMascota" />
        <tabla-mascotas :mascotas="mascotas" @delete-mascota="eliminarMascota"
          @actualizar-mascota="actualizarMascota" />
      </div>
    </div>
  </div>
</template>

<script>
import TablaMascotas from "../components/TablaMascotas.vue";
import FormularioMascota from "../components/FormularioMascota.vue";

export default {
  name: "registro-mascota",
  components: {
    TablaMascotas,
    FormularioMascota,
  },
  data() {
    return {
      mascotas: [],
    };
  },
  methods: {
    /**
     * getMascotas
     * esta funcion nos permite obtener todas las mascotas
     */
    async getMascotas() {
      try {
        const respuesta = await fetch("http://localhost:5000/mascotas", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.mascotas = await respuesta.json();
      } catch (error) {
        console.log(error);
      }
    },


   /**
    * agregarMascota
    * esta funcion nos permite registrar una mascota
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

   
    async agregarMascota(mascota) {
      try {


        const formData = new FormData()

        formData.append("imagen", mascota.imagen)
        formData.append("id_mascota", mascota.id_mascota)
        formData.append("nombre", mascota.nombre)
        formData.append("descripcion", mascota.descripcion)
        formData.append("categoria", mascota.categoria)

        const respuesta = await fetch("http://localhost:5000/mascotas", {
          method: "POST",
          body: formData,


        });
        this.mascotaCreada = await respuesta.json();
        this.mascotas = [...this.mascotas, mascota];


      } catch (error) {
        console.log(error);
      }
    },


    /**
     * eliminarMascota
     * esta función nos permite realizar un peticion DELETE para eliminar una mascota
     * @param {String} id 
     */
    async eliminarMascota(id) {
      try {
        const respuesta = await fetch(`http://localhost:5000/mascotas/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const respuestaBK = await respuesta.json();
        console.log(respuestaBK);
        this.mascotas = this.mascotas.filter((mascota) => mascota.id !== id);
      } catch (error) {
        console.log(error);
      }
    },

    /**
     * actualizarMascota
     * esta función nos permite actualizar una masocta
     * @param {String} id 
     * @param {mascota} mascotaActualizada 
     */
    async actualizarMascota(id, mascotaActualizada) {
      try {

        const formData = new FormData()

        formData.append("imagen", mascota.imagen)
        formData.append("id_mascota", mascota.id_mascota)
        formData.append("nombre", mascota.nombre)
        formData.append("descripcion", mascota.descripcion)
        formData.append("categoria", mascota.categoria)

        const respuesta = await fetch("http://localhost:5000/mascotas", {
          method: "PUT",
          body: formData,
        });

        this.mascotaModificada = await respuesta.json();
        this.mascotas = this.mascotas.map((mascota) =>
          mascota.id === id ? mascotaActualizada : mascota
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
  /**
   * esta funcion nos permite cargar o montar el listado de mascotas que consultamos al servidor
   */
  mounted() {
    this.getMascotas();
  },
};
</script>

<style>
button {
  background: #009435;
  border: 1px solid #009435;
}
</style>