import Image from 'next/image'

const MarqueeChildren = ({ content }) => {
  if (Array.isArray(content)) {
    return (
      <div className="flex items-center gap-2">
        {content.map((item, i) => (
          <MarqueeChildren key={i} content={item} />
        ))}
      </div>
    )
  }

  if (content.img) {
    return (
      <Image
        src={content.img}
        alt="Img"
        width={10}
        height={10}
        className={content.single ? 'w-28 h-28 ml-6 mr-6' : 'w-28 h-28'}
      />
    )
  }

  return <div>{content}</div>
}

export default MarqueeChildren
