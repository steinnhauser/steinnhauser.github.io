import type { AnchorHTMLAttributes } from "react";

// Link to another site: opens in a new tab without giving it access to this
// page (`window.opener`) or leaking the referrer.
function ExternalLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

export default ExternalLink;
