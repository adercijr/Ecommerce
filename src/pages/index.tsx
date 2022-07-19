import {
  Button,
  Flex,
  Input,
  Show,
  useBreakpointValue,
  VStack
} from '@chakra-ui/react'
import { useState } from 'react'
import BannerHome from '../components/BannerHome'
import Header from '../components/Header'
import Menu from '../components/Menu'

export default function Home() {
  const [whell, setWhell] = useState(true)

  const isWide = useBreakpointValue({
    base: false,
    md: true
  })

  function whelling(e) {
    if (e > 0) {
      setWhell(false)
    } else {
      setWhell(true)
    }
  }

  return (
    <Flex
      h="100vh"
      m="auto"
      direction="column"
      align="center"
      onWheel={(e) => whelling(e.deltaY)}
    >
      <Header />
      <VStack w="100%" gap={4}>
        <Menu hide={whell} />
        <BannerHome />
        <BannerHome />
        <BannerHome />
      </VStack>
    </Flex>
  )
}
