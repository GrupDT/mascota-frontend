<template>
    <div id="formulario-adopcion" class=" d-grid justify-content-center align-items-center mt-5">
        <form @submit.prevent="enviarFormulario" enctype="multipart/formdata" class="shadow p-3 mb-5 bg-body rounded ">
            <div class="container">
                <h3>Formulario de adopción</h3>
                <div class="">
                    <input hidden type="text" v-model="adopcion.id_mascota" />
                    <div class="form-group mt-5">
                        <label>Nombre</label>
                        <input v-model="adopcion.nombre" type="text" class="form-control" />
                    </div>
                    <div class="form-group mt-3">
                        <label>Correo</label>
                        <input v-model="adopcion.correo" type="email" class="form-control" />
                    </div>
                    <div class="form-group mt-3">
                        <label>Telefo</label>
                        <input v-model="adopcion.telefono" type="text" class="form-control" />
                    </div>

                </div>
                <div class="d-flex gap-3 justify-content-end align-items-center mt-3">

                    <button class="btn btn-secondary" @click="regresar">Regresar</button>

                    <button class="btn btn-success">Solicitar</button>

                </div>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    name: 'formulario-adopcion',
    data() {
        return {
            adopcion: {
                id_mascota: this.$route.params.id,
                nombre: '',
                telefono: '',
                correo: ''
            },
        }
    },
    methods: {
    /**
     * enviarFormulario
     * esta funcion nos permite emitir la informacion recopilada del formularion de adopcion
     */
        enviarFormulario() {
            this.$emit('add-adopcion', this.adopcion);
            this.adopcion = {
                id_mascota: '',
                nombre: '',
                telefono: '',
                correo: ''
            }
        },

        /**
         * regresar
         * esta funcion nos permite regresar a una pagina
         * @param {*} e 
         */
        regresar(e) {
            e.preventDefault()
            this.$router.go(-1)
        }

    }
}
</script>



  