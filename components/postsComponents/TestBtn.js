import categories from '@/data/categories'

export default function TestBtn({ label }) {
  let color
  categories.map((c) => {
    if (c.name === label) {
      color = c.gradientColor
    }
  })
  console.log(color)
  return <button style={{ background: `${color} !important`, border: 'none' }}> {label} </button>
}
