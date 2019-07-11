<template>
	<!--p>
		{{ type }} - {{ img }}
	</p-->
	<b-card
	  :img-src='img'
	  img-alt="Image"
	  img-top
	  tag="article"
		class="cardsCategory"
		border-variant="light"
		@click="catalogo(id)"
	>
	</b-card>
</template>

<script>
export default {
	name:'CardsCategory',
	props:{
		img:String,
		id:Number
	},
	methods: {
		catalogo (id) {
			this.$router.push({ path: `/catalogo/${id}` });
		}
	}
}
</script>

<style scoped>
.cardsCategory{
	border: none;
	display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
	cursor: pointer;
}
img{
	width: 100%;
	padding: 0px 10px;
}
.card-body{
	padding: 0px;
}
</style>
