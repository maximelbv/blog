/* eslint-disable prettier/prettier */
import Instagram from '@/media/icons/instagram.svg'
import Twitter from '@/media/icons/twitter.svg'
import Github from '@/media/icons/github.svg'
import Behance from '@/media/icons/behance.svg'
import styles from '@/styles/components/Socials.module.scss'

export default function Socials() {
  return (
    <div className={styles.socials}>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/maximelbv/">
        <Instagram />
      </a>

      <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/maximelbv/">
        <Twitter />
      </a>

      <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/maximelbv/">
        <Github />
      </a>

      <a target="_blank" rel="noopener noreferrer" href="https://www.behance.com/maximelbv/">
        <Behance />
      </a>
    </div>
  )
}
