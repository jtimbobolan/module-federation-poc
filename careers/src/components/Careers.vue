<template>
  <div class="careers-remote">
    <h2>Remote Careers Component (Vue)</h2>
    <p>This Careers component is provided by the remote Vue module.</p>
    <ul>
      <li v-for="job in jobs" :key="job.id">{{ job.title }} - {{ job.location }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const jobs = ref([
  { id: 1, title: 'Frontend Developer', location: 'Remote' },
  { id: 2, title: 'Backend Developer', location: 'New York' },
  { id: 3, title: 'DevOps Engineer', location: 'San Francisco' },
]);
</script>

<style scoped>
.careers-remote {
  text-align: center;
  margin-top: 2rem;
}
h2 {
  color: #42b983;
}
ul {
  margin-top: 1rem;
  list-style: none;
  padding: 0;
}
li {
  margin: 0.5rem 0;
}
</style>
