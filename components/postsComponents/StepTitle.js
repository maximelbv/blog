import InlineContainer from './InlineContainer'

export default function StepTitle({ cat, step, children }) {
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: `35px`,
          height: `35px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '5px',
          fontSize: '26px',
          fontWeight: 'bolder',
          background: `var(--${cat}Gradient)`,
          color: 'rgb(249, 250, 251)',
        }}
      >
        {step}
      </div>
      <h2
        style={{
          fontSize: '34px',
          lineHeight: '35px',
          textIndent: '45px',
        }}
      >
        {children}
      </h2>
    </div>
  )
}
