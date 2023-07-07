import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/layouts/listLayout.module.scss'
import SearchIcon from '@/media/icons/search.svg'
import SelectTag from '@/components/SelectTag'
import CategorySelector from '@/components/CategorySelector'

export default function ListLayout({ posts, title, initialDisplayPosts = [], isTagPage }) {
  const [tags, setTags] = useState([])
  const [tagValue, setTagValue] = useState('')
  const [searchInputValue, setSearchInputValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    setSearchValue(tagValue + searchInputValue)
  }, [searchInputValue, tagValue])

  function alreadyExists(tag) {
    return tags.some((t) => {
      return t.value === tag
    })
  }

  posts.forEach((p) => {
    p.tags.forEach((t) => {
      !alreadyExists(t) && tags.push({ value: t, isSelected: false })
    })
  })
  function contains(text_one, text_two) {
    if (text_one.indexOf(text_two) != -1) {
      return true
    }
  }

  const filteredBlogPosts = posts.filter((p) => {
    const searchContent = p.tags.join(' ') + ' ' + p.title + ' '
    const keywords = searchContent.toLowerCase().split(' ')
    return searchValue
      .toLowerCase()
      .split(' ')
      .every((w) => keywords.includes(w.toLowerCase()))
    // return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  const handleSelected = (tag, i) => {
    tags[i].isSelected = !tags[i].isSelected
    if (tags[i].isSelected) {
      setTagValue(tagValue + tag.value + ' ')
    } else if (!tags[i].isSelected) {
      setTagValue(tagValue.replace(`${tag.value} `, ''))
      setSearchValue(searchValue.replace(`${tag.value} `, ''))
    }
  }

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>{title}</h1>
        {/* <div className={styles.headerActions}>
          <div className={styles.searchBar}>
            <SearchIcon width={16} />
            <input
              className={styles.searchBarTextInput}
              aria-label="Search posts"
              type="text"
              onChange={(e) => setSearchInputValue(e.target.value)}
              placeholder="Search posts"
            />
            <div className={styles.categorySearchCtn}></div>
          </div>
        </div> */}
        <CategorySelector />
      </div>
      {isTagPage ? (
        ''
      ) : (
        <div className={styles.tagsCtn}>
          {tags.map((t, i) => {
            return (
              <span
                className={styles.tagCtn}
                key={t.value}
                onClick={() => {
                  handleSelected(t, i)
                }}
              >
                <SelectTag name={t.value} key={t.value} />
              </span>
            )
          })}
        </div>
      )}
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
                    <Image
                      className={styles.itemBannerPic}
                      src="/../public/static/images/thumbnails/placeholder.png"
                      alt="preview image"
                      width="100vw"
                      height="60px"
                      layout="responsive"
                      objectFit="cover"
                    />
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
