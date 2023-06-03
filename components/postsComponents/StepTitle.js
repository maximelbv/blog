// import * as styles from '../..//styles/components/postsComponents/stepTitle.module.scss'

export default function StepTitle({ cat, step, children }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        // className={styles.step}
        style={{
          width: '50px',
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
      <h2 style={{ fontSize: '34px' }}>{children}</h2>
    </div>
  )
}
