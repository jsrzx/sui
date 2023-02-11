// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { PublicKey, SignatureScheme } from '../cryptography/publickey';
import { Base64DataBuffer } from '../serialization/base64';

///////////////////////////////
// Exported Types

/**
 * Pair of signature and corresponding public key
 */
export type SignaturePubkeyPair = {
  signatureScheme: SignatureScheme;
  signature: Base64DataBuffer;
  pubKey: PublicKey;
};

export interface SignaturePubkeyPairSerialized {
  signatureScheme: SignatureScheme;
  signature: string;
  pubKey: string;
}

///////////////////////////////
// Exported Abstracts
/**
 * Serializes a transaction to a string that can be signed by a `Signer`.
 */
export interface Signer {
  // Returns the checksum address
  getAddress(): Promise<string>;

  /**
   * Returns the signature for the data and the public key of the signer
   */
  signData(data: Base64DataBuffer): Promise<SignaturePubkeyPair>;
}
