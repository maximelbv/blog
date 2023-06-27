import Breadcrumb from '@/components/Breadcrumb'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import styles from '@/styles/layouts/postLayout.module.scss'
import Divider from '@/components/postsComponents/Divider'
import Image from 'next/image'
import Tag from '@/components/Tag'

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, children }) {
  const { slug, fileName, date, title, images, tags, categories, banner } = frontMatter

  const breadcrumbs = [
    {
      name: 'Maximelbv.com',
      link: '/',
    },
    {
      name: 'Posts',
      link: '/posts',
    },
  ]

  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/posts/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <article className={styles.ctn}>
        <header className={styles.header}>
          <Breadcrumb crumbs={breadcrumbs} />
          <div className={styles.catAndDate}>
            <div className={styles.cat}>
              <div
                className={
                  categories[0] === 'PROGRAMMING'
                    ? `${styles.dot} ${styles.PROGRAMMING}`
                    : categories[0] === 'CGI'
                    ? `${styles.dot} ${styles.CGI}`
                    : categories[0] === 'GRAPHIC_DESIGN'
                    ? `${styles.dot} ${styles.GRAPHIC_DESIGN}`
                    : styles.dot
                }
              ></div>
              <p>{categories[0]}</p>
            </div>
            <div className={styles.catAndDateDivider}></div>
            <p className={styles.catAndDateDate}>
              Last updated :{' '}
              {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
            </p>
          </div>
          <div className={styles.bannerCtn}>
            {banner ? (
              <Image
                className={styles.banner}
                src={banner}
                alt="banner"
                width="100%"
                height="40px"
                layout="responsive"
                objectFit="cover"
              />
            ) : (
              ''
            )}
          </div>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.tags}>
            {tags.map((t) => (
              <Tag key={t} text={t} />
            ))}
          </div>
          <Divider />
        </header>
        <main className={styles.content}>{children}</main>
        <footer className={styles.footer}>
          <div className={styles.postedInShare}>
            <div>
              <span>POSTED IN:</span>
              <div className={styles.postedIn}>
                <div
                  className={
                    categories[0] === 'PROGRAMMING'
                      ? `${styles.dot} ${styles.PROGRAMMING}`
                      : categories[0] === 'CGI'
                      ? `${styles.dot} ${styles.CGI}`
                      : categories[0] === 'GRAPHIC_DESIGN'
                      ? `${styles.dot} ${styles.GRAPHIC_DESIGN}`
                      : styles.dot
                  }
                ></div>
                <p>{categories[0]}</p>
                <div className={styles.catAndDateDivider}></div>
                <div className={styles.tags}>
                  {tags.map((t) => (
                    <Tag key={t} text={t} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </>
  )
}
