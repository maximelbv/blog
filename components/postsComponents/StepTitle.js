export default function StepTitle({ cat, step, children }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
      }}
    >
      <div
        style={{
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
          lineHeight: '40px',
          width: 'calc(100% - 50px)',
          marginTop: '5px',
        }}
      >
        {children}
      </h2>
    </div>
  )
}
