<template>
  <q-card class="tach-card" v-if="$q.platform.is.desktop">
    <q-card-section>
      <div class="row">
        <div class="fit col-xs-12 q-pa-sm">
          <q-btn
            rounded
            style="width: 100%"
            color="primary"
            @click="openDir('new')"
            >Create Stash</q-btn
          >
        </div>
        <div
          class="
            row
            col-12
            text-body1
            justify-center
            text-center text-italic
            tach-text-dark
            block
          "
        >
          Select or create an empty directory
        </div>

        <div class="col-xs-12 q-pa-sm q-pt-lg">
          <q-btn
            rounded
            style="width: 100%"
            color="primary"
            @click="openDir('existing')"
            >Open Stash</q-btn
          >
        </div>
        <div
          class="
            row
            col-12
            text-body1
            justify-center
            text-center text-italic
            tach-text-dark
          "
        >
          Select an existing Secret Stash directory
        </div>
      </div>
    </q-card-section>
  </q-card>
  <q-card v-else class="tach-card">
    <q-card-section class="text-center tach-text-dark">
      <div><span class="tach-h1">Sorry, no stash for you.</span></div>

      <div>
        Secret Stash is only available on <b>desktop</b> computers running the
        latest <b>Chrome</b> browser.
      </div>
      <q-icon name="mdi-emoticon-frown" color="orange" size="lg"></q-icon
      ><q-icon name="mdi-emoticon-sad" color="orange" size="lg"></q-icon
      ><q-icon name="mdi-emoticon-cry" color="orange" size="lg"></q-icon>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";

import useEncryptedFS from "../composables/useEncryptedFS.js";

export default defineComponent({
  setup() {
    const $q = useQuasar();

    const { openDirectory } = useEncryptedFS();

    const { rootDir } = useEncryptedFS();

    const error = ref(null);

    return {
      openDirectory,
      rootDir,
      error,
    };
  },
  methods: {
    async openDir(newOrExisting) {
      // Get results of opening the a  directory
      const openResult = await this.openDirectory(newOrExisting);

      if (openResult && openResult.error) {
        if (
          openResult.error.message !=
          "Cannot read properties of undefined (reading 'entries')"
        )
          this.showErrorMsg(openResult.error.message);
      }
    },
    showErrorMsg(msg) {
      console.log(msg);
      this.$q
        .dialog({
          title: '<span style="color: red;">Error</span>',
          message: '<span style="font-size: larger;">' + msg + "</span>",
          html: true,
        })
        .onOk(() => {
          // console.log('OK')
        })
        .onCancel(() => {
          // console.log('Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
          this.error = null;
        });
    },
  },
});
</script>

<style scoped>
.tach-error {
  color: red;
}
</style>
