import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/layouts/listLayout.module.scss'
import SearchIcon from '@/media/icons/search.svg'

export default function ListLayout({ posts, title, initialDisplayPosts = [] }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    console.log(frontMatter.categories)
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>{title}</h1>
        <div className={styles.headerActions}>
          <div className={styles.searchBar}>
            <SearchIcon width={16} />
            <input
              aria-label="Search posts"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search posts"
            />
            <div className={styles.categorySearchCtn}></div>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <ul className={styles.list}>
        {!filteredBlogPosts.length && <p className={styles.noPostsFound}>'No posts found.'</p>}
        {displayPosts.map((frontMatter) => {
          const { slug, title, tags, preview } = frontMatter
          return (
            <li key={slug}>
              <article className={styles.item}>
                <Link href={`/posts/${slug}`} className={styles.itemBanner}>
                  <Image
                    className={styles.itemBannerPic}
                    src={preview ? preview : '/static/images/thumbnails/placeholder.png'}
                    alt="preview image"
                    width="100vw"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                  />
                </Link>

                <div className={styles.itemTags}>
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
                <h3 className={styles.itemTitle}>
                  <Link href={`/posts/${slug}`}>{title}</Link>
                </h3>
              </article>
            </li>
          )
        })}
      </ul>
    </>
  )
}
