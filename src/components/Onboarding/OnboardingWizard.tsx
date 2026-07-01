import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import type { UserRole } from '../../types';
import { COUNTRIES, getStates, getCities, getColleges } from '../../utils/locationData';

const sel: React.CSSProperties = {
  width: '100%', padding: '10px 12px', fontSize: 14,
  border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)',
  background: '#fff', color: 'var(--text-primary)',
  outline: 'none', fontFamily: 'Inter, sans-serif',
  transition: 'border-color 120ms', boxSizing: 'border-box', cursor: 'pointer',
};
const inp: React.CSSProperties = { ...sel, cursor: 'text' };

const AGES = ['Under 16', '16–17', '18–20', '21–23', '24–27', '28–35', '36–45', '46+'];

export const OnboardingWizard: React.FC = () => {
  const { currentUser, completeOnboarding, showToast } = useApp();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Step 1
  const [name, setName]   = useState(currentUser?.name || '');
  const [role, setRole]   = useState<UserRole>(currentUser?.role || 'student');
  const [age, setAge]     = useState('');

  // Step 2
  const [country, setCountry] = useState('India');
  const [state, setState]     = useState('');
  const [city, setCity]       = useState('');
  const [college, setCollege] = useState('');

  // Search & custom inputs for searchable college selection
  const [collegeSearch, setCollegeSearch] = useState('');
  const [showCollegeDropdown, setShowCollegeDropdown] = useState(false);
  const [isOther, setIsOther] = useState(false);
  const [customCollege, setCustomCollege] = useState('');

  const states   = getStates(country);
  const cities   = state  ? getCities(country, state)   : [];
  const colleges = city   ? getColleges(country, state, city) : [];

  // Filter colleges based on search query
  const filteredColleges = colleges.filter(c =>
    c.toLowerCase().includes(collegeSearch.toLowerCase())
  );

  const canStep1 = name.trim().length >= 2 && age;
  const finalCollegeValue = isOther ? customCollege.trim() : college;
  const canStep2 = country && state && city && finalCollegeValue.length >= 2;

  const handleFinish = async () => {
    if (!canStep2) return;
    setLoading(true);
    const res = await completeOnboarding({ name: name.trim(), role, age, country, state, city, college: finalCollegeValue });
    setLoading(false);
    if (res.success) showToast(`Welcome to SurgeSkill, ${name.split(' ')[0]}! 🎉`);
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 16,
    }}>
      <div style={{
        background: 'var(--surface)', borderRadius: 20, width: '100%', maxWidth: 520,
        boxShadow: '0 24px 80px rgba(0,0,0,0.25)', overflow: 'hidden',
      }}>
        {/* Progress bar */}
        <div style={{ height: 4, background: 'var(--border)' }}>
          <div style={{
            height: '100%', borderRadius: 99, transition: 'width 0.4s ease',
            background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
            width: step === 1 ? '50%' : '100%',
          }} />
        </div>

        <div style={{ padding: '32px 36px' }}>
          {/* Step indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            {[1, 2].map(s => (
              <div key={s} style={{
                width: 28, height: 28, borderRadius: '50%', fontSize: 12, fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: s <= step ? 'linear-gradient(135deg,#6366f1,#8b5cf6)' : 'var(--bg)',
                color: s <= step ? '#fff' : 'var(--text-muted)',
                border: s <= step ? 'none' : '1px solid var(--border)',
                transition: 'all 0.3s',
              }}>{s}</div>
            ))}
            <span style={{ fontSize: 12, color: 'var(--text-muted)', marginLeft: 4 }}>
              Step {step} of 2
            </span>
          </div>

          {/* ── STEP 1: About You ─────────────────────────────── */}
          {step === 1 && (
            <>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: 4 }}>
                Welcome! Let's set up your profile 👋
              </h2>
              <p style={{ fontSize: 13.5, color: 'var(--text-muted)', marginBottom: 28, lineHeight: 1.6 }}>
                Tell us a bit about yourself to personalize your experience.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {/* Name */}
                <div>
                  <label style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>
                    Full Name *
                  </label>
                  <input style={inp} value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Arjun Sharma" />
                </div>

                {/* Role */}
                <div>
                  <label style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 8 }}>
                    I am joining as *
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    {([
                      ['student', 'school', 'Student', 'Here to learn & explore'],
                      ['mentor',  'person_celebrate', 'Mentor', 'Here to teach & guide'],
                    ] as const).map(([r, icon, label, desc]) => (
                      <button key={r} type="button" onClick={() => setRole(r as UserRole)}
                        style={{
                          padding: '14px 12px', borderRadius: 10, cursor: 'pointer',
                          border: `2px solid ${role === r ? '#6366f1' : 'var(--border)'}`,
                          background: role === r ? 'rgba(99,102,241,0.06)' : '#fff',
                          textAlign: 'left', transition: 'all 150ms',
                        }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 22, color: role === r ? '#6366f1' : 'var(--text-muted)', display: 'block', marginBottom: 4 }}>{icon}</span>
                        <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--text-primary)' }}>{label}</div>
                        <div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 2 }}>{desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Age */}
                <div>
                  <label style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>
                    Age Group *
                  </label>
                  <select style={sel} value={age} onChange={e => setAge(e.target.value)}>
                    <option value="">Select age group…</option>
                    {AGES.map(a => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>
              </div>

              <button
                style={{
                  width: '100%', marginTop: 28, padding: '12px',
                  background: canStep1 ? 'linear-gradient(135deg,#6366f1,#8b5cf6)' : 'var(--border)',
                  color: canStep1 ? '#fff' : 'var(--text-muted)',
                  border: 'none', borderRadius: 10, fontSize: 14.5, fontWeight: 700,
                  cursor: canStep1 ? 'pointer' : 'not-allowed', transition: 'all 150ms',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                }}
                disabled={!canStep1}
                onClick={() => canStep1 && setStep(2)}
              >
                Continue
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              </button>
            </>
          )}

          {/* ── STEP 2: Location ──────────────────────────────── */}
          {step === 2 && (
            <>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: 4 }}>
                Where are you from? 📍
              </h2>
              <p style={{ fontSize: 13.5, color: 'var(--text-muted)', marginBottom: 6, lineHeight: 1.6 }}>
                This connects you with communities at your institution.
              </p>
              <div style={{
                fontSize: 12, color: '#b45309', background: '#fef3c7', border: '1px solid #fde68a',
                borderRadius: 8, padding: '8px 12px', marginBottom: 24,
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 15 }}>lock</span>
                Location cannot be changed after this step.
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {/* Country */}
                <div>
                  <label style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>Country *</label>
                  <select style={sel} value={country} onChange={e => { setCountry(e.target.value); setState(''); setCity(''); setCollege(''); setCollegeSearch(''); setIsOther(false); setCustomCollege(''); }}>
                    {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                {/* State */}
                {states.length > 0 && (
                  <div>
                    <label style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>State / Province *</label>
                    <select style={sel} value={state} onChange={e => { setState(e.target.value); setCity(''); setCollege(''); setCollegeSearch(''); setIsOther(false); setCustomCollege(''); }}>
                      <option value="">Select state…</option>
                      {states.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                )}

                {/* City */}
                {state && cities.length > 0 && (
                  <div>
                    <label style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>City *</label>
                    <select style={sel} value={city} onChange={e => { setCity(e.target.value); setCollege(''); setCollegeSearch(''); setIsOther(false); setCustomCollege(''); }}>
                      <option value="">Select city…</option>
                      {cities.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                )}

                {/* College */}
                {city && (
                  <div style={{ position: 'relative' }}>
                    <label style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>
                      {role === 'mentor' ? 'Organization / University *' : 'College / University *'}
                    </label>
                    
                    {/* Search Input Box */}
                    <div style={{ position: 'relative' }}>
                      <input
                        style={inp}
                        type="text"
                        placeholder="Type to search college..."
                        value={collegeSearch}
                        onFocus={() => setShowCollegeDropdown(true)}
                        onChange={e => {
                          setCollegeSearch(e.target.value);
                          setShowCollegeDropdown(true);
                          if (e.target.value === '') {
                            setCollege('');
                            setIsOther(false);
                          }
                        }}
                      />
                      {collegeSearch && (
                        <button
                          type="button"
                          onClick={() => {
                            setCollegeSearch('');
                            setCollege('');
                            setIsOther(false);
                            setCustomCollege('');
                            setShowCollegeDropdown(true);
                          }}
                          style={{
                            position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
                            background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)'
                          }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>close</span>
                        </button>
                      )}
                    </div>

                    {/* Dropdown Options List */}
                    {showCollegeDropdown && (
                      <>
                        {/* Overlay backdrop to close dropdown on click outside */}
                        <div
                          style={{ position: 'fixed', inset: 0, zIndex: 998 }}
                          onClick={() => setShowCollegeDropdown(false)}
                        />
                        <div style={{
                          position: 'absolute', left: 0, right: 0, top: '100%', marginTop: 4,
                          background: '#fff', border: '1px solid var(--border)', borderRadius: 8,
                          boxShadow: '0 8px 30px rgba(0,0,0,0.12)', maxHeight: 200, overflowY: 'auto',
                          zIndex: 999,
                        }}>
                          {filteredColleges.length > 0 ? (
                            filteredColleges.map(c => (
                              <div
                                key={c}
                                onClick={() => {
                                  setCollege(c);
                                  setCollegeSearch(c);
                                  setIsOther(false);
                                  setShowCollegeDropdown(false);
                                }}
                                style={{
                                  padding: '10px 12px', fontSize: 13.5, cursor: 'pointer',
                                  borderBottom: '1px solid var(--bg)', color: 'var(--text-primary)',
                                  transition: 'background 100ms'
                                }}
                                onMouseEnter={e => e.currentTarget.style.background = 'var(--bg)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'none'}
                              >
                                {c}
                              </div>
                            ))
                          ) : (
                            <div style={{ padding: '10px 12px', fontSize: 13, color: 'var(--text-muted)' }}>
                              No matching colleges found.
                            </div>
                          )}
                          
                          {/* "Other (not listed)" option */}
                          <div
                            onClick={() => {
                              setCollege('');
                              setCollegeSearch('Other (not listed)');
                              setIsOther(true);
                              setShowCollegeDropdown(false);
                            }}
                            style={{
                              padding: '10px 12px', fontSize: 13.5, cursor: 'pointer',
                              color: '#6366f1', fontWeight: 600,
                              background: 'rgba(99,102,241,0.04)',
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(99,102,241,0.08)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(99,102,241,0.04)'}
                          >
                            ➕ Other (not listed)
                          </div>
                        </div>
                      </>
                    )}

                    {/* Custom College Input Box */}
                    {isOther && (
                      <div style={{ marginTop: 10 }}>
                        <label style={{ fontSize: 11.5, fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: 4 }}>
                          Enter College Name *
                        </label>
                        <input
                          style={inp}
                          type="text"
                          placeholder="Type your college name..."
                          value={customCollege}
                          onChange={e => setCustomCollege(e.target.value)}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 28 }}>
                <button
                  onClick={() => setStep(1)}
                  style={{
                    padding: '12px 20px', borderRadius: 10, border: '1px solid var(--border)',
                    background: '#fff', color: 'var(--text-primary)', fontSize: 14, fontWeight: 600,
                    cursor: 'pointer',
                  }}>
                  Back
                </button>
                <button
                  style={{
                    flex: 1, padding: '12px',
                    background: canStep2 ? 'linear-gradient(135deg,#6366f1,#8b5cf6)' : 'var(--border)',
                    color: canStep2 ? '#fff' : 'var(--text-muted)',
                    border: 'none', borderRadius: 10, fontSize: 14.5, fontWeight: 700,
                    cursor: canStep2 && !loading ? 'pointer' : 'not-allowed', transition: 'all 150ms',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  }}
                  disabled={!canStep2 || loading}
                  onClick={handleFinish}
                >
                  {loading ? 'Setting up…' : (
                    <>
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>check_circle</span>
                      Complete Setup
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
