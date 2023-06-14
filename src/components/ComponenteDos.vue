<template>
  <main class="main">
    
    <h2>Componente 2</h2>

    <h3>Counter Store:</h3>

    <button @click="decrement">➖️</button>
    <span>{{ counter }}</span>
    <button @click="increment">➕️</button>

    <h3>Counter Mixin:</h3>

    <button @click="decrementMixin">➖️</button>
    <span>{{ counterMixin }}</span>
    <button @click="incrementMixin">➕️</button>

    <p>doble: {{ doubleMixin }}</p>
    
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { counterStore } from '../stores/counterStore'

import { counterMixin } from '../mixins/counterMixin'

export default defineComponent({

  mixins: [counterMixin],

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


