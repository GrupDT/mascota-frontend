<template>
  <div id="formulario-mascota">
    <form @submit.prevent="enviarFormulario" class="shadow p-3 mb-5 bg-body rounded">
      <div class="container">
        <div class="row">
          <div class="col-md-2">
            <div class="form-group">
              <label>Id</label>
              <input v-model="mascota.id_mascota" type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group">
              <label>Nombre</label>
              <input v-model="mascota.nombre" type="text" class="form-control" />
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-group">
              <label>Descripcion</label>
              <textarea v-model="mascota.descripcion" class="form-control" id="exampleFormControlTextarea1"
                rows="1"></textarea>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <label for="categoria">Seleccione la categoria</label>
              <select v-model="mascota.categoria" class="form-control" id="categoria">
                <option value="1">Perro</option>
                <option value="2">Gato</option>
              </select>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-group">
              <label>seleccione imagen</label>
              <input @change="imagenSeleccionada" type="file" class="form-control" />
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-3">
            <div class="form-group">
              <button class="btn btn-primary">Añadir mascota</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'formulario-mascota',
  data() {
    return {
      
      mascota: {
        id_mascota: '',
        nombre: '',
        descripcion: '',
        categoria: '',
        imagen: ''
      },
    }
  },
  methods: {

    /**
     * enviarFormulario
     * esta funcion nos permite emitir la informacion recopilada del formularion
     */
    enviarFormulario() {
      this.$emit('add-mascota', this.mascota);
      this.mascota = {
        id_mascota: '',
        nombre: '',
        descripcion: '',
        categoria: '',
        imagen: null
      }
    },

    /**
     * imagenSeleccionada
     * esta funcion nos permite obtener el file de nuestra imagen
     * @param {*} e 
     */
    imagenSeleccionada(e) {
      this.mascota.imagen = e.target.files[0];
    }
  }
}
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
</style>