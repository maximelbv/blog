import { useRouter } from 'next/router'
import ArrowBack from '@/media/icons/arrowBack.svg'
import styles from '@/styles/components/goBackButton.module.scss'

export default function ReturnButton() {
  const router = useRouter()
  return (
    <button className={styles.btn} onClick={() => router.back()}>
      <ArrowBack />
    </button>
  )
}
