
<template>
  <main class="center mt-2">
    
    <h1>App.vue</h1>

    <section class="flex-wrap mt-2">
      <OptionsApi/>
      <CompositionApi/>
    </section>

  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import OptionsApi from './components/OptionsApi.vue'
import CompositionApi from './components/CompositionApi.vue'

export default defineComponent({

  components: {
    OptionsApi, CompositionApi
  }
})

</script>

