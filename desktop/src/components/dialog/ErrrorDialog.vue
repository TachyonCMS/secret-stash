<template>

</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  props: ['error'],
  setup(props) {
    const $q = useQuasar()
  $q.dialog({ ... }) // returns Object

  },
})
</script>


