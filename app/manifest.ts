import type { MetadataRoute } from 'next'

// Lets phones "Add to home screen" with the ship logo, and gives Google a second icon source.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sure-Way Freight Ghana Ltd.',
    short_name: 'Sure-Way',
    description: 'Sea freight, air freight, clearing & forwarding and logistics from Accra and Kasoa, Ghana.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fffaf4',
    theme_color: '#681a31',
    icons: [
      { src: '/sureway-icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/sureway-icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
