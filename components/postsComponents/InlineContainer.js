export default function InlineContainer({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      {children}
    </div>
  )
}
