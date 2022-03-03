const Home = () => './components/Home.vue'
const Contacto = () => './components/Contacto.vue'

const Mostrar = () => './components/blog/Mostrar.vue'
const Crear = () => './components/blog/Crear.vue'
const Editar = () => './components/blog/Editar.vue'

export const routes = [
    {
        name:'home',
        path:'/',
        component:Home
    },
    {
        name:'contacto',
        path:'/contacto',
        component:Contacto
    },
    {
        name:'mostrarBlog',
        path:'/mostrar',
        component:Mostrar
    },
    {
        name:'editarBlog',
        path:'/editar/:id',
        component:Editar
    },
    {
        name:'crearBlog',
        path:'/crear',
        component:Crear
    }
]