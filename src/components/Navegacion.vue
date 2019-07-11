<template>
  <b-navbar toggleable="lg" type="dark" variant="info" class="navbarP" fixed="top">
    <b-navbar-brand :to="{name:'categorias'}">{{msg}}</b-navbar-brand>
    <!--b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav-->
    <b-navbar-nav class="ml-auto">
      <b-nav-item @click="modalShow=true">
        <i class="material-icons">exit_to_app</i>
      </b-nav-item>
    </b-navbar-nav>
    <!--/b-collapse-->
    <b-modal
      v-model="modalShow"
      title="¿Quieres Salir?"
      no-close-on-backdrop
      no-close-on-esc
      hide-header-close
      hide-footer
      header-class="headerm"
    >
      <p>
        Dándole un toque a este botón sales de la Tienda. Si quieres 
        navegar en la Tienda utiliza las opciones de la parte inferior: 
        <span>Categorías  -  Catalogo  -  Carrito</span>  
      </p> 
      
      <input @click="modalShow=false" class="btn" type="button" value="VOLVER" />
      <input @click="salir" class="btn" type="button" value="SALIR DE LA TIENDA" />
    </b-modal>
  </b-navbar>
</template>

<script>
export default {
  name: "Navegacion",
  data() {
    return {
      msg: "Cliente Pruebas",
      modalShow: false 
    };
  },
  methods: {
    salir() {
      this.$session.destroy();
      this.$router.push('/');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbarP {
  background: #f06292 !important;
}
i {
  color: aliceblue;
}
span {
  color: rgb(240, 98, 146);
  font-size: 20px;
}
.btn {
  color: rgb(240, 98, 146);
  margin: 0px 20px;
  border: none;
  background: #ffffff;
  float: right;
  padding: 10px 20px;
}
.btn:hover {
  background: rgb(240, 98, 146, 0.1);
}
</style>


