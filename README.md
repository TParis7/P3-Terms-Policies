# P3 Terms & Policies

The legal pages for [pulseofp3.org](https://www.pulseofp3.org), served from
here so the text can be edited in git and published by pushing, the same way
the homepage and every other rebuilt page works.

## What is in here

| File | What it is |
|---|---|
| `terms-combined.js` | The whole page: styles, P3 nav, the document, P3 footer. Injected into the Webflow shell. |
| `index.html` | A standalone copy for previewing the page locally, without Webflow. |

CDN URL, which is what Webflow loads:

```
https://tparis7.github.io/P3-Terms-Policies/terms-combined.js
```

## Where it renders

Both legal URLs load this same current document, so the two can never drift:

- `https://www.pulseofp3.org/app-terms-conditions`
- `https://www.pulseofp3.org/app-privacy-policy` (kept because the App Store
  and Play listings point at it; it opens on the privacy sections)

`/privacy` and `/terms-conditions` already redirect to the first of these.

## Editing the text

Edit `terms-combined.js`. The document is plain HTML inside `root.innerHTML`:
each part is a `<section class="tp-section" id="...">` with an `<h2>` and
paragraphs, and the Contents rail on the left is built from the same list, so
adding a section means adding it in both places.

Change the **Last updated** date in the hero whenever the wording changes.
That date is the only claim on the page about the page itself.

Then:

```bash
git add terms-combined.js
git commit -m "Terms: <what changed>"
git push
```

GitHub Pages rebuilds in about a minute. Webflow loads the file with a cache
buster (`?v=YYYYMMDDx`) set in the page's footer code, so a change that must
appear immediately needs that string bumped in Webflow as well; otherwise it
appears as caches expire.

## House rules

- The legal text is the legal text. It was lifted from the live page on
  Sep 6 2026, not rewritten, and changes to wording are Thomas's call.
- No em dashes in visible copy.
- The nav, the mobile overlay and the footer are **body-level siblings** of
  `#tp-root`, never nested inside it. They inherit Webflow's site-level body
  font that way; nesting them silently changes the type.
