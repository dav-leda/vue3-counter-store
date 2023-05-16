
<template>
  <main class="main max-w">
    
    <h1>Store w/Composition API</h1>

    <p class="bold mt-1">Doble: {{ double }}</p>

    <ComponenteTres/>
    <ComponenteCuatro/>

  </main>
</template>

<script setup lang="ts">

import { computed } from 'vue'

import ComponenteTres from './ComponenteTres.vue'
import ComponenteCuatro from './ComponenteCuatro.vue'

import { reactiveStore } from '../stores/reactiveStore'

const double = computed<number>(() => reactiveStore.double())

</script>
