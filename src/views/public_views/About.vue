<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/landing-page">Landing Page</router-link>
  </div>
</template>

<script>
export default {
  created() {
    
    this.$emit('routeName', this.$route.name);
  }
}
</script>
