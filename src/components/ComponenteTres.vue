<template>
  <main class="main">

    <h2>Componente 3</h2>
    
    <button @click="decrement">➖️</button>
    <span>{{ counter }}</span>
    <button @click="increment">➕️</button>
    
  </main>
</template>

<script setup lang="ts">

import { toRefs } from 'vue'

import { reactiveStore } from '../stores/reactiveStore'

// Para desestructurar el objeto reactivo usar toRefs
const { counter, increment, decrement } = toRefs(reactiveStore)

</script>
