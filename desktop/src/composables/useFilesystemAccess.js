import { readonly, reactive, ref, computed } from "vue";

import { date } from "quasar";

import { Platform } from "quasar";

import useEncryption from "./useEncryption";

// Does an existing encryption  key file exist?
const keyExists = ref(null);

const {
  masterKey,
  passphrase,
  passphrase2,
  newPassphrase,
  newPassphrase2,
  newMasterKey,
  decryptMasterKey,
  updateMasterKey,
  encryptData,
  decryptData,
  encryptBuffer,
  decryptBuffer
} = useEncryption();

// MAIN EXPORT FUNCTION
export default function useFlows() {
  // Useful for list item label or button text
  // Displays truncated selection or propmt to select.
  const flowSourceMsg = computed(() => {
    let msg = "Invalid source, please refresh";
    switch (flowConnector.value) {
      case "electron":
        msg = dirLabel(flowSource.value);
        break;
      case "storageApi":
        msg = dirLabel(flowSource.value.nickname);
        break;
      case "filesystem":
        msg = "Local file system";
        break;
    }

    return msg;
  });
