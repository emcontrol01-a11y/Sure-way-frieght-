# Sure-Way Freight Ghana — SEO & Google setup

The code is done. These steps are what put the site in front of Google.

## 1. Deploy, then check these 3 addresses open
- https://surewayfreightghana.com/sitemap.xml   (list of all pages)
- https://surewayfreightghana.com/robots.txt    (points Google to the sitemap)
- https://surewayfreightghana.com/og-image.jpg  (the picture shown when the link is shared)

## 2. Add the site to Google Search Console (free)
1. Go to https://search.google.com/search-console and sign in with the Google account that should own the site.
2. Add property -> **Domain** -> type `surewayfreightghana.com`.
3. Google shows a **TXT record**. Add it in your DNS (the "DNS | Records" tab you already have open):
   Type = TXT, Name = @, Content = the code Google gives you. Save, then click Verify.
   (Alternative: choose "URL prefix", pick the HTML tag method, copy ONLY the `content="..."` value and add it in your
   hosting dashboard as the environment variable `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, then redeploy.)
4. Left menu -> **Sitemaps** -> enter `sitemap.xml` -> Submit.
5. Left menu -> **URL inspection** -> paste `https://surewayfreightghana.com/` -> **Request indexing**.
   Repeat for /quote, /services and /contact. New sites usually show up within days to a few weeks.

## 3. Do these two things for the biggest local-search boost
- **Google Business Profile** (https://business.google.com): create one profile per office (Accra International
  Airport, Kasoa Danchira), same phone numbers as the site, website = surewayfreightghana.com. This is what puts
  you on Google Maps and in "freight forwarder near me" searches.
- **Real social links**: in `lib/site.ts`, replace the three placeholder `socials` URLs with your real page URLs.
  Once they are real they are automatically added to the Google structured data.

## 4. Keep it fresh
- When you publish meaningful changes, update `SITE_UPDATED` in `lib/seo.ts` (this is the "last modified" date in the sitemap).
- Adding a new service in `lib/site.ts` adds its page to the sitemap automatically.

## 5. Optional (Bing / Yahoo / DuckDuckGo)
Bing Webmaster Tools can import your site straight from Search Console. Or set `NEXT_PUBLIC_BING_SITE_VERIFICATION`.

## 6. Test it
- Structured data: https://search.google.com/test/rich-results (paste your URL)
- Share preview: send the link to yourself on WhatsApp and check the title + picture.
- Speed: https://pagespeed.web.dev
