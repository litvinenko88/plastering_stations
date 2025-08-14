'use client'
export default function LazyImage({ src, alt, className, style, ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
      {...props}
    />
  )
}