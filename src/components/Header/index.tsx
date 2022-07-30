import { Button, Flex, Icon, Image, useBreakpointValue } from '@chakra-ui/react'
import InputSearch from './Input'
import MenuHeader from './MenuHeader'
import { RiMenuLine } from 'react-icons/ri'
import { ReactDimmer } from 'react-dimmer'
import { useState } from 'react'
import MenuMobile from '../Menu/MenuMobile'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setMenu] = useState(false)

  const isWide = useBreakpointValue({
    base: false,
    lg: true
  })

  const handleMenu = () => {
    setMenu((prevState) => !prevState)
    console.log(isMenuOpen)
  }

  return (
    <Flex w="100%" bg="white" justify="center" position="fixed" zIndex={200}>
      <Flex
        align="center"
        justify="space-between"
        w="100%"
        maxW="1680px"
        h="5rem"
        px={4}
      >
        {!isWide && (
          <Button onClick={handleMenu} zIndex={202}>
            <Icon as={RiMenuLine} w={6} h={6} />
          </Button>
        )}
        <Link href={'/'}>
          <Image
            cursor="pointer"
            src="./images/theme/logo.png"
            h="80%"
            mx={6}
          />
        </Link>
        {isWide && <InputSearch />}
        <MenuHeader />
      </Flex>

      <MenuMobile isMenuOpen={isMenuOpen} />
      <ReactDimmer
        isOpen={isMenuOpen}
        exitDimmer={setMenu}
        zIndex={100}
        blur={1.5}
      />
    </Flex>
  )
}
