import styles from '@/styles/components/postsComponents/inlineContainer.module.scss'

export default function InlineContainer({ children }) {
  return (
    <div
      className={styles.ctn}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      {children}
    </div>
  )
}
