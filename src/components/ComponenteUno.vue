<template>
  <main class="main">

    <h2>Componente 1</h2>
    
    <button @click="decrement">➖️</button>
    <span>{{ counter }}</span>
    <button @click="increment">➕️</button>
    
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { counterStore } from '../stores/counterStore'

export default defineComponent({

  data: () => ({ 
    counterStore
  }),

  computed: {
    counter() {
      return this.counterStore.counter
    }
  },

  methods: {
    decrement() {
      this.counterStore.decrement()
    },
    increment() {
      this.counterStore.increment()
    }
  }
})
</script>

<style>

.min-w {
  min-width: 14rem;
}

</style>