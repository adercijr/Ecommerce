import { Button, Flex, Image } from '@chakra-ui/react'
import Data from '../Items.json'

interface MenuMobileInterface {
  isMenuOpen: boolean
}

export default function MenuMobile({ isMenuOpen }: MenuMobileInterface) {
  return (
    <Flex
      className={`app-menu ${isMenuOpen ? 'menu-open' : ''}`}
      w={['100vw', '60vw']}
      h="100vh"
      zIndex={200}
      position="fixed"
      left={0}
      top={0}
      bg="white"
      direction="column"
    >
      <Image
        src="./images/theme/logo.png"
        w={20}
        h={20}
        m={5}
        alignSelf="center"
      />

      <Flex direction="column" p={10}>
        {Data.map((cat) => (
          <Button
            variant="link"
            key={cat.id}
            p={3}
            display="flex"
            justifyContent="flex-start"
            fontSize="1.2rem"
            textTransform="uppercase"
            color={cat.name === 'Sale' ? 'cyan.600' : 'black'}
          >
            {cat.name}
          </Button>
        ))}
      </Flex>
    </Flex>
  )
}
