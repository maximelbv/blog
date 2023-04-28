import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title={`Page Not Found - ${siteMetadata.title}`} />
      <div>
        <div>
          <h1>404</h1>
        </div>
        <div>
          <p>Sorry we couldn't find this page.</p>
          <p>But dont worry, you can find plenty of other things on our homepage.</p>
          <Link href="/">
            <button>Back to homepage</button>
          </Link>
        </div>
      </div>
    </>
  )
}
