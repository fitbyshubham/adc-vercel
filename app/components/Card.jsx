import Image from 'next/image'
import no_image_found from '@/assets/images/bildschirmfoto.png'
import Button from './Button'

const Card = ({
  title,
  date,
  content,
  imageUrl,
  buttonText,
  onButtonClick,
  size,
  covered,
  componentStyle,
  btnHeight,
  primaryBtn,
  btnBgColor,
  btnTextColor,
  imageCard = true,
}) => {
  const large = size === 'large' && !covered
  const coverCardAddedStyles = covered
    ? 'bg-[#EAEAEA] w-[295px] rounded-xl p-8 justify-between'
    : ''

  return (
    <div
      style={componentStyle}
      className={'flex flex-col gap-5 min-h-[26rem] ' + coverCardAddedStyles}
    >
      <div className="flex justify-between">
        {date ? <div className="text-[12px]">{date}</div> : null}
        {imageCard ? (
          <Image
            src={imageUrl || no_image_found}
            alt="Card img"
            width={100}
            height={100}
            className={
              covered ? 'w-[105px] pb-12' : large ? 'w-[400px]' : 'w-[200px]'
            }
          />
        ) : null}
      </div>
      <div className="flex flex-col gap-5">
        <div
          className={
            covered ? 'text-[26px]' : large ? 'text-[55px]' : 'text-[30px]'
          }
        >
          {title}
        </div>
        {content ? (
          <div className={large ? 'text-[26px]' : 'text-[15px]'}>{content}</div>
        ) : null}
        <Button
          onButtonClick={onButtonClick}
          width={130}
          height={btnHeight}
          primaryBtn={primaryBtn}
          bgColor={btnBgColor}
          textColor={btnTextColor}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default Card
