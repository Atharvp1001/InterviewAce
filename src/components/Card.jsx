export default function Card({ children, className = '', hoverable = false }) {
  const baseStyles = hoverable ? 'card-hover' : 'card'
  return <div className={`${baseStyles} ${className}`}>{children}</div>
}
