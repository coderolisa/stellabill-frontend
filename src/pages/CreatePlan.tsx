import { useState } from 'react'
import PricingSection, { validatePricing, type PricingSectionValue } from '../components/PricingSection'

export default function CreatePlan() {
  const [pricing, setPricing] = useState<PricingSectionValue>({ price: '', interval: '' })
  const [errors, setErrors] = useState<{ priceError?: string; intervalError?: string }>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validatePricing(pricing)
    if (validationErrors.priceError || validationErrors.intervalError) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    console.log('Create plan:', { price: parseFloat(pricing.price), interval: pricing.interval })
  }

  return (
    <div style={{ padding: '1.5rem 2rem', background: '#0a0a0a', minHeight: '100vh' }}>
      <h1 style={{ color: '#e2e8f0', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Create plan</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <PricingSection
            value={pricing}
            onChange={setPricing}
            priceError={errors.priceError}
            intervalError={errors.intervalError}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '0.75rem 1.5rem',
            background: '#3b82f6',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '0.875rem',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          Create plan
        </button>
      </form>
    </div>
  )
}
