<template>
  <q-page>
    <h1 class="tach-h1">Security Mavens</h1>
    <h2 class="tach-h2 gt-xs tach-heading">
      Secure Solutions for Home and Business
    </h2>

    <div class="row">
      <div class="col"></div>
      <div>
        <q-card class="tach-card col-4 q-mt-md">
          <q-card-section class="tach-card-header">
            <h3 class="tach-h3">Secret Stash</h3>
            <h4 class="tach-h4-text gt-xs">
              Securely store sensitive data locally
            </h4>
          </q-card-section>
          <q-card-section class="tach-text-dark">
            <div class="row q-pt-sm">
              <div class="col"></div>
              <div class="col-12-xs col-8">
                <div class="text-body1">
                  Secret Stash stores your important data, encrypted, in a local
                  directory.
                </div>
              </div>
              <div class="col"></div>
            </div>

            <div class="row q-pt-sm">
              <div class="col"></div>
              <div class="col-12-xs col-8">
                <div class="text-body1">
                  <ul>
                    <li>
                      <span class="text-bold">No Installation</span>, only the
                      resulting data files are saved locally.
                    </li>
                    <li>
                      <span class="text-bold">No Charge</span>, basic services
                      are free, and will remain free.
                    </li>
                    <li>
                      <span class="text-bold">Unlimited Stashes</span>, create
                      as many local stahses as desired.
                    </li>
                    <li>
                      <span class="text-bold">Secure Cloud Backups</span>,
                      simply copy encrypted files to the cloud.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col"></div>
            </div>
            <div class="row q-pt-sm">
              <div class="col"></div>
              <div class="col-12-xs col-8">
                <access-secret-stash></access-secret-stash>
              </div>
              <div class="col"></div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col"></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

import AccessSecretStash from "../components/AccessApp.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    AccessSecretStash,
  },
});
</script>


