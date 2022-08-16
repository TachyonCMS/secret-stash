<template>
  <q-page>
    <h1 class="tach-h1">Secret Stash</h1>
    <h2 class="tach-h2 gt-xs">For the important stuff</h2>
    <div class="row q-pt-lg">
      <div class="col"></div>
      <div class="col-12-xs col-6"><access-app></access-app></div>
      <div class="col"></div>
    </div>
    <div class="row col-12 text-center justify-center text-h5 q-pt-lg">
      Securely store your important data, for free!
    </div>
    <div class="row text-center justify-center text-h6 q-pt-md">
      Secure and Protect:
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="">
        <ul>
          <li>Logins and Passwords</li>
          <li>Credit Card Info</li>
          <li>Financial Documents</li>
          <li>Bitcoin Wallets</li>
          <li>Crypto Keys</li>
          <li>Journal Entries</li>
        </ul>
      </div>
      <div class="col"></div>
    </div>
    <!--
   <div class="row justify-around">
    <div class="col-3">
      <q-card class="tach-card">
        <q-card-section>
          No Install
        </q-card-section>
      </q-card>
    </div>
    <div class="col-3">
      <q-card class="tach-card">
        <q-card-section>
          Free
        </q-card-section>
      </q-card>
    </div>
    <div class="col-3">
      <q-card class="tach-card">
        <q-card-section>
          Secure erg er g er g erg e rg e geger
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        </q-card-section>
      </q-card>
    </div>
   </div> -->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

import AccessApp from "../components/AccessApp.vue";

export default defineComponent({
  name: "SecretStashEntryPage",
  components: {
    AccessApp,
  },
});
</script>


