import { describe, expect, it, vi } from "vitest";
import { wait } from "../../../lib/utils.js";

describe("wait", () => {
  it("should wait for the specified amount of time", async () => {
    const startTime = Date.now();
    const waitTime = 100;

    await wait(waitTime);

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    // Allow for small timing variations
    expect(elapsedTime).toBeGreaterThanOrEqual(waitTime);
    expect(elapsedTime).toBeLessThan(waitTime + 50); // 50ms buffer
  });

  it("should work with vi.useFakeTimers()", async () => {
    vi.useFakeTimers();

    const promise = wait(1000);
    vi.advanceTimersByTime(1000);
    await promise;

    vi.useRealTimers();
  });
});
