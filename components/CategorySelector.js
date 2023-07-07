import styles from '@/styles/components/categorySelector.module.scss'

const categories = [
  {
    value: 'PROGRAMMING',
    name: 'PROGRAMMING',
  },
  {
    value: 'GRAPHIC_DESIGN',
    name: 'GRAPHIC DESIGN',
  },
  {
    value: 'CGI',
    name: 'CGI',
  },
  {
    value: 'CRAFT',
    name: 'CRAFT',
  },
]

export default function CategorySelector() {
  return (
    <div className={styles.catSelector}>
      <span className={styles.catSelectorIn}>IN</span>
      <div className={styles.catSelectorVDivider}></div>
      <select className={styles.catSelectorSelect}>
        {categories.map((c) => (
          <>
            <div
              className={
                c.value === 'PROGRAMMING'
                  ? `${styles.dot} ${styles.PROGRAMMING}`
                  : c.value === 'CGI'
                  ? `${styles.dot} ${styles.CGI}`
                  : c.value === 'GRAPHIC_DESIGN'
                  ? `${styles.dot} ${styles.GRAPHIC_DESIGN}`
                  : c.value === 'CRAFT'
                  ? `${styles.dot} ${styles.CRAFT}`
                  : styles.dot
              }
            >
              ok
            </div>
            <option key={c.value}>{c.name}</option>
          </>
        ))}
      </select>
    </div>
  )
}
