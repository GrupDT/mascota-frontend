

<template>
    <div id="adoptar" class="container">
        <FormularioAdopcion @add-adopcion="agregarAdopcion" />
    </div>
</template>


<script >
import FormularioAdopcion from '../components/FormularioAdopcion.vue';

export default {
    components: {
        FormularioAdopcion
    },
    methods: {

        /**
    * @typedef {Object} adopcion
    * @property {String} id_mascota
    * @property {String} nombre
    * @property {String} telefono
    * @property {String} correo
   
    */
   
    /**
     * agregarAdopcion
     * esta funcion nos permite registrar una adopción
     * @param {adopcion} adopcion
     */

        async agregarAdopcion(adopcion) {
            try {
                console.log(adopcion)
                const respuesta = await fetch("http://localhost:5000/adopciones", {
                    method: "POST",
                    body: JSON.stringify(adopcion),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                // console.log(respuesta)
                // this.mascotaCreada = await respuesta.json();
                // this.mascotas = [...this.mascotas, mascota];
            } catch (error) {
                console.log(error);
            }
        }
    }
}

</script>