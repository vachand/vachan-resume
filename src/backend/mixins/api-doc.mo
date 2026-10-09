mixin () {
  public query func getApiDoc() : async Text {
    "# Backend API Documentation\n\n" #
    "## Purpose\n\n" #
    "This canister is the backend for a static personal resume / portfolio website.\n" #
    "It stores **no domain data** — there are no profiles, posts, projects, or any\n" #
    "other persisted records, and no queryable entities are registered. The only\n" #
    "state the canister holds is the authorization state used by the Internet\n" #
    "Identity access-control component.\n\n" #
    "## Public API\n\n" #
    "### `getApiDoc() : async Text` (query)\n\n" #
    "Returns this Markdown document. It is a pure read and takes no arguments.\n\n" #
    "### Authorization surface\n\n" #
    "The canister includes the Caffeine authorization mixin, which exposes the\n" #
    "following endpoints:\n\n" #
    "- `_initialize_access_control()` — one-time registration entry point. The first\n" #
    "  signed-in caller to invoke it becomes the `#admin`; every subsequent caller\n" #
    "  becomes a `#user`. Anonymous callers are rejected.\n" #
    "- `assignCallerUserRole(user : Principal, role : UserRole)` — admin-only. Assigns\n" #
    "  a role (`#admin`, `#user`, or `#guest`) to another principal. Traps for\n" #
    "  non-admin callers.\n" #
    "- `getCallerUserRole() : async UserRole` — returns the role of the calling\n" #
    "  principal. Anonymous callers are treated as `#guest`.\n" #
    "- `isCallerAdmin() : async Bool` — returns whether the calling principal is an\n" #
    "  admin.\n\n" #
    "## Authentication and authorization\n\n" #
    "- **Anonymous callers** are treated as `#guest`. They may call the read-only\n" #
    "  role queries, but any admin-guarded call traps.\n" #
    "- **Signed-in callers** are identified by their Internet Identity principal.\n" #
    "- **Owner / first admin**: the first signed-in caller to invoke\n" #
    "  `_initialize_access_control()` becomes `#admin`; later callers become `#user`.\n" #
    "- **Admin-only** operations (such as `assignCallerUserRole`) trap with an\n" #
    "  authorization error for non-admin callers.\n\n" #
    "### Identity derivation\n\n" #
    "The frontend pins an Internet Identity derivation origin, published at\n" #
    "`/.well-known/ii-derivation-origin` when available. An agent that already holds\n" #
    "the user's Internet Identity authorization derives the correct per-app principal\n" #
    "against that origin (for example `icp identity link web <name> --app <host>`).\n" #
    "Such a delegation acts with the user's full authority in this app until it\n" #
    "expires.\n\n" #
    "### Registration prerequisite\n\n" #
    "Registration happens only when a caller signs in through the app's own frontend\n" #
    "and calls `_initialize_access_control()` once. A principal that never did so is\n" #
    "unregistered even if it belongs to the app's owner, and a signed-in caller\n" #
    "derived against a different origin is a different principal than the one the\n" #
    "frontend registered. An unregistered caller invoking a role-guarded endpoint\n" #
    "receives the authorization trap produced by the access-control component.\n\n" #
    "## Units and encodings\n\n" #
    "- `Principal` values are Internet Identity principals.\n" #
    "- `UserRole` is a variant: `#admin`, `#user`, or `#guest`.\n" #
    "- There are no timestamps, blobs, or numeric identifiers in this API.\n\n" #
    "## Lifecycle and polling\n\n" #
    "All endpoints are synchronous request/response. There is no job, queue, or\n" #
    "asynchronous state transition to poll.\n\n" #
    "## Mutation retry safety\n\n" #
    "`_initialize_access_control()` is idempotent per caller: calling it again after\n" #
    "registration does not change the caller's role. `assignCallerUserRole` is\n" #
    "idempotent — assigning the same role twice has the same effect as once.\n\n" #
    "## Errors and limits\n\n" #
    "- Authorization failures trap with an error message; they do not return a\n" #
    "  `Result` variant.\n" #
    "- There are no rate limits, pagination, or size limits beyond the platform's\n" #
    "  standard message limits.\n";
  };
};
