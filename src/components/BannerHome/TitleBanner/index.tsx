import { Flex, Text } from '@chakra-ui/react'
import ButtonBanner from './ButtonBanner'

type TitleBannerProps = {
  description?: string
  link: string
  size: string
}

export default function TitleBanner({
  description,
  link,
  size
}: TitleBannerProps) {
  return (
    <Flex
      align="center"
      direction="column"
      backdropFilter="auto"
      backdropBlur="4px"
      backdropContrast="50%"
    >
      <Text
        fontSize={size === 'small' ? '2rem' : '4rem'}
        fontWeight={500}
        fontFamily={size === 'small' ? '' : 'cookie'}
      >
        {link}'s fashions
      </Text>
      {description && (
        <Text pb={2} fontWeight={400}>
          {description}
        </Text>
      )}
      <ButtonBanner link={link} />
    </Flex>
  )
}
