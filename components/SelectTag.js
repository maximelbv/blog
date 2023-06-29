import { useState } from 'react'
import styles from '@/styles/components/selectTag.module.scss'

export default function SelectTag({ name }) {
  const [clicked, setClicked] = useState(false)
  console.log(clicked)
  return (
    <span
      className={clicked ? `${styles.tag} ${styles.tagSelected}` : `${styles.tag}`}
      onClick={() => setClicked((current) => !current)}
    >
      {name}
    </span>
  )
}
