import { withBase } from "./base";

export function logoHtml(href: string): string {
  return (
    `<a class="logo" href="${href}" aria-label="Northgo">` +
    `<img src="${withBase("/logo.svg")}" alt="" width="168" height="33">` +
    `</a>`
  );
}
