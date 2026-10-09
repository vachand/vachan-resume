import { PocketIc, createIdentity } from "@dfinity/pic";
import type { Actor, CanisterFixture } from "@dfinity/pic";
import { afterAll, beforeAll, expect, it } from "vitest";

import { idlFactory } from "../../src/frontend/src/declarations/backend.did.js";
import type { _SERVICE } from "../../src/frontend/src/declarations/backend.did";

const PIC_URL = process.env.POCKET_IC_URL ?? "";
const BACKEND_WASM = process.env.BACKEND_WASM ?? "";

let pic: PocketIc | undefined;
let actor: Actor<_SERVICE>;
let canisterId: CanisterFixture<_SERVICE>["canisterId"];

beforeAll(async () => {
  pic = await PocketIc.create(PIC_URL);
  ({ actor, canisterId } = await pic.setupCanister<_SERVICE>({ idlFactory, wasm: BACKEND_WASM }));
});

afterAll(async () => {
  await pic?.tearDown();
});

it("answers the API documentation query instead of trapping", async () => {
  const doc = await actor.getApiDoc();
  expect(typeof doc).toBe("string");
  expect(doc.length).toBeGreaterThan(0);
});

it("answers the schema query instead of trapping", async () => {
  const schema = await actor.schema();
  expect(typeof schema).toBe("string");
});

it("reports the anonymous caller as a guest and not an admin", async () => {
  // A freshly created actor calls as the anonymous principal until an identity is set.
  await expect(actor.getCallerUserRole()).resolves.toEqual({ guest: null });
  await expect(actor.isCallerAdmin()).resolves.toBe(false);
});

it("rejects an anonymous caller from the admin-only role assignment", async () => {
  const guest = pic!.createActor<_SERVICE>(idlFactory, canisterId);
  const target = createIdentity("backend-lane-target").getPrincipal();
  await expect(
    guest.assignCallerUserRole(target, { user: null }),
  ).rejects.toThrow();
});
