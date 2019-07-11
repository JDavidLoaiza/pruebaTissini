<template>
  <div class="c">
    <Nav />
    <b-container class="bv-example-row">
      <b-row class="justify-content-md-center">
        <b-col col sm="12" md="8" lg="5">
          <div class="containerCarrito">
            <div v-if="carrito.length===0">
              <b-img
                src="https://mitienda.moda/img/empty-cart.1bfda269.png"
                fluid
                alt="Fluid image"
              ></b-img>
              <span>{{title}}</span>
            </div>
            <div v-else class="containerItems">
              <span class="subtitle">{{subtitle}}</span>
              <!-- <CardsItems /> -->
              <CardsItems
                @actualizar="actualizarCarrito"
                v-for="(p, index) in carrito"
                :key="index"
                :img="p.img"
                :id="p.id"
                :nombre="p.nombre"
                :precio="p.precio"
                :tamano="p.tamano"
                :cantidad="p.cantidad"
              />
              <div class="opcEntrega">
                <b-form-group label="Recibir Orden">
                  <b-form-radio v-model="selected" name="some-radios" value="v">Por mi vendedora</b-form-radio>
                  <b-form-radio v-model="selected" name="some-radios" value="c">En mi casa</b-form-radio>
                </b-form-group>
                <div v-if="selected==='c'" class="domicilio">
                  <strong>Costo de Envio: $ {{domicilio}}</strong>
                </div>
              </div>
              <b-button @click="modalShow=true" class="btnpago" variant="danger">
                PAGAR AHORA $ {{total.toFixed(2)}}
                <i class="material-icons">arrow_forward</i>
              </b-button>
            </div>
          </div>
          <div v-if="validar==='si'">
            <ModalWelcome />
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-modal
      v-model="modalShow"
      no-close-on-backdrop
      no-close-on-esc
      hide-header-close
      hide-footer
      hide-header
      header-class="headerm"
    >
      <div v-if="showModalDiv===1">
        <h3>Metodo de pago</h3>
        <input @click="showModalDiv=2" class="btntc" type="button" value="TARJETA DE CREDITO" />
        <input @click="showModalDiv=2" class="btne" type="button" value="PAGAR EN EFECTIVO" />
        <input @click="modalShow=false" class="btnc" type="button" value="CERRAR" />
      </div>
      <div v-else>
        <div class="gc">
          <h2>¡Gracias por tu compra!</h2>
          <span class="msgpago">Por favor contáctame para hacer el pago.</span>
        </div>
        <input @click="compraok" class="btntc" type="button" value="CONTACTAR AHORA" />
        <input @click="redireccionarCatalogo" class="btne" type="button" value="IR AL CATALOGO" />
      </div>
    </b-modal>
    <Footer />
  </div>
</template>

<script>
import Nav from "./Navegacion";
import Footer from "./Footer";
import ModalWelcome from "./ModalWelcome";
import CardsItems from "./CardsCarrito";

export default {
  name: "Carrito",
  data() {
    return {
      title: "Carrito Vacío, Vamos de Compras!",
      subtitle: "Items añadidos",
      validar: "si",
      carrito: [],
      selected: "",
      domicilio: 16.95,
      subtotal: 0,
      total: 0,
      modalShow: false,
      showModalDiv: 1
    };
  },
  methods: {
    actualizarCarrito(id) {
      this.subtotal = 0;
      const carrito = this.carrito.filter(r => r.id !== id);
      this.carrito = carrito;
      localStorage.setItem("carrito", JSON.stringify(this.carrito));
      carrito.map(c => {
        this.subtotal += c.precio * c.cantidad;
      });
    },
    compraok() {
      this.modalShow = false;
      this.showModalDiv = 1;
      this.carrito = [];
      localStorage.setItem("carrito", JSON.stringify(this.carrito));
    },
    redireccionarCatalogo() {
      this.modalShow = false;
      this.showModalDiv = 1;
      this.carrito = [];
      localStorage.setItem("carrito", JSON.stringify(this.carrito));
      this.$router.push({ name: "categorias" });
    }
  },
  components: {
    Nav: Nav,
    Footer: Footer,
    ModalWelcome: ModalWelcome,
    CardsItems: CardsItems
  },

  created() {
    this.validar = sessionStorage.getItem("nuevo");
    let carrito = localStorage.getItem("carrito");
    carrito = JSON.parse(carrito);
    this.carrito = carrito;
    carrito.map(c => {
      this.subtotal += c.precio * c.cantidad;
    });
    if (this.selected === "") this.total = this.subtotal;
  },
  beforeUpdate() {
    //actualiza total dependiendo tipo de entrega
    let total = this.subtotal + this.domicilio;
    if (this.selected === "c") {
      this.total = total;
      //this.modalShow=true;
    } else {
      this.total = this.subtotal;
      //this.modalShow=true;
    }
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
.containerCarrito {
  margin-top: 57px;
  text-align: center;
  margin-bottom: 100px;
}
img {
  margin-top: 10%;
  margin-bottom: 10px;
  opacity: 0.5;
}
span {
  font-size: 20px;
  color: rgb(240, 98, 146);
}
.containerItems {
  padding-top: 20px;
}
.subtitle {
  color: #cccccc;
}
.opcEntrega {
  text-align: left;
  padding-left: 30px;
}
.btnpago {
  background: #f06292;
  border-color: #f06292;
  margin-top: 10px;
  padding: 3px 80px;
}
.btne,
.btntc {
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 6px;
  margin: 10px 0px;
}
.btntc {
  background: #f06292;
  border-color: #f06292;
  color: aliceblue;
}
.btne {
  background: #ffffff;
  border: 1px solid #f06292;
  color: #f06292;
}
.btnc {
  float: right;
  background: #ffffff;
  color: #f06292;
  border: none;
  padding: 10px 20px;
}
h3 {
  text-align: center;
  margin-bottom: 20px;
}
.gc {
  text-align: center;
  margin: 20px;
}
.msgpago {
  text-align: center;
  font-size: 15px;
  color: #868585;
}
</style>


