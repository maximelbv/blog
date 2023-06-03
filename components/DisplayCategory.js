import categories from '@/data/categories'
import styles from '@/styles/components/displayCategory.module.scss'

export default function DisplayCategory({ cat, color }) {
  return (
    <div className={styles.ctn}>
      <div className={styles.dot} style={{ background: `${color} !important` }}></div>
      <p className={styles.name}>{cat}</p>
    </div>
  )
}
