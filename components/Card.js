import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div>
    <div>
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image alt={title} src={imgSrc} width={544} height={306} />
          </Link>
        ) : (
          <Image alt={title} src={imgSrc} width={544} height={306} />
        ))}
      <div>
        <h2>
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p>{description}</p>
        {href && (
          <Link href={href} aria-label={`Link to ${title}`}>
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
