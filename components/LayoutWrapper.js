import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './Dropdown'
import ThemeSwitch from './ThemeSwitch'
import styles from '@/styles/layouts/layoutWrapper.module.scss'
import BlueLogo from '@/media/icons/logoBlue.svg'
import Dropdown from './Dropdown'

const LayoutWrapper = ({ children }) => (
  <div className={styles.ctn}>
    <SectionContainer>
      <header className={styles.header}>
        <div className={styles.logoAndMenus}>
          <Link href="/" aria-label={siteMetadata.headerTitle} className={styles.logoLink}>
            <BlueLogo width={50} />
            <p className={styles.logoTxt}>Maxime Lbv</p>
          </Link>
          <div className={styles.verticalDivider}></div>

          {headerNavLinks.map((link) => (
            <Link className={styles.menuLink} key={link.title} href={link.href}>
              {link.title}
            </Link>
          ))}
        </div>

        <div className={styles.buttons}>
          <ThemeSwitch />
          <Dropdown />
        </div>
      </header>
    </SectionContainer>

    <div className={styles.contentCtn}>
      <SectionContainer className={styles.content}>{children}</SectionContainer>
    </div>

    <SectionContainer>
      <Footer />
    </SectionContainer>
  </div>
)

export default LayoutWrapper
