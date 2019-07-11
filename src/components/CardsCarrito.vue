<template>
  <div>
    <b-card :img-src="img" img-alt="Card image" img-left class="mb-3 cardsItems">
			<h3>{{nombre}}</h3>
			<div>SKU: <strong>{{id}}</strong></div>
			<div>Talla: <strong>{{tamano}}</strong></div>
			<div>Cantidad: <strong>{{cantidad}}</strong></div>
			<div>Precio Unidad: <strong>${{precio}}</strong></div>
			<h2>${{(precio*cantidad).toFixed(2)}}</h2>
			<div class="opcionesCards">
				<b-button class="btnEditar" variant="primary">
					<i class="material-icons">
						create
					</i>
				</b-button>
				<b-button @click="eliminarItems" class="btnEliminar" variant="danger">
					<i class="material-icons">
						delete_forever
					</i>
				</b-button>
			</div>
		</b-card>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    id: Number,
    nombre: String,
    precio: Number,
    tamano: String,
    cantidad: String
	},
	data(){
		return{

		}
	},
	methods:{
		eliminarItems() {
			this.$emit('actualizar', this.id);
		}
	}
};
</script>

<style scoped>
.cardsItems {
  height: 160px;
	font-size: 14px;
}
img {
  width: 150px;
}
.card-body{
	padding: 5px 10px;
	text-align: left;
}
h3{
	font-size: 20px;
	border-bottom: 1px solid #cccccc;
	margin: 0px;
}
h2{
	font-size: 25px;
	color: rgb(240, 98, 146);
}
.opcionesCards{
	margin-top: -40px;
	float: right;
}
.btnEditar, .btnEliminar{
	border-radius: 50%;
	padding: 0px;
}
i{
	margin-top: 3px;
	padding: 4px 6px;
}
</style>
