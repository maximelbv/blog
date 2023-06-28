import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/layouts/listLayout.module.scss'
import SearchIcon from '@/media/icons/search.svg'
import Placeholder from '../public/static/images/thumbnails/placeholder.svg'

export default function ListLayout({ posts, title, initialDisplayPosts = [], isTagPage }) {
  const [tagValue, setTagValue] = useState('')
  const [searchInputValue, setSearchInputValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    setSearchValue(tagValue + searchInputValue)
    console.log('--------------------------')
    console.log('tagValue : ', tagValue)
    console.log('searchInputValue : ', searchInputValue)
    console.log('searchValue : ', searchValue)
  }, [searchInputValue, tagValue])

  const tags = []
  posts.forEach((p) => {
    p.tags.forEach((t) => {
      !tags.includes(t) && tags.push({ value: t, isSelected: false })
      // !tags.some(`${t.value}`) && tags.push({ value: t, isSelected: false })
    })
  })

  const [isTagSelected, setIsTagSelected] = useState(tags)

  const filteredBlogPosts = posts.filter((p) => {
    const searchContent = p.tags.join(' ') + ' ' + p.title + ' '
    const keywords = searchContent.toLowerCase().split(' ')

    let bool
    if (
      searchValue
        .toLowerCase()
        .split(' ')
        .every((w) => keywords.includes(w.toLowerCase()))
    ) {
      bool = true
    }
    return bool
    // return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })
  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  const handleSelected = (tag, i) => {
    isTagSelected[i].isSelected = !isTagSelected[i].isSelected
    if (isTagSelected[i].isSelected) {
      setTagValue(tagValue + tag.value + ' ')
    } else if (!isTagSelected[i].isSelected) {
      setTagValue(tagValue.replace(`${tag.value} `, ''))
      setSearchValue(searchValue.replace(`${tag.value} `, ''))
    }
  }

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
              onChange={(e) => setSearchInputValue(e.target.value)}
              placeholder="Search posts"
            />
            <div className={styles.categorySearchCtn}></div>
          </div>
        </div>
      </div>
      {isTagPage ? (
        ''
      ) : (
        <div className={styles.tagsCtn}>
          {tags.map((t, i) => (
            <span
              onClick={() => {
                handleSelected(t, i)
              }}
              className={styles.tag}
              key={t.value}
            >
              {t.value}
            </span>
          ))}
        </div>
      )}
      {/* <Select isMulti name="tags" options={tagsList} className={styles.tagSelector} /> */}
      <div className={styles.divider}></div>
      <ul className={styles.list}>
        {!displayPosts.length && <p className={styles.noPostsFound}>'No posts found.'</p>}
        {displayPosts.map((frontMatter) => {
          const { slug, title, tags, preview } = frontMatter
          return (
            <li key={slug}>
              <article className={styles.item}>
                <Link href={`/posts/${slug}`} className={styles.itemBanner}>
                  {preview ? (
                    <Image
                      className={styles.itemBannerPic}
                      src={preview}
                      alt="preview image"
                      width="100vw"
                      height="60px"
                      layout="responsive"
                      objectFit="cover"
                    />
                  ) : (
                    <Placeholder />
                  )}
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
