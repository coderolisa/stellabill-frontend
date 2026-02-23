import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './CreatePlan.module.css';
import LandingNavbar from '@/components/LandingNavbar';
import Footer from '@/components/Footer';

export default function CreatePlan() {
  const navigate = useNavigate();

  return (
 <div className={styles.main} >
   <LandingNavbar />
     <div className={styles.container}>
      <nav className={styles.breadcrumb}>
        <Link to="/plans" className={styles.breadcrumbLink}>Plans</Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>Create plan</span>
      </nav>

      <div className={styles.header}>
        <button onClick={() => navigate(-1)} className={styles.backButton}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back
        </button>
        <h1 className={styles.title}>Create plan</h1>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Details</h2>
          
          <div className={styles.field}>
            <label htmlFor="plan-name" className={styles.label}>
              Plan name <span className={styles.required}>*</span>
            </label>
            <input 
              type="text" 
              id="plan-name" 
              className={styles.input} 
              placeholder="e.g., Pro Plan" 
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="plan-description" className={styles.label}>
              Description <span className={styles.optional}>(optional)</span>
            </label>
            <textarea 
              id="plan-description" 
              className={styles.textarea} 
              placeholder="Describe what's included in this plan..."
            />
          </div>
        </section>

        {/* Pricing Section Placeholder */}
        <section className={styles.sectionDimmed}>
          <h2 className={styles.sectionTitle}>Pricing</h2>
          <div className={styles.placeholderBox}>Pricing fields will be implemented next.</div>
        </section>

        {/* Billing Type Section Placeholder */}
        <section className={styles.sectionDimmed}>
          <h2 className={styles.sectionTitle}>Billing type</h2>
          <div className={styles.placeholderBox}>Billing type options will be implemented next.</div>
        </section>

        <div className={styles.actions}>
          <button className={styles.createButton}>
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            Create plan
          </button>
          <button onClick={() => navigate('/plans')} className={styles.cancelButton}>
            Cancel
          </button>
        </div>
      </div>
    </div>
<Footer/>
 </div>
   ); 
}
