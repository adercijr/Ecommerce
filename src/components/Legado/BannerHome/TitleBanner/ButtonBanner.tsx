import { Button } from '@chakra-ui/react'
import Link from 'next/link'

type ButtonBannerProps = {
  link: string
}

export default function ButtonBanner({ link }: ButtonBannerProps) {
  return (
    <Link href={link}>
      <Button
        variant="unstyled"
        borderBottom="2px"
        borderBottomColor="red.700"
        borderRadius={0}
        mb={2}
        textShadow={' 0px 0px 100px #bbb'}
        fontSize="1.5rem"
      >
        Shop Now
      </Button>
    </Link>
  )
}
