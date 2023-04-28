import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

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
            <div>
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  )
}
