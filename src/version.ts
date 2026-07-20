/// Single source of truth for the CLI version. Sent on every HTTP request
/// as `X-XHood-CLI-Version` so the control plane can enforce a minimum
/// supported version and 426 Upgrade Required older clients. Read from
/// package.json so it can never drift from what npm actually published.

import { createRequire } from "node:module";

export const CLI_VERSION: string = createRequire(import.meta.url)(
  "../package.json",
).version;
export const CLI_VERSION_HEADER = "X-XHood-CLI-Version";
