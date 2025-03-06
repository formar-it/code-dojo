/// <reference types="@vitest/browser/providers/webdriverio" />

import { expect, test } from "vitest";
// import { page } from "@vitest/browser/context";
import { mountTestDom } from "./testing/mount-test-dom.ts";
import { createWorld } from "./pixi-app.ts";

test("properly handles form inputs", async () => {
  mountTestDom();
  const world = await createWorld();

  expect(world).toBeDefined();
});
