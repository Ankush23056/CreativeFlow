import { Fragment } from 'react'

const METRICS = [
  { value: '4,200+', label: 'Agencies worldwide' },
  { value: '12M+',   label: 'Tasks automated' },
  { value: '98%',    label: 'Client satisfaction' },
  { value: '3.8×',   label: 'Faster delivery' },
  { value: '$1.2B',  label: 'Revenue managed' },
]

export default function MetricsStrip() {
  return (
    <div className="metrics-strip" aria-label="Key metrics">
      <div className="container">
        <div className="metrics-strip__inner" role="list">
          {METRICS.map((m, i) => (
            <Fragment key={m.label}>
              <div
                className="metric-item reveal"
                role="listitem"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <span className="metric-item__value">{m.value}</span>
                <span className="metric-item__label">{m.label}</span>
              </div>
              {i < METRICS.length - 1 && (
                <div className="metric-divider" aria-hidden="true" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
