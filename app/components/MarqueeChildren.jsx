import Image from 'next/image'

const MarqueeChildren = ({ data }) => {
  if (!data?.visible) return null

  if (data?.mixedContent) {
    return (
      <div className="flex items-center gap-2">
        {data.mixedContent.map((item, i) => (
          <MarqueeChildren key={i} data={item} />
        ))}
      </div>
    )
  }

  if (data?.content) return <div>{data.content}</div>

  return (
    <Image
      src={data?.image}
      alt="Img"
      width={10}
      height={10}
      className={data?.single ? 'w-28 h-28 ml-6 mr-6' : 'w-28 h-28'}
    />
  )
}

export default MarqueeChildren
