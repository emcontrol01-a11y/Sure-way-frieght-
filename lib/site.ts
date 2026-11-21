/**
 * lib/site.ts
 * ---------------------------------------------------------------
 * ONE place for all business details, links, photos and copy.
 * Change a phone number, social link or photo here and it updates
 * the whole website (header, footer, contact page, quote form...).
 * ---------------------------------------------------------------
 */

export const SITE = {
  name: 'Sure-Way Freight Ghana Ltd.',
  short: 'Sure-Way Freight',
  url: 'https://surewayfreightghana.com',
  tagline: 'Local know-how. Global movement.',
  email: 'surewayfreightghana@gmail.com',
  phones: [
    { display: '+233 53 156 6744', tel: '+233531566744', wa: '233531566744' },
    { display: '+233 55 797 7779', tel: '+233557977779', wa: '233557977779' },
  ],
  /** Short line for the top bar and tight spaces */
  locationShort: 'Accra International Airport · Kasoa Danchira',
  /** Full line for the footer / contact details */
  address: 'Accra International Airport & Kasoa Danchira, Ghana',
  /** Both offices — each gets its own map + directions link on the Contact page */
  offices: [
    {
      name: 'Accra International Airport',
      area: 'Accra · Greater Accra Region',
      note: 'Air cargo and Kotoka clearing desk',
      mapEmbed: 'https://www.google.com/maps?q=Kotoka+International+Airport,+Accra,+Ghana&output=embed',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Kotoka+International+Airport+Accra+Ghana',
    },
    {
      name: 'Kasoa Danchira',
      area: 'Kasoa · Central Region',
      note: 'Road transport, warehousing and walk-in enquiries',
      mapEmbed: 'https://www.google.com/maps?q=Danchira,+Kasoa,+Ghana&output=embed',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Danchira+Kasoa+Ghana',
    },
  ],
  /**
   * TODO (Emma): replace these three with the exact page URLs once you have
   * them (e.g. https://facebook.com/<page>). Until then they open a search
   * for "Sure-Way Freight Ghana" so no visitor lands on a dead link.
   */
  socials: {
    facebook: 'https://www.facebook.com/search/top?q=Sure-Way%20Freight%20Ghana',
    instagram: 'https://www.instagram.com/explore/search/keyword/?q=Sure-Way%20Freight%20Ghana',
    youtube: 'https://www.youtube.com/results?search_query=Sure-Way+Freight+Ghana',
  },
}

/** Build a WhatsApp link with an optional pre-filled message. */
export function whatsappLink(text = 'Hello Sure-Way Freight, I would like to make an enquiry.') {
  return `https://wa.me/${SITE.phones[0].wa}?text=${encodeURIComponent(text)}`
}

/* ------------------------------------------------------------------
 * PHOTOS — free-to-use Unsplash photos (no attribution required).
 * Swap any URL for your own photo (e.g. '/my-photo.jpg' in /public).
 * `u()` adds sizing so the browser never downloads a 6000px original.
 * ------------------------------------------------------------------ */
const u = (id: string, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`

/**
 * RULE: every photo is used in exactly ONE place on the site (client request:
 * no repeated photos). When you add a new spot, add a new photo here too.
 */
export const PHOTOS = {
  // ---- Sea freight ----
  seaCard: { src: u('photo-1590496793907-4d66e2994b4d'), alt: 'Container ship being loaded by quay cranes at a busy port at dusk' },
  seaHero: { src: u('photo-1769144256181-698b8f807066'), alt: 'Cargo ship loaded with colourful containers at a port' },
  seaBand: { src: u('photo-1606185540834-d6e7483ee1a4'), alt: 'Red and blue cargo ship sailing across open water' },
  // ---- Air freight ----
  airCard: { src: u('photo-1721592873149-9823d9dc6b40'), alt: 'Airplane landing on a runway at dusk' },
  airHero: { src: u('photo-1775449053619-89b5265f611a'), alt: 'Large white cargo airplane parked on the apron' },
  airBand: { src: u('photo-1787289434954-795edf0255b7'), alt: 'Cargo airplane in silhouette against an orange sky' },
  // ---- Clearing & forwarding ----
  clearingCard: { src: u('photo-1601897690942-bcacbad33e55'), alt: 'Blue, red and yellow intermodal shipping containers' },
  clearingHero: { src: u('photo-1773126378915-793b5c48fb38'), alt: 'Shipping containers stacked high at a busy port' },
  // ---- Road transport ----
  roadHero: { src: u('photo-1601584115197-04ecc0da31d7'), alt: 'White freight truck on the road' },
  roadBand: { src: u('photo-1616432043562-3671ea2e5242'), alt: 'Freight truck driving along a highway' },
  // ---- Warehousing + global logistics ----
  warehouseHero: { src: u('photo-1553413077-190dd305871c'), alt: 'Large warehouse interior with stocked racking' },
  globalCard: { src: u('photo-1664382953403-fc1ac77073a0'), alt: 'Two staff members walking through a warehouse aisle' },
  globalHero: { src: u('photo-1466691623998-d607fab1ca29'), alt: 'Aerial view of an airport with many airplanes' },
  // ---- Page banners ----
  bannerServices: { src: u('photo-1765206257996-9b4a5d886a2c'), alt: 'Container ships and cranes at a busy port' },
  bannerAbout: { src: u('photo-1769837496184-32831581c55a'), alt: 'Container ship and cranes at a busy shipping port' },
  bannerQuote: { src: u('photo-1562892302-97faedd66f1c'), alt: 'Aerial view of freight containers' },
  bannerTrack: { src: u('photo-1670121180530-cfcba4438038'), alt: 'Large cargo ship at a dock' },
  bannerFaq: { src: u('photo-1590497008432-598f04441de8'), alt: 'Shipping port with containers and cranes under a dramatic sky' },
  bannerContact: { src: u('photo-1492168732976-2676c584c675'), alt: 'Aerial view of a freight truck lot' },
  // ---- About page ----
  aboutStory: { src: u('photo-1627309366653-2dedc084cdf1'), alt: 'Tall shelving filled with cardboard boxes in a warehouse' },
  aboutTeam: { src: u('photo-1565793298595-6a879b1d9492'), alt: 'Freight trucks parked and ready for dispatch' },
}

/* ------------------------------------------------------------------ */
export const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'About us', href: '/about' },
  { label: 'How it works', href: '/#process' },
  { label: 'Track cargo', href: '/track' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export type Service = {
  slug: string
  number: string
  title: string
  tag: string
  icon: 'ship' | 'plane' | 'anchor' | 'boxes' | 'truck' | 'warehouse'
  image: string // local file or remote URL
  heroImage: { src: string; alt: string }
  summary: string
  intro: string
  includes: string[]
  bestFor: string[]
  steps: string[]
}

export const SERVICES: Service[] = [
  {
    slug: 'sea-freight',
    number: '01',
    title: 'Sea freight',
    tag: 'OCEAN · FCL & LCL',
    icon: 'ship',
    image: PHOTOS.seaCard.src,
    heroImage: PHOTOS.seaHero,
    summary: 'Move your cargo across oceans with dependable FCL and LCL shipping, clear communication and expert port coordination.',
    intro:
      'Most of Ghana’s trade arrives and leaves by sea through the Port of Tema. We handle the booking, documentation and port coordination so your container moves smoothly from the origin port to your door.',
    includes: [
      'Full container load (FCL) – 20ft and 40ft containers',
      'Less than container load (LCL) – share a container, pay for what you ship',
      'Booking, bill of lading and shipping documents',
      'Port coordination and cargo follow-up at Tema',
      'Import and export shipments',
    ],
    bestFor: ['Importers of goods, machinery and vehicles', 'Exporters of agricultural and manufactured products', 'SMEs consolidating small shipments (LCL)'],
    steps: ['Share cargo details, origin and destination', 'We quote and book space', 'Cargo is loaded and documents issued', 'We follow the vessel and prepare arrival', 'Port handling and delivery'],
  },
  {
    slug: 'air-freight',
    number: '02',
    title: 'Air freight',
    tag: 'AIR · PRIORITY',
    icon: 'plane',
    image: PHOTOS.airCard.src,
    heroImage: PHOTOS.airHero,
    summary: 'When time matters, we connect your shipment to global air cargo networks for fast, carefully managed delivery.',
    intro:
      'Urgent spare parts, time-sensitive stock or high-value goods — air freight gets them moving fast. We arrange space with airlines and manage the paperwork through Kotoka International Airport.',
    includes: [
      'Airport-to-airport and door-to-door air cargo',
      'Express and priority options for urgent shipments',
      'Airway bill preparation and documentation',
      'Handling and clearance coordination at Kotoka International Airport (KIA)',
      'Import and export shipments',
    ],
    bestFor: ['Urgent spare parts and equipment', 'E-commerce and retail restocking', 'High-value or time-sensitive goods'],
    steps: ['Tell us what is moving and how fast', 'We source the best routing and quote', 'Cargo is collected, packed and tendered to the airline', 'We track the flight and prepare arrival', 'Clearance and delivery'],
  },
  {
    slug: 'clearing-and-forwarding',
    number: '03',
    title: 'Clearing & forwarding',
    tag: 'CUSTOMS · DOOR TO DOOR',
    icon: 'anchor',
    image: PHOTOS.clearingCard.src,
    heroImage: PHOTOS.clearingHero,
    summary: 'Navigate customs with confidence. Our team coordinates documentation, clearance and forwarding at every step.',
    intro:
      'Customs paperwork is where shipments most often get stuck. We prepare and submit your declaration, coordinate inspections and duty payment, and forward your cargo onward once it is released.',
    includes: [
      'Customs declaration preparation and submission',
      'Duty and tax assessment guidance',
      'Coordination of port inspections and releases',
      'Forwarding of cleared cargo to your warehouse or site',
      'Transit cargo for neighbouring countries',
    ],
    bestFor: ['First-time importers who want guidance', 'Businesses that want one team for shipping and clearing', 'Regular importers tired of delays'],
    steps: ['You send the shipping documents', 'We review and prepare the declaration', 'Duties are assessed and paid', 'Inspection and release coordinated', 'Cargo forwarded to its final destination'],
  },
  {
    slug: 'road-transport',
    number: '04',
    title: 'Road transport & haulage',
    tag: 'LAND · DOMESTIC & REGIONAL',
    icon: 'truck',
    image: '/sureway-freight.png',
    heroImage: PHOTOS.roadHero,
    summary: 'Reliable trucking from the port to your warehouse, across Ghana and onward across the region.',
    intro:
      'Cargo is only delivered when it reaches your door. We arrange haulage from Tema and Kotoka to Accra, Kumasi, Takoradi and beyond — and on to the sub-region where required.',
    includes: [
      'Container haulage from port to warehouse and back',
      'Part-load and full-truck deliveries within Ghana',
      'Last-mile delivery to your site',
      'Regional road freight to neighbouring countries',
    ],
    bestFor: ['Businesses outside Accra', 'Importers moving cleared containers', 'Companies supplying neighbouring markets'],
    steps: ['Confirm pickup and drop-off points', 'We assign the right truck and driver', 'Cargo is loaded and secured', 'You get delivery updates on the road', 'Offloading and proof of delivery'],
  },
  {
    slug: 'warehousing',
    number: '05',
    title: 'Warehousing & distribution',
    tag: 'STORAGE · FULFILMENT',
    icon: 'warehouse',
    image: '/sureway-warehouse.png',
    heroImage: PHOTOS.warehouseHero,
    summary: 'Secure storage, consolidation and distribution so your stock is ready when your customers are.',
    intro:
      'Not every shipment goes straight to its final home. We receive, store, consolidate and dispatch your goods so you can hold stock close to the port and release it in step with demand.',
    includes: [
      'Cargo receiving and inspection',
      'Short and medium-term storage',
      'Consolidation and deconsolidation',
      'Pick, pack and dispatch to customers or branches',
    ],
    bestFor: ['Retailers and distributors', 'Importers who release stock in batches', 'Businesses that need a base near the port'],
    steps: ['Cargo arrives and is checked in', 'Goods are stored and recorded', 'Orders are picked and packed', 'Dispatch by road to your customers'],
  },
  {
    slug: 'global-logistics',
    number: '06',
    title: 'Global logistics',
    tag: '3PL · 4PL · 5PL',
    icon: 'boxes',
    image: PHOTOS.globalCard.src,
    heroImage: PHOTOS.globalHero,
    summary: 'Practical 3PL, 4PL and 5PL support — from warehousing and transport to the last mile and everything between.',
    intro:
      'For businesses that would rather focus on selling than shipping, we can take on more of the supply chain: planning, carriers, warehousing, transport and delivery — managed as one joined-up service.',
    includes: [
      '3PL: transport, warehousing and distribution',
      '4PL: planning and coordination of the whole supply chain',
      '5PL: integrated, technology-supported logistics management',
      'Supplier-to-customer coordination',
    ],
    bestFor: ['Growing companies without a logistics team', 'Organisations with multi-country supply chains', 'Businesses that want one accountable partner'],
    steps: ['We learn how your goods flow today', 'We design a simpler, joined-up plan', 'We coordinate carriers, storage and delivery', 'We report back and keep improving'],
  },
]

export const PROCESS = [
  { number: '01', title: 'Tell us what’s moving', detail: 'Share your cargo, route and timing. We’ll help map the right solution.' },
  { number: '02', title: 'We plan every detail', detail: 'Get a clear quote and a coordinated plan for documents, transport and handling.' },
  { number: '03', title: 'Your cargo gets moving', detail: 'We manage the hand-offs and keep you informed from origin to destination.' },
]

export const INDUSTRIES = [
  { title: 'Import & retail', copy: 'Stock for shops, supermarkets and distributors — on time and cleared.' },
  { title: 'Agriculture & export', copy: 'Cocoa, shea, cashew and other Ghanaian products heading to world markets.' },
  { title: 'Mining & energy', copy: 'Heavy equipment, spares and project cargo that cannot afford delays.' },
  { title: 'Construction', copy: 'Building materials, machinery and fittings delivered to site.' },
  { title: 'Vehicles & machinery', copy: 'Cars, trucks and machinery shipped and cleared with care.' },
  { title: 'E-commerce & SMEs', copy: 'Small, frequent shipments with simple pricing and friendly support.' },
  { title: 'Health & education', copy: 'Medical supplies, equipment and learning materials for institutions.' },
  { title: 'Personal effects', copy: 'Household goods and personal shipments for people relocating.' },
]

export const LANES = [
  { from: 'China & Far East', to: 'Tema / Accra', mode: 'Sea · Air' },
  { from: 'Dubai & Middle East', to: 'Tema / Accra', mode: 'Sea · Air' },
  { from: 'Europe & UK', to: 'Tema / Accra', mode: 'Sea · Air' },
  { from: 'USA & Canada', to: 'Tema / Accra', mode: 'Sea · Air' },
  { from: 'Tema / Accra', to: 'West Africa', mode: 'Road · Sea' },
  { from: 'Tema', to: 'Landlocked neighbours', mode: 'Road transit' },
]

export const DOCUMENTS = [
  'Commercial invoice',
  'Packing list',
  'Bill of lading (sea) or airway bill (air)',
  'Business TIN and company registration details',
  'Certificate of origin, where applicable',
  'Permits for regulated goods (e.g. food, drugs, chemicals)',
  'Insurance certificate',
]

export const FAQS = [
  {
    q: 'What services does Sure-Way Freight Ghana offer?',
    a: 'We offer sea freight (FCL and LCL), air freight, clearing and forwarding, road transport, warehousing and wider 3PL/4PL/5PL logistics support, with offices at Accra International Airport and Kasoa Danchira.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Use our online quote form, call or WhatsApp us on +233 53 156 6744, or email surewayfreightghana@gmail.com. The more detail you share — cargo type, weight or volume, origin and destination — the faster and more accurate your quote.',
  },
  {
    q: 'What is the difference between FCL and LCL?',
    a: 'FCL (full container load) means you use a whole container for your cargo. LCL (less than container load) means your goods share a container with other shippers, so you pay only for the space you use. LCL suits smaller shipments.',
  },
  {
    q: 'Which documents do I need to ship or clear cargo?',
    a: 'Typically a commercial invoice, packing list, bill of lading or airway bill, and your company’s TIN details. Some goods also need permits or certificates. We will tell you exactly what applies to your cargo.',
  },
  {
    q: 'Can you clear my goods at the Port of Tema and Kotoka Airport?',
    a: 'Yes. Our clearing and forwarding service covers customs declaration, duty assessment, inspection coordination and delivery after release, for both sea and air cargo.',
  },
  {
    q: 'How long does shipping take?',
    a: 'It depends on the route, mode and season. Air freight is measured in days, sea freight in weeks. Tell us your origin and destination and we will give you a realistic estimate with your quote.',
  },
  {
    q: 'Can I track my shipment?',
    a: 'Yes. Send us your booking, bill of lading or container number on our Track Cargo page and we will update you on the latest status by WhatsApp, phone or email.',
  },
  {
    q: 'Do you deliver outside Accra?',
    a: 'Yes. We arrange road delivery from the port or airport to destinations across Ghana, and onward to neighbouring countries.',
  },
  {
    q: 'Do you handle small or one-off shipments?',
    a: 'Absolutely. Whether it is your first shipment or your fiftieth, individuals, SMEs and large companies are all welcome.',
  },
  {
    q: 'Is my cargo insured?',
    a: 'We can help you arrange cargo insurance for your shipment. Ask us when you request your quote.',
  },
]

export const VALUES = [
  { title: 'Reliable by design', copy: 'Clear plans, consistent updates and no surprises along the way.' },
  { title: 'Personal service', copy: 'You deal with real people who know your shipment — not a call centre.' },
  { title: 'Local know-how', copy: 'We understand Tema, Kotoka, Ghana customs and how things really move here.' },
  { title: 'Global reach', copy: 'Connected to carriers and agents around the world.' },
  { title: 'Honest communication', copy: 'If something changes, you hear it from us first.' },
  { title: 'End-to-end care', copy: 'From origin to arrival, every hand-off is managed.' },
]

export const TRACK_STAGES = [
  { title: 'Booking confirmed', copy: 'Your cargo is booked and documents are being prepared.' },
  { title: 'Cargo received & loaded', copy: 'Goods are received, checked and loaded onto the vessel or aircraft.' },
  { title: 'In transit', copy: 'Your cargo is on its way. We follow it and keep you posted.' },
  { title: 'Arrived at port or airport', copy: 'The shipment has arrived at Tema or Kotoka and notices are issued.' },
  { title: 'Customs clearance', copy: 'Declaration, duty payment and inspection are completed.' },
  { title: 'Delivered', copy: 'Cargo reaches its final destination and delivery is confirmed.' },
]
