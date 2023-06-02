import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { date, title } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/posts/${frontMatter.slug}`} {...frontMatter} />
      <article>
        <div>
          <header>
            <div>
              <dl>
                <div>
                  <dt>Published on</dt>
                  <dd>
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div style={{ gridTemplateRows: 'auto 1fr' }}>
            <div>
              <div>{children}</div>
            </div>
            <footer>
              <div>
                {prev && (
                  <div>
                    <Link href={`/posts/${prev.slug}`}>&larr; {prev.title}</Link>
                  </div>
                )}
                {next && (
                  <div>
                    <Link href={`/posts/${next.slug}`}>{next.title} &rarr;</Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
