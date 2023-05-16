
<template>
  <main class="center mt-1">
    
    <h1>App.vue</h1>

    <OptionsApi/>
    <CompositionApi/>

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

