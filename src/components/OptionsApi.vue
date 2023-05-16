
<template>
  <main class="main max-w">
    
    <h1>Store w/Options API</h1>

    <p class="bold mt-1">Doble: {{ double }}</p>

    <ComponenteUno/>
    <ComponenteDos/>

  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ComponenteUno from './ComponenteUno.vue'
import ComponenteDos from './ComponenteDos.vue'

import { counterStore } from '../stores/counterStore'

export default defineComponent({

  components: {
    ComponenteUno, ComponenteDos
  },

  data: () => ({ 
    counterStore
  }),

  computed: {
    double() {
      return this.counterStore.double()
    }
  }
})

</script>

<style>


span {
  margin: 1rem 0.5rem;
  font-size: 1.6rem;
}

button {
  background-color: rgb(216, 216, 216);
}

</style>
