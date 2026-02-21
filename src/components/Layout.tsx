import { Link, useLocation } from 'react-router-dom'

const nav = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/subscriptions', label: 'Subscriptions' },
  { path: '/plans', label: 'Plans' },
  { path: '/ui-kit', label: 'UI Kit (Mockups)' },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside
        style={{
          width: 220,
          background: '#1a1a2e',
          color: '#fff',
          padding: '1.5rem 0',
        }}
      >
        <div style={{ padding: '0 1rem', marginBottom: '1.5rem' }}>
          <strong style={{ fontSize: '1.1rem' }}>Stellarbill</strong>
        </div>
        <nav>
          {nav.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              style={{
                display: 'block',
                padding: '0.5rem 1rem',
                color: location.pathname === path ? '#fff' : '#94a3b8',
                background: location.pathname === path ? '#2d2d44' : 'transparent',
                textDecoration: 'none',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '2rem', overflow: 'auto' }}>
        {children}
      </main>
    </div>
  )
}
