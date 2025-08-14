export default function AboutVideo() {
  return (
    <div style={{
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
      position: 'relative',
      paddingBottom: '56.25%', // 16:9 aspect ratio
      height: 0
    }}>
      <iframe 
        src="https://rutube.ru/play/embed/47e9c5a9ee217119f65346f3990918a9/?autoStart=true&skinColor=red"
        frameBorder="0"
        allow="clipboard-write; autoplay"
        webkitAllowFullScreen
        mozallowfullscreen
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  )
}