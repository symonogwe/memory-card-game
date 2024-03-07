import { it, expect, describe } from "vitest";

describe("Something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBeTruthy();
  });

  it("false to be falsy", () => {
    expect(false).toBeFalsy();
  });
});
