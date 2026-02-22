import { useState, MouseEvent } from 'react';
import PauseSubscriptionModal from '../components/PauseSubscriptionModal';
import { subscriptions } from '../api/client';

export default function Subscriptions() {
  const [isPauseModalOpen, setIsPauseModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handlePauseConfirm = async () => {
    setIsLoading(true);
    try {
      // For demonstration, we use a hardcoded ID
      await subscriptions.pause('sub_123');
      setIsPaused(true);
      setIsPauseModalOpen(false);
    } catch (err) {
      console.error('Failed to pause:', err);
      // In a real app we'd show a toast here
      setIsPauseModalOpen(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', background: '#050505', minHeight: '100vh', color: '#fff' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
          <div>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 700, margin: '0 0 0.5rem' }}>Pro Plan</h1>
            <div style={{ display: 'flex', gap: '1.5rem', color: '#666', fontSize: '14px' }}>
              <span>Next charge: <strong style={{ color: '#aaa' }}>Mar 15, 2026</strong></span>
              <span>Subscribed Since: <strong style={{ color: '#aaa' }}>Dec 15, 2025</strong></span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{
              padding: '4px 12px',
              borderRadius: '20px',
              background: isPaused ? '#331a00' : '#00331a',
              color: isPaused ? '#f97316' : '#10b981',
              fontSize: '12px',
              fontWeight: 600,
              border: `1px solid ${isPaused ? '#f9731640' : '#10b98140'}`
            }}>
              {isPaused ? 'Paused' : 'Active'}
            </span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '2rem' }}>
          {/* Main Content Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Prepaid Vault Card */}
            <div style={{
              background: '#111',
              border: '1px solid #222',
              borderRadius: '20px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <div>
                <h3 style={{ color: '#666', fontSize: '14px', margin: '0 0 1rem' }}>Total balance available</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                  245.00 <span style={{ fontSize: '1rem', color: '#666' }}>USDC</span>
                </div>
                <div style={{ color: '#444', fontSize: '13px', marginTop: '4px' }}>
                  Approximately <strong style={{ color: '#666' }}>3</strong> payments remaining
                </div>
              </div>

              <button style={{
                background: 'cyan',
                color: '#000',
                border: 'none',
                padding: '12px',
                borderRadius: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: 'fit-content',
                minWidth: '140px'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Top up
              </button>
            </div>

            {/* Usage Section Placeholder */}
            <div style={{ background: '#111', border: '1px solid #222', borderRadius: '20px', padding: '2rem' }}>
              <h3 style={{ margin: '0 0 1.5rem', fontSize: '1.1rem' }}>Usage statistics this period</h3>
              <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333' }}>
                Charts and usage data integration
              </div>
            </div>
          </div>

          {/* Sidebar / Actions Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: '#111', border: '1px solid #222', borderRadius: '20px', padding: '1.5rem' }}>
              <h4 style={{ margin: '0 0 1.25rem', color: '#666', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Actions</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {!isPaused && (
                  <button
                    onClick={() => setIsPauseModalOpen(true)}
                    style={{
                      background: '#1a1a1a',
                      color: '#f97316',
                      border: '1px solid #333',
                      padding: '12px',
                      borderRadius: '12px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontWeight: 500,
                      transition: '0.2s'
                    }}
                    onMouseOver={(e: MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.background = '#222')}
                    onMouseOut={(e: MouseEvent<HTMLButtonElement>) => (e.currentTarget.style.background = '#1a1a1a')}
                  >
                    Pause subscription
                  </button>
                )}
                {isPaused && (
                  <button
                    onClick={() => setIsPaused(false)}
                    style={{
                      background: 'linear-gradient(90deg, #10b981 0%, #34d399 100%)',
                      color: '#000',
                      border: 'none',
                      padding: '12px',
                      borderRadius: '12px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                  >
                    Resume subscription
                  </button>
                )}
                <button style={{
                  background: 'transparent',
                  color: '#666',
                  border: '1px solid #222',
                  padding: '12px',
                  borderRadius: '12px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}>
                  Cancel billing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PauseSubscriptionModal
        isOpen={isPauseModalOpen}
        onClose={() => setIsPauseModalOpen(false)}
        onConfirm={handlePauseConfirm}
        isLoading={isLoading}
      />
    </div>
  );
}
