<template>
  <div>
    <q-list class="tach-text-dark">
      <q-item-label header> Secure Apps </q-item-label>

      <q-item clickable tag="a" target="_blank" href="/secret-stash" class="tach-text-dark">
        <q-item-section avatar>
          <q-icon name="mdi-safe-square" color="teal-10"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>Secret Stash</q-item-label>
        </q-item-section>
      </q-item>
   <!--   <q-item> Audit Ally </q-item> -->
    </q-list>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "EntryDrawer",
  emits: [],
  setup() {
    return {};
  },
});
</script>

