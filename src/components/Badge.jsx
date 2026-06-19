export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'badge',
    success: 'badge-success',
    warning: 'badge-warning',
    error: 'badge-error',
  }

  return <span className={`${variants[variant]} ${className}`}>{children}</span>
}
