<template>
  <div class="careers-menu">
    <nav>
      <router-link to="/careers/full-time">Full-Time</router-link> |
      <router-link to="/careers/part-time">Part-Time</router-link> |
      <router-link to="/careers/contract">Contract</router-link>
    </nav>
  </div>
</template>

<script setup>
// No logic needed
</script>

<style scoped>
.careers-menu {
  text-align: center;
  margin-top: 2rem;
}
nav {
  margin-bottom: 1rem;
}
nav a {
  color: #42b983;
  text-decoration: none;
  margin: 0 0.5rem;
}
nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
