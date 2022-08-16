<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar  class="tach-navbar">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"

        />

        <q-toolbar-title>
          <span class="text-bold"><a href="/">Security Mavens</a></span>
        </q-toolbar-title>

        <div >v0.1.0</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
     <entry-drawer v-if="!appView"></entry-drawer>
    </q-drawer>

    <q-page-container class="tach-page">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

import EntryDrawer from "./drawers/EntryDrawer.vue"


export default defineComponent({
  name: 'MainLayout',

  components: {
    EntryDrawer
  },

  setup () {
    const leftDrawerOpen = ref(false)

    const appView = ref(null);

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      appView
    }
  }
})
</script>

