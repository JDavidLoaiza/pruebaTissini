<template>
  <div class="c">
    <Nav />
    <b-container class="bv-example-row">
      <div class="query">

      </div>
      <b-row class="justify-content-md-center">
        <b-col col sm="12" md="10" lg="5">
          <div class="containerProducts">
            <div class="guia">
              <b-breadcrumb :items="items"></b-breadcrumb>
            </div>
            <div v-if="showCategoryC">
              <h4>{{subtitle}}</h4>
              <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="0"
                controls
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
              >
                <CarouselCategorias
                  @newRoute="newRoute"
                  v-for="(sub, index) in subCategoria"
                  :key="index"
                  :img="sub.img"
                  :id="sub.id"
                />
              </b-carousel>
            </div>

            <h4>{{subtitle2}}</h4>
            <CardsProductos
              v-for="(p, index) in productos"
              :key="index"
              :img="p.img"
              :id="p.id"
              :nombre="p.nombre"
              :precio="p.precio"
              :tamano="p.tamaño"
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
import data from "../data";
import CarouselCategorias from "./CategoriasCatalogo";
import CardsProductos from "./CardsProductos";

export default {
  name: "Catalogo",
  data() {
    return {
      subtitle: "CATEGORÍAS",
      subtitle2: "PRODUCTOS",
      idCategory: this.$route.params.id,
      items: [{ text: "Categorías", to: { name: "categorias" } }],
      subCategoria: [],
      productos: [],
      slide: 0,
      sliding: null,
      showCategoryC: true,
      notificacion: 0
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    newRoute(id) {
      this.showCategoryC = false;

      // productos de la subactegoria escogida en catalogo
      this.productos = [];
      data.map((datos, index) => {
        if (datos.id === id) {
          this.items.push({ text: datos.nombre, id: datos.id });
          datos.productos.map(p => {
            this.productos.push(p);
          });
        }
      });
      this.items[1].to = { name: "catalogo", params: { id: this.items[1].id } };
    },
    changeNotification(){
      
    }
  },
  components: {
    Nav: Nav,
    Footer: Footer,
    CarouselCategorias: CarouselCategorias,
    CardsProductos: CardsProductos
  },
  created() {
    // categoria seleccionada
    const category = data.filter(datos => datos.id === Number(this.idCategory));

    // subcategorias de la categoria seleccionada
    data.map(datos => {
      if (datos.categoria === Number(this.idCategory))
        this.subCategoria.push(datos);
    });

    // productos de las subcategorias segun la categoria seleccionada
    this.subCategoria.map(sc => {
      sc.productos.map(p => {
        this.productos.push(p);
      });
    });

    //console.log(category[0]);
    this.items.push({ text: category[0].nombre, id: category[0].id });
  },
  beforeCreate: function() {
    if (!this.$session.exists()) {
      this.$router.push("/");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.c {
  background: #eaeded;
}
.query {
  /*height: 30px;
  background: #f06292;*/
  margin-top: 63px;
}
.containerProducts {
  background: #ffffff;
  /*margin-top: 57px;*/
  padding-bottom: 80px;
}
.guia {
  cursor: pointer;
  padding-top: 10px;
}
.breadcrumb {
  display: flex;
  justify-content: center;
  text-align: center;
  background: #ffffff;
}
a {
  color: #f06292;
}
h4 {
  padding: 10px 20px;
  color: #9e9e9e;
}
</style>


