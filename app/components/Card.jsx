import Image from 'next/image'
import no_image_found from '@/assets/images/bildschirmfoto.png'
import Button from './Button'

const Card = ({
  title,
  headline,
  description,
  imageUrl,
  buttonText,
  onButtonClick,
  size,
  width,
  covered,
  componentStyle,
  btnHeight,
  primaryBtn,
  btnBgColor,
  btnTextColor,
  imageCard = true,
  btnWidth,
}) => {
  const large = size === 'large' && !covered
  const coverCardAddedStyles = covered
    ? 'bg-[#EAEAEA] w-[295px] rounded-xl p-8 justify-between'
    : ''

  return (
    <div
      style={{ width, componentStyle }}
      className={'flex flex-col gap-5 min-h-[26rem] ' + coverCardAddedStyles}
    >
      <div className="flex justify-between">
        {headline ? <div className="text-[12px]">{headline}</div> : null}
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
        {title ? (
          <div
            className={
              covered ? 'text-[26px]' : large ? 'text-[55px]' : 'text-[30px]'
            }
          >
            {title}
          </div>
        ) : null}
        {description ? (
          <div className={large ? 'text-[26px]' : 'text-[15px]'}>
            {description}
          </div>
        ) : null}
        {buttonText ? (
          <Button
            onButtonClick={onButtonClick}
            width={btnWidth || 130}
            height={btnHeight}
            primaryBtn={primaryBtn}
            bgColor={btnBgColor}
            textColor={btnTextColor}
          >
            {buttonText}
          </Button>
        ) : null}
      </div>
    </div>
  )
}

export default Card
