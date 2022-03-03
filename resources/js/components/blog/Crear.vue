<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h1>Crear blog</h1>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="crearBlog">
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
    name:'crear-blog',
    data(){
        return{
            blog:{
                titulo:null,
                contenido:null
            }
        }
    },
    methods:{
        async crearBlog(){
            await this.axios.post('/api/blog',this.blog)
            .then(response => this.$router.push({name:"mostrarBlog"}))
            .catch(error => console.log(error))
            
        }
    }
}
</script>

<style>

</style>