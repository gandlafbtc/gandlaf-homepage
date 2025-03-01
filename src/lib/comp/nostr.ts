import { type Event, type Filter, SimplePool, type UnsignedEvent, finalizeEvent, generateSecretKey, getPublicKey, nip04, nip19 } from "nostr-tools";
import { EncryptedDirectMessage } from "nostr-tools/kinds";
import { pool } from "./stores";
export const sendViaNostr = async (toPub: string, message: string) => {
	const sk = generateSecretKey()
    const pk = getPublicKey(sk)
    const event: UnsignedEvent = {
		kind: EncryptedDirectMessage,
		//@ts-ignore
		tags: [['p', toPub]],
		content: await nip04.encrypt(sk, toPub, message),
		created_at: Math.floor(Date.now() / 1000),
		pubkey: pk
	};
    const signedEvent = finalizeEvent(event, sk)
    pool.publish(DEFAULT_RELAYS, signedEvent)
};

export const DEFAULT_RELAYS = ["wss://relay.damus.io", "wss://relay.primal.net"];
export const NUTSTASH_PUBKEY = 'ca1d8486abd03d6e91aa042cb856a7da0da95e7b68180b22337aea2cd2ed0469'
