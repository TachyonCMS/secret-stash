import { readonly, reactive, ref, computed } from "vue";

import { date } from "quasar";

import { Platform } from "quasar";

import useEncryption from "./useEncryption";

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

// Does an existing encryption key file exist?
// This is directory specific, useEncryption has no concept of the FS.
const keyExists = ref(null);

const rootDir = ref(null);

import { showDirectoryPicker } from "file-system-access";

// MAIN EXPORT FUNCTION
export default function useEncryptedFS() {

  /**
   * Provides a browser directory picker.
   * Stores the resulting directoryHandle in rootDir
   * @param {*} newOrExisting
   */
  const directoryPicker = async () => {
    try {
      const dirHandle = await showDirectoryPicker();

      // Save the handle as rootDir for later access
      rootDir.value = dirHandle;

      return dirHandle;

    } catch (e) {
      console.log(e);
    }
  };

  /**
   * Open a new or existing directory for further decryption.
   *
   * @param {*} newOrExisting
   */
  const openDirectory = async (newOrExisting) => {
    try {
      // Wait for user to select a directory
      const rootDir = await directoryPicker();

      if (newOrExisting == "new") {
        const check = await dirIsEmpty(rootDir);
        if (!check) {
          throw new Error("The directory MUST be empty, create a new directory if needed.");
        }

        console.log("Creating Master Key");

      } else {
        console.log("Login to existing directory");
        const check = await dirIsEmpty(rootDir);
        if (!check) {
          throw new Error("The directory MUST be empty, create a new directory if needed.");
        }

        console.log("Decrypting Master Key");
      }
    } catch (e) {

      console.log(e);
      return { error: e}
    }
  };

  /**
   * Initialize an empty directory
   *
   * @param {*} dirHandle
   */
  const initDir = async (dirHandle) => {
    try {
    } catch (e) {}
  };

  /**
   * Check if the directory is empty
   *
   * @param {*} dirHandle
   */
  const dirIsEmpty = async (dirHandle) => {
    console.log("Checking if directory is empty");
    const record = await dirHandle.entries().next();

    // If there were no records and were already done this was empty.
    if (record.done && !record.value) {
      return true;
    }

    return false;
  };

  return {
    openDirectory
  };
}
