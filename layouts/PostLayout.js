import Breadcrumb from '@/components/Breadcrumb'
import DisplayCategory from '@/components/DisplayCategory'
import PageTitle from '@/components/PageTitle'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import styles from '@/styles/layouts/postLayout.module.scss'
import categories from '@/data/categories'
import Divider from '@/components/postsComponents/Divider'

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, children }) {
  const { slug, fileName, date, title, images, tags, categories, color } = frontMatter

  const breadcrumbs = [
    {
      name: 'Maximelbv.com',
      link: '/',
    },
    {
      name: 'Posts',
      link: '/posts',
    },
    // {
    //   name: `${categories}`,
    //   link: `/posts/${slug}`,
    // },
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
            <div
              className={styles.catAndDateDot}
              style={{ background: `${color} !important` }}
            ></div>
            <p>{categories[0]}</p>
            <div className={styles.catAndDateDivider}></div>
            <p className={styles.catAndDateDate}>
              Last updated:{' '}
              {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
            </p>
          </div>

          <h1 className={styles.title}>{title}</h1>
          <div className={styles.tags}>
            {tags.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <Divider />
        </header>
        <main className={styles.content}>{children}</main>
        <footer className={styles.footer}></footer>
      </article>
    </>
  )
}
