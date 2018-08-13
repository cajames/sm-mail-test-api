<template>
  <section class="container mx-auto">
    <h1 class="mb-8">Ruh-row, something went wrong.</h1>
    <nuxt-link class="p-4 bg-blue text-white no-underline" to="/" v-if="error.statusCode === 404">
      Homepage
    </nuxt-link>
  </section>
</template>
<script>
export default {
  props: ["error"]
};
</script>