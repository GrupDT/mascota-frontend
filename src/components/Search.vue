<template>
    <div id="search" class="mt-2">
       <div class="d-flex justify-content-end">
        <form @submit="enviarFormulario" class="d-flex" role="search">
            <input v-model="id" class="form-control me-2" type="text" placeholder="Search" aria-label="Search">


            <button class="btn btn-primary">
                buscar
            </button>
        </form>
       </div>
    </div>
</template>


<script>




export default {
    name:"navbar",
    data() {
        return {
            id: ''
        }
    },
    methods:{
        enviarFormulario(){
        
        this.$emit('buscar-mascota', this.id);
        this.id = ''
      }
    
        
    },
    
}


</script>
