# Design system

The design uses a clean service-business layout with restrained typography, a dark navy hero, white cards, an orange primary action and green WhatsApp actions. All styles are in `app/globals.css`; variables at the top control the main palette.

| Token | Hex | Purpose |
| --- | --- | --- |
| `--navy` | `#0d2545` | Hero, footer and dark sections |
| `--blue` | `#114979` | Links, secondary buttons and chat |
| `--orange` | `#ffae39` | Main buttons and highlights |
| `--ink` | `#12263e` | Main text |
| `--muted` | `#637184` | Supporting text |
| `--light` | `#f4f7fb` | Alternating section backgrounds |
| `--line` | `#e2e8f0` | Borders and dividers |
| `--green` | `#25b760` | WhatsApp accent |

## Typography

Arial with system sans-serif fallback; no external font requests are required. The hero uses a responsive `clamp()` size; body copy is 16px with 1.6 line height. Use a single H1, followed by descriptive H2 headings and H3 card headings.

## Layout

The content container is max 1180px with 25px horizontal padding (20px on mobile). Grids collapse at 850px and 650px breakpoints. Buttons and links have visible text; native `<details>` powers FAQs.

## Professional visual direction

Use real brand photography, genuine testimonials and consistent iconography when available. Avoid adding decorative elements without a purpose. Check readability on mobile and maintain accessible contrast and keyboard focus.
