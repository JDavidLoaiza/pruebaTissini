<template>
  <b-container class="bv-example-row">
    <b-row class="justify-content-md-center">
      <b-col col sm="12" md="10" lg="10">
        <b-card :img-src="img" img-alt="Image" img-top tag="article" class="cardsCategory">
          <b-card-text>
            <span class="nombre">{{nombre}}</span>
          </b-card-text>
          <div class="opciones">
            <input class="btnAdd" @click="modalShow=true" type="button" value="AÑADIR" />
            <span class="precio">$ {{precio}}</span>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-modal
      v-model="modalShow"
      title="Agregar Producto"
      no-close-on-backdrop
      no-close-on-esc
      hide-footer
      header-class="headerm"
    >
      <div v-if="showDiv===1" class="bienvenida">
        <label for="input-with-list">Tamaño</label>
        <b-form-input list="input-list" v-model="tamanop" id="input-with-list"></b-form-input>
        <b-form-datalist id="input-list" :options="tamano"></b-form-datalist>
        <input v-if="tamanop!==''" @click="next(2)" class="btnNextb" type="button" value="SIGUIENTE" />
      </div>
      <div v-else>
        <label for="input-with-list2">Cantidad</label>
        <b-form-input list="input-list2" v-model="cantidadp" id="input-with-list2"></b-form-input>
        <b-form-datalist id="input-list2" :options="cantidadOpcion"></b-form-datalist>
        <input v-if="cantidadp!==''" @click="next(3)" class="btnNextb" type="button" value="AGREGAR" />
        <input @click="next(1)" class="btnBackb" type="button" value="REGRESAR" />
      </div>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  name: "CardsCategory",
  data() {
    return {
      modalShow: false,
      showDiv: 1,
      cantidadOpcion: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      tamanop: "",
      cantidadp: ""
    };
  },
  props: {
    img: String,
    id: Number,
    nombre: String,
    precio: Number,
    tamano: Array
  },
  methods: {
    add() {
      //console.log(this.nombre);
      this.modalShow = true;
    },
    next(pag) {
      if (pag === 3) {
        this.modalShow = false;
        this.showDiv = 1;
        this.addCarrito();
      } else {
        this.showDiv = pag;
      }
    },
    addCarrito() {
      let carrito = localStorage.getItem('carrito');
      carrito=JSON.parse(carrito);
      const producto = {
        img: this.img,
        id: this.id,
        nombre: this.nombre,
        precio: this.precio,
        tamano: this.tamanop,
        cantidad: this.cantidadp
      };
      this.cantidadp='';this.tamanop='';
      carrito.push(producto);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }
  }
};
</script>

<style scoped>
.cardsCategory {
  margin-bottom: 10px;
  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  text-decoration: none;
}
.card-body {
  padding: 10px 20px;
}
.btnAdd {
  background: #f06292;
  border: none;
  padding: 6px 20px;
  border-radius: 20px;
  color: aliceblue;
}
.btnNextb {
  background: #f06292;
  border: none;
  padding: 6px 20px;
  border-radius: 5px;
  color: aliceblue;
  float: right;
  margin: 30px 20px 10px;
}
.btnBackb {
  background: #ffffff;
  border: none;
  padding: 6px 20px;
  border-radius: 5px;
  color: #f06292;
  margin: 30px 20px 10px;
}
.btnBackb:hover {
  background: rgb(240, 98, 146, 0.1);
}
.precio {
  float: right;
  font-size: 25px;
  color: #f06292;
}
.nombre {
  font-size: 25px;
  color: #f06292;
}
</style>
