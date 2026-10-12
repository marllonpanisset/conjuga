"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

/**
 * True only after client hydration.
 *
 * Server and first client render return false, so motion primitives render
 * visible static markup until JavaScript takes over — content never depends
 * on an animation to be seen, with or without JavaScript.
 */
export function useMounted() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}
