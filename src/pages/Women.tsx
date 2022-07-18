import { Flex, Input, useBreakpointValue } from '@chakra-ui/react'
import BannerHome from '../components/BannerHome'
import Header from '../components/Header'
import Menu from '../components/Menu'

export default function Women() {
  const isWide = useBreakpointValue({
    base: false,
    md: true
  })
  return (
    <Flex w="100vw" h="100vh" m="auto" direction="column" align="center">
      <Header />
      {isWide && <Menu />}
      <Flex my={4} w="100%">
        <BannerHome />
      </Flex>
    </Flex>
  )
}
