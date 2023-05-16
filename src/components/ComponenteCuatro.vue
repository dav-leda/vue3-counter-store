<template>
  <main class="main">

    <h2>Componente 4</h2>
    
    <button @click="decrement">➖️</button>
    <span>{{ counter }}</span>
    <button @click="increment">➕️</button>
    
  </main>
</template>

<script setup lang="ts">

import { toRefs } from 'vue'

import { reactiveStore } from '../stores/reactiveStore'

const { counter, increment, decrement } = toRefs(reactiveStore)

</script>