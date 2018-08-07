<template>
  <section class="container">
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
      Homepage
    </nuxt-link>
  </section>
</template>
<script>
export default {
}
</script>