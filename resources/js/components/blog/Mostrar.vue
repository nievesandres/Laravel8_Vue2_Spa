<template>
    <div class="container row">
        <div class="col-12 mt-4">
            <router-link class="btn btn-success" :to="{name:'crearBlog'}"><i class="fa fa-plus-circle"></i></router-link>
        </div>

        <div class="col-12 mt-2">
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead class="bg-primary text-white">
                        <tr>
                            <th>Id</th>
                            <th>Titulo</th>
                            <th>Contenido</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(blog, index) in blogs" :key="blog.id">
                            <td>{{ ++index }}</td>
                            <td>{{ blog.titulo }}</td>
                            <td>{{ blog.contenido }}</td>
                            <td>
                                <router-link :to="{name:'editarBlog',params:{id:blog.id}}" class="btn btn-info"><i class="far fa-edit"></i></router-link>
                                <button class="btn btn-danger" @click="borrarBlog(blog.id)"><i class="far fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'blogs',
    data() {
        return{
            blogs:[],
        }
    },
    mounted(){
        this.mostrarBlogs()
    },
    methods:{
        mostrarBlogs(){
            this.axios.get('/api/blog')
            .then(response => this.blogs = response.data)
            .catch(error => console.log(error))
        },
        borrarBlog(id){
            if(confirm('¿Esta seguro de eliminar este blog?')){
                this.axios.delete(`/api/blog/${id}`)
                .then(response =>{
                    alert(response.data.mensaje)
                    this.mostrarBlogs();
                })
                .catch(error => console.log(error))
            }
        }
    }
}
</script>

<style>

</style>