/**
 * components/json-ld.tsx
 * Renders structured data (schema.org JSON-LD) that Google reads to
 * understand the business, services, breadcrumbs and FAQs.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // "<" is escaped so the data can never break out of the script tag
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
