<template>
  <div>
    <b-modal
      v-model="modalShow"
      title="Bienvenida!"
      no-close-on-backdrop
      no-close-on-esc
      hide-header-close
      hide-footer
      header-class="headerm"
    >
      <div v-if="showDiv===1" class="bienvenida">
        <p class="my-4">
          Hola! Soy
          <span>Cliente Pruebas</span> y te doy la bienvenida a mi tienda, por
          favor antes de pagar déjame saber tus datos para el envío de los
          productos. Gracias!
        </p>
        <input @click="changeDiv(2)" class="btnNextb" type="button" value="DE ACUERDO" />
      </div>

      <div v-else-if="showDiv===2">
        <b-form @submit="onSubmit">
          <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.nombre"
              type="text"
              required
              placeholder="Ingrese nombre"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Apellido:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.apellido"
              type="text"
              required
              placeholder="Ingrese apellido"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Email:" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="form.email"
              type="email"
              required
              placeholder="Ingrese e-mail"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4" label="Telefono:" label-for="input-4">
            <b-form-input
              id="input-4"
              v-model="form.telefono"
              type="number"
              required
              placeholder="Ingrese telefono"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-5" label="Direccion:" label-for="input-5">
            <b-form-input
              id="input-5"
              v-model="form.direccion"
              type="text"
              required
              placeholder="Ingrese direccion"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-6" label="Codigo Postal:" label-for="input-6">
            <b-form-input
              id="input-6"
              v-model="form.codigopostal"
              type="text"
              required
              placeholder="Ingrese codigo postal"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" class="btnBackb">SIGUIENTE</b-button>
          <input @click="changeDiv(1)" class="btnNextb" type="button" value="REGRESAR" />
        </b-form>
      </div>

      <div v-else-if="showDiv===3">
        <h3>¡Muchas Gracias!</h3>
        <input @click="changeDiv(4)" class="btnOkb" type="button" value="CONTINUAR" />
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    validar: String
  },
  data() {
    return {
      modalShow: false,
      showDiv: 1,
      form: {
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        direccion: "",
        codigopostal: ""
      }
    };
  },
  methods: {
    showModal() {
      this.modalShow = true;
    },
    changeDiv(pag) {
      if (pag === 4) {
        this.modalShow = false;
        sessionStorage.setItem("nuevo", "no");
      } else {
        this.showDiv = pag;
      }
    },
    onSubmit(evt) {
			evt.preventDefault();
			this.changeDiv(3);
      console.log(JSON.stringify(this.form));
    }
  },
  created() {
    this.showModal();
  }
};
</script>

<style scoped>
span {
  color: rgb(240, 98, 146);
  font-weight: bolder;
}
.btnNextb {
  color: rgb(240, 98, 146);
  margin: 10px 20px;
  border: none;
  background: #ffffff;
  float: right;
  padding: 10px 20px;
}
.btnNextb:hover {
  background: rgb(240, 98, 146, 0.1);
}
.btnBackb {
  background: rgb(240, 98, 146);
  margin: 10px 20px;
  border: none;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 2px;
}
.btnOkb {
  background: #ffffff;
  margin: 10px 20px;
  border: none;
  color: rgb(240, 98, 146);
  border: 1px solid rgb(240, 98, 146);
  padding: 10px 20px;
  border-radius: 2px;
  float: right;
}
.btnOkb:hover {
  background: rgb(240, 98, 146, 0.1);
}
</style>

