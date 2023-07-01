import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './Dropdown'
import ThemeSwitch from './ThemeSwitch'
import styles from '@/styles/layouts/layoutWrapper.module.scss'
import Logo from '@/media/icons/logo.svg'
import Dropdown from './Dropdown'
import Divider from './postsComponents/Divider'

const debounce = (fn) => {
  let frame

  return (...params) => {
    if (frame) {
      cancelAnimationFrame(frame)
    }
    frame = requestAnimationFrame(() => {
      fn(...params)
    })
  }
}

const storeScroll = () => {
  if (process.browser) {
    document.documentElement.dataset.scroll = window.scrollY
  }
}

// Listen for new scroll events, here we debounce our `storeScroll` function
if (process.browser) {
  document.addEventListener('scroll', debounce(storeScroll), { passive: true })
}

// Update scroll position for first time
storeScroll()

const LayoutWrapper = ({ children }) => (
  <div className={styles.ctn}>
    <SectionContainer>
      <header className={styles.header}>
        <div className={styles.headerCtn}>
          <div className={styles.logoAndMenus}>
            <Link href="/" aria-label={siteMetadata.headerTitle} className={styles.logoLink}>
              <Logo width={50} className={styles.logoSvg} />
              <p className={styles.logoTxt}>Maxime Lbv</p>
            </Link>
            {!children.props.post && <div className={styles.verticalDivider}></div>}

            {children.props.post ? (
              <>
                <div className={styles.vDividerPost}></div>
                <h2 className={styles.headerPostTitle}>{children.props.post.frontMatter.title}</h2>
              </>
            ) : (
              headerNavLinks.map((link) => (
                <Link className={styles.menuLinkScroll} key={link.title} href={link.href}>
                  {link.title}
                </Link>
              ))
            )}

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
