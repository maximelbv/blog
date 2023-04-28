import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a>{text.split(' ').join('-')}</a>
    </Link>
  )
}

export default Tag
