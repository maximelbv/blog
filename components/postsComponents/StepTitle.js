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
          width: '50px !important',
          height: `50px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '5px',
          fontSize: '36px',
          fontWeight: 'bolder',
          background: `var(--${cat}Gradient)`,
          marginRight: '18px',
        }}
      >
        {step}
      </div>
      <h2
        style={{
          fontSize: '34px',
          lineHeight: '50px',
          textIndent: '65px',
        }}
      >
        {children}
      </h2>
    </div>
  )
}
