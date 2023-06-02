import Link from 'next/link'
import TailessArrow from '@/media/icons/tailessArrow.svg'
import styles from '@/styles/components/breadcrumb.module.scss'

export default function Breadcrumb({ crumbs }) {
  const breadcrumb = crumbs.map((c) => {
    let crumb
    if (crumbs.length - 1 != crumbs.lastIndexOf(c)) {
      crumb = (
        <>
          <Link key={c.name} href={c.link}>
            {c.name}
          </Link>
          <TailessArrow key={c.name} width={10} />
        </>
      )
    } else {
      crumb = <Link href={c.link}>{c.name}</Link>
    }
    return crumb
  })
  return <div className={styles.ctn}>{breadcrumb}</div>
}
