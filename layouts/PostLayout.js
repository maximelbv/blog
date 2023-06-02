import Breadcrumb from '@/components/Breadcrumb'
import PageTitle from '@/components/PageTitle'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import styles from '@/styles/layouts/postLayout.module.scss'

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails }) {
  const { slug, fileName, date, title, images, tags, categories } = frontMatter

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
          {/* <time dateTime={date}>
            {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
          </time> */}
          <h1>{title}</h1>
        </header>
        <main className={styles.content}></main>
        <footer className={styles.footer}></footer>
      </article>
    </>
  )
}
