export default function Dashboard() {
  return (
    <div>
      <h1 style={{ margin: '0 0 1rem', fontSize: '1.5rem' }}>Dashboard</h1>
      <p style={{ color: '#64748b' }}>
        Overview of your subscription metrics and revenue. Connect the backend API to load real data.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
        <Card title="Active Subscriptions" value="—" />
        <Card title="MRR" value="—" />
        <Card title="Pending Charges" value="—" />
      </div>
    </div>
  )
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div style={{ background: '#fff', padding: '1.25rem', borderRadius: 8, boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
      <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem' }}>{title}</div>
      <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>{value}</div>
    </div>
  )
}
