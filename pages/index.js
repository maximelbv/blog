import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('posts')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <h1>Posts</h1>
      </div>
      <ul>
        {!posts.length && 'No posts found.'}
        {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
          const { slug, date, title, summary, tags } = frontMatter
          return (
            <li key={slug}>
              <article>
                <div>
                  <div>
                    <div>
                      <div>
                        <h2>
                          <Link href={`/posts/${slug}`}>{title}</Link>
                        </h2>
                        <div>
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                      <div>{summary}</div>
                    </div>
                    <div>
                      <Link href={`/posts/${slug}`} aria-label={`Read "${title}"`}>
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
      {posts.length > MAX_DISPLAY && (
        <div>
          <Link href="/posts" aria-label="all posts">
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div>
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
