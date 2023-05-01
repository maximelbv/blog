import headerNavLinks from '@/data/headerNavLinks'
import styles from '@/styles/components/dropdown.module.scss'
import { useState } from 'react'

export default function Dropdown() {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <button className={styles.button} onClick={() => setIsActive(!isActive)}>
        <div className={`${styles.navTrigger} ${isActive ? styles.active : ''}`}>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </button>
      <div className={`${styles.menu} ${isActive ? styles.open : styles.close}`}></div>
    </>
  )
}
