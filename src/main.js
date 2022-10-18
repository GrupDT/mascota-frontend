import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import Inicio from './Views/Inicio.vue';
import Adoptar from './Views/Adoptar.vue';
import Detalle from './Views/Detalle.vue';
import Perro from './Views/Perro.vue';
import Gato from './Views/Gato.vue';

import RegistroMascota from './Views/RegistroMascota.vue';

import App from './App.vue'

const routes = [
    { path: '/', component: Inicio },
    { path: '/registro', component: RegistroMascota },
    { path: '/perro', component: Perro },
    { path: '/gatos', component: Gato },
    { path: '/adoptar/:id', component: Adoptar },
    { path: '/detalle/:id', component: Detalle },
   
  ]
  const router = createRouter({
 
    history: createWebHashHistory(),
    routes, 
  })


const app = createApp(App)

app.use(router)


app.mount("#app")

  
