/// Single source of truth for the CLI version. Sent on every HTTP request
/// as `X-XHood-CLI-Version` so the control plane can enforce a minimum
/// supported version and 426 Upgrade Required older clients. Keep in sync
/// with `version` in package.json on every release.

export const CLI_VERSION = "0.0.1";
export const CLI_VERSION_HEADER = "X-XHood-CLI-Version";
