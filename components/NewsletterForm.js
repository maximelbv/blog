import { useRef, useState } from 'react'

import siteMetadata from '@/data/siteMetadata'

const NewsletterForm = ({ title = 'Subscribe to the newsletter' }) => {
  const inputEl = useRef(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e) => {
    e.preventDefault()

    const res = await fetch(`/api/${siteMetadata.newsletter.provider}`, {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      setError(true)
      setMessage('Your e-mail address is invalid or you are already subscribed!')
      return
    }

    inputEl.current.value = ''
    setError(false)
    setSubscribed(true)
    setMessage('Successfully! 🎉 You are now subscribed.')
  }

  return (
    <div>
      <div>{title}</div>
      <form onSubmit={subscribe}>
        <div>
          <label htmlFor="email-input">Email address</label>
          <input
            autoComplete="email"
            id="email-input"
            name="email"
            placeholder={subscribed ? "You're subscribed !  🎉" : 'Enter your email'}
            ref={inputEl}
            required
            type="email"
            disabled={subscribed}
          />
        </div>
        <div>
          <button type="submit" disabled={subscribed}>
            {subscribed ? 'Thank you!' : 'Sign up'}
          </button>
        </div>
      </form>
      {error && <div>{message}</div>}
    </div>
  )
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <div>
    <div>
      <NewsletterForm title={title} />
    </div>
  </div>
)
