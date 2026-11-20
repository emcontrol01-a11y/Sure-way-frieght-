/**
 * app/template.tsx
 * A template re-mounts on every page change, so each new page fades in
 * smoothly instead of snapping. (The CSS is `.page-enter` in pages.css.)
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>
}
