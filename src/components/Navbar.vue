<template>
    <div id="navbar">
        <nav class=" navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container">
                <a class="navbar-brand">CJA Adopciones</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link active" aria-current="page">Inicio
                            </router-link>
                        </li>
                      
                        <li class="nav-item">
                            <RouterLink to="/perro" class="nav-link">Perros</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/gatos" class="nav-link">Gatos</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/registro" class="nav-link">Registro</RouterLink>
                        </li>
                    </ul>
                    <!-- <form @submit="enviarFormulario" class="d-flex" role="search">
                        <input v-model="id" class="form-control me-2" type="text" placeholder="Search"
                            aria-label="Search">

                          
                        <button class="btn btn-outline-light" >
                            buscar
                        </button>
                    </form> -->
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';



export default {
    name:"navbar",
    data() {
        return {
            id: '',
            path:'',
            rutaActual:``
        }
    },
    methods:{
       async enviarFormulario(){
            
          

            const ruta = this.$route.path.slice(0,6)

            this.rutaActual  =`${ruta}/${this.id}`

            this.$router.push({path:`${this.rutaActual}`,state:RouterLink})

           
            console.log(this.rutaActual)
        },
        
    },
    
}


</script>
