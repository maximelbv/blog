import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Socials from '@/components/Socials'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div>
        <div>
          <h1>About</h1>
        </div>
        <div>
          <div>
            <Image src={avatar} alt="avatar" width="192px" height="192px" />
            <h3>{name}</h3>
            <div>{occupation}</div>
            <div>{company}</div>
            <Socials />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  )
}
