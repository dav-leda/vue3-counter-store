<template>
  <main class="main">

    <h2>Componente 4</h2>
    
    <button @click="decrement">➖️</button>
    <span>{{ counter }}</span>
    <button @click="increment">➕️</button>
    
  </main>
</template>

<script setup>

import { computed } from 'vue'

import { reactiveStore } from '../stores/reactiveStore'

const counter = computed(() => reactiveStore.counter)
const decrement = () => reactiveStore.decrement()
const increment = () => reactiveStore.increment()


</script>