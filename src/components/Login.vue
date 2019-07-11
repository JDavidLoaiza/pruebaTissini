<template>
  <div class="hello">
    <form @submit.prevent="login">
      <img src="https://mitienda.moda/img/logo.c752bf8f.png" alt="img" />
      <br />
      <h3>{{ msg }}</h3>
      <br />
      <input class="txtTel" type="text" v-model="phone" placeholder="Telefono" />
      <br />
      <input class="btnCatalogo" type="submit" value="VER CATALOGO" />
    </form>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Ingresa el número de teléfono de tu asesora independiente.",
      phone: null,
      phoneLogin: "7865470213"
    };
  },
  methods: {
    login() {
      if (this.phone === this.phoneLogin) {
        this.$session.start();
        sessionStorage.setItem("nuevo", "si");
        localStorage.setItem('carrito', JSON.stringify([]));
        this.$router.replace("categorias");
      } else {
        alert("Fallo al obtener información.");
      }
    }
  },
  beforeCreate: function() {
    if (this.$session.exists()) {
      this.$router.push("/categorias");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background: url("https://mitienda.moda/img/login-desktop.0a0cacb5.jpg") repeat
    center top;
  color: aliceblue;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}
img {
  width: 200px;
  margin: 10px;
}
.txtTel {
  padding: 10px;
  width: 300px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  background: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
}
.txtTel:hover {
  border: 2px solid black;
}
.btnCatalogo {
  padding: 10px;
  width: 300px;
  border-radius: 5px;
  border: none;
  background: transparent;
  border: 1px solid #ffffff;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
}
.btnCatalogo:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>


