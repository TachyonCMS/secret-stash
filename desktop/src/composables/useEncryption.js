const WebCrypto = require("easy-web-crypto");

// The passphrase remembered by the user
const passphrase = ref(null);

// The passphrase repeated for verifying corrrectness
const passphrase2 = ref(null);

// The new passphrase provided when changing the password
const newPassphrase = ref(null);

// The new passphrase repeated for verifying corrrectness
const newPassphrase2 = ref(null)

// The keyFile contents, decrypted with the passphrase
const masterKey = ref(null);

export default function useEncryption() {

  const newMasterKey = async (passphrase) => {
    const encMasterKey = await WebCrypto.genEncryptedMasterKey(
      passphrase
    );
    return encMasterKey;
  }

  const decryptMasterKey = async (passphrase, encMasterKey) => {

    // decrypt the (stored) AES key to be able to encrypt/decrypt data
    const key = await WebCrypto.decryptMasterKey(
      passphrase,
      encMasterKey
    );
    return key;
  }

  const updateMasterKey = async (passphrase, newPassphrase, encMasterKey) => {

    const updatedEncMasterKey = await WebCrypto.updatePassphraseKey(passphrase,
      newPassphrase, encMasterKey)

    const key = await WebCrypto.decryptMasterKey(newPassphrase, updatedEncMasterKey)

    return { key: key, encryptedKey: updatedEncMasterKey};

  }

  const encryptData = async (masterKey, data) => {
    const encrypted = await WebCrypto.encrypt(dek, data);
    return encrypted;
  }

  const decryptData = async (masterKey, encData) => {
    const val = await WebCrypto.decrypt(dek, encData)
    return val;
  }

  const encryptBuffer = async (masterKey, buffer) => {
    const encrypted = await WebCrypto.encryptBuffer(dek, buffer);
    return encrypted;
  }

  const decryptBuffer = async (masterKey, encBuffer) => {
    const val = await WebCrypto.decryptBuffer(dek, encBuffer)
    return val;
  }

  return {
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
  };
}

