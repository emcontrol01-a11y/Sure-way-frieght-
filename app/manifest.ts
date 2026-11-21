/** app/manifest.ts  ->  /manifest.webmanifest (lets phones "Add to home screen" with the right name, icon and colour) */
import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: 'Sure-Way',
    description: 'Sea freight, air freight, customs clearing, road transport and warehousing from Accra and Kasoa, Ghana.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff8f0',
    theme_color: '#681a31',
    lang: 'en-GH',
    icons: [{ src: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  }
}
