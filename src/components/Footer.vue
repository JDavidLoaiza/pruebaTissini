<template>
  <b-navbar type="dark" variant="info" class="navbarP d-flex justify-content-center" fixed="bottom">
    <b-navbar-nav>
      <b-nav-item :to="{name:'categorias'}">
        <span>Categorías</span>
      </b-nav-item>
      <b-nav-item :to="{name:'catalogo',params:{id:1}}">
        <span>Cátalogo</span>
      </b-nav-item>
      <b-nav-item :to="{name:'carrito'}">
        <span>Carrito</span>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "Navegacion",
  data() {
    return {
      msg: "Cliente Pruebas"
    };
  },
  methods: {
    salir() {
      this.$router.replace("login");
      localStorage.setItem("auth", false);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbarP {
  background: #f06292 !important;
}

span {
  color: aliceblue;
  font-size: 20px;
}
</style>


