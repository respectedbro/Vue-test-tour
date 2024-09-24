<template>
  <router-link :to="link">
    <div class="item-wrapper d-flex flex-column">
      <img :src="require(`../assets/img/${image}`)" class="mb-3" :alt="image">
      <h3>{{ title }}</h3>
      <div class="description">
        {{ text }}
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      required: true,
      type: String
    },
    image: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    text: {
      required: true,
      type: String
    },
  }
}
</script>
<style scoped>

</style>