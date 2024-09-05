<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container mt-2">
  <header>
      <HelloWorld msg="HeloSziaSzevasz!" />

      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/dorian">Dorián</RouterLink> |
        <RouterLink to="/krisztian">Krisztián</RouterLink>
      </nav>
    </header>
  </div>

  <RouterView />
</template>