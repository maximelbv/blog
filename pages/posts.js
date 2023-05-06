import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('posts')

  return { props: { posts } }
}

export default function Blog({ posts, initialDisplayPosts }) {
  return (
    <>
      <PageSEO title={`Posts - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayout posts={posts} initialDisplayPosts={initialDisplayPosts} title="Posts" />
    </>
  )
}
