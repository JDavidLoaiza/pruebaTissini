<template>
  <div @click="catalogoc(id)" class="carouseldiv">
    <b-carousel-slide :img-src="img"></b-carousel-slide>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    id: Number
  },
  methods: {
    catalogoc(id) {
			//console.log(id);
			this.$router.push({ path: `/catalogo/${id}` })
			this.$emit('newRoute', id);
    }
  }
};
</script>

<style scoped>
.carouseldiv{
	cursor: pointer;
}
</style>
