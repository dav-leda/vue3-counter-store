
<template>
  <main class="main max-w">
    
    <h1>Store w/Composition API</h1>

    <p class="bold mt-1">Doble: {{ double }}</p>

    <ComponenteTres/>
    <ComponenteCuatro/>

  </main>
</template>

<script setup>

import { computed } from 'vue'

import ComponenteTres from './ComponenteTres.vue'
import ComponenteCuatro from './ComponenteCuatro.vue'

import { reactiveStore } from '../stores/reactiveStore'

const double = computed(() => reactiveStore.double())

</script>
