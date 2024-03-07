import logo from '@/assets/images/logo.png'
import logo_light from '@/assets/images/logo_light.png'
import Image from 'next/image'

const ADCLogo = ({ width, height, isDarkMode }) => {
  if (isDarkMode) {
    return (
      <Image
        src={logo_light}
        alt="Winners"
        style={{ width: width || 66, height: height || 18 }}
      />
    )
  }

  return (
    <Image
      src={logo}
      alt="Winners"
      style={{ width: width || 66, height: height || 18 }}
    />
  )
}

export default ADCLogo
