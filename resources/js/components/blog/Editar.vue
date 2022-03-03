<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h1>Editar blog</h1>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="actualizarBlog">
                            <div class="form-group">
                                <label>Titulo</label>
                                <input type="text" class="form-control" v-model="blog.titulo">
                            </div>
                            <div class="form-group">
                                <label>Contenido</label>
                                <textarea class="form-control" v-model="blog.contenido"></textarea>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-success">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'editar-blog',
    data(){
        return{
            blog:{
                titulo:null,
                contenido:null
            }
        }
    },
    mounted(){
        this.mostrarBlog()
    },
    methods:{
        mostrarBlog(){
            this.axios.get('/api/blog/'+this.$route.params.id)
            .then(response =>{
                this.blog.titulo = response.data.titulo;
                this.blog.contenido = response.data.contenido
            }).catch(err => console.log(err))
        },
        actualizarBlog()
        {
            this.axios.put('/api/blog/'+this.$route.params.id,this.blog)
            .then(response =>{
                this.$router.push({name:'mostrarBlog'})
            }).catch(err=> console.log(err))
        }
    }
}
</script>

<style>

</style>