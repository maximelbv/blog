import siteMetadata from '@/data/siteMetadata'
import Logo from '@/media/icons/logo.svg'
import styles from '@/styles/components/footer.module.scss'
import Socials from './Socials'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ctn}>
        <Socials />
        <Logo width={56} />
      </div>

      <div className={styles.copyright}>
        <div className={styles.year}>{`© ${new Date().getFullYear()}`}</div>
        <div>{siteMetadata.author}</div>
      </div>
    </footer>
  )
}
