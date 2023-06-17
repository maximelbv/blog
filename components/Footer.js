import siteMetadata from '@/data/siteMetadata'
import Logo from '@/media/icons/logo.svg'
import styles from '@/styles/components/footer.module.scss'
import Socials from './Socials'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ctn}>
        <Socials />
        <Link href="/" passHref>
          <Logo width={56} className={styles.logo} />
        </Link>
      </div>

      <div className={styles.copyright}>
        <div className={styles.year}>{`© ${new Date().getFullYear()}`}</div>
        <div>{siteMetadata.author}</div>
      </div>
    </footer>
  )
}
