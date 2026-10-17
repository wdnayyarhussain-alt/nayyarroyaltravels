# Porter Pakistan (redesign)

Modern redesign of porterpakistan.com. Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4. No database, no auth, no API keys.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where to edit

| What | File |
| --- | --- |
| Phone numbers, email, socials, app links | `lib/data.ts` (`site`, `WHATSAPP_NUMBER`) |
| Destinations, packages, hotels, reviews | `lib/data.ts` |
| Car rental / beach hut / farmhouse page text | `lib/data.ts` (`stayServices`) |
| Trip Designer price logic | `components/TripDesigner.tsx` (`styles` factors) |
| Colors, fonts, theme | `app/globals.css` (`@theme`) |

## Notes

- All forms (Trip Designer, enquiries, hotel availability) open WhatsApp with a pre-filled message. Nothing is stored.
- Images are generated SVG landscapes (`components/LandscapeArt.tsx`) so the site works without any photo files. To use real photos, put them in `public/images` and swap `LandscapeArt` for `next/image` in the cards.
- Logo is a simple placeholder mark in `components/Logo.tsx`. Replace it with the client's logo.
- Car rental vehicle types, beach hut and farmhouse options are sample content. Confirm with the client.
- Trip Designer estimate = destination "from" price x style factor (1 / 1.3 / 1.8). Adjust the factors to the client's real pricing.
- Fonts (Bricolage Grotesque, Figtree) are bundled via npm, so there are no Google Fonts requests.
