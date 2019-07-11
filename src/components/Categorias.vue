<template>
  <div class="c">
    <Nav />
    <b-container class="bv-example-row">
      <b-row class="justify-content-md-center">
        <b-col col sm="12" md="10" lg="5">
          <div class="containerCategory">
            <h4>{{title}}</h4>
            <Category
              v-for="(categoria, index) in category"
              :key="index"
              :img="categoria.img"
              :id="categoria.id"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Nav from "./Navegacion";
import Footer from "./Footer";
import CardsCategory from "./CardsCategory";
import data from "../data";

export default {
  name: "Principal",
  data() {
    return {
      title: "CATEGORÍAS",
      category: []
    };
  },
  components: {
    Nav: Nav,
    Category: CardsCategory,
    Footer: Footer
  },
  created() {
    data.map(datos => {
      if (typeof datos.categoria === "boolean")
        this.category.push({ img: datos.img, id: datos.id });
    });
  },
  beforeCreate: function () {
    if (!this.$session.exists()) {
      this.$router.push('/')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.c {
  background: #eaeded;
}
.containerCategory {
  background: #ffffff;
  margin-top: 57px;
  padding-bottom: 80px;
}
h4 {
  padding: 20px;
  color: #9e9e9e;
}
</style>


