import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import styles from '@/styles/layouts/layoutWrapper.module.scss'
import BlueLogo from '@/media/icons/logoBlue.svg'

const LayoutWrapper = ({ children }) => (
  <SectionContainer>
    <header className={styles.header}>
      <div className={styles.logoAndMenus}>
        <Link href="/" aria-label={siteMetadata.headerTitle} className={styles.logoLink}>
          <BlueLogo width={40} />
        </Link>
        <div className={styles.verticalDivider}></div>

        {headerNavLinks.map((link) => (
          <Link className={styles.menuLink} key={link.title} href={link.href}>
            {link.icon}
            {link.title}
          </Link>
        ))}
      </div>

      <div className={styles.buttons}>
        <ThemeSwitch />
        {/* <MobileNav /> */}
      </div>
    </header>
    <main>{children}</main>
    <Footer />
  </SectionContainer>
)

export default LayoutWrapper
