import { Fragment } from "react";
import { Link } from "react-router";

// Plain text where `[label](/path)` becomes a link to a page of the site.
function RichText({ text }: { text: string }) {
  const parts = text.split(/\[([^\]]+)\]\((\/[^)]*)\)/);
  return (
    <>
      {parts.map((part, i) =>
        i % 3 === 1 ? (
          <Link key={i} to={parts[i + 1]}>
            {part}
          </Link>
        ) : i % 3 === 2 ? null : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

export default RichText;
