import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import Data from './Items.json'
import MenuItems from './MenuItems'

export default function Menu({ hide }) {
  const [overflowMenuHover, setOverflowMenuHover] = useState(false)
  const transitionValue = '0.5s'

  function handleOverflow(hide) {
    if (hide) {
      setOverflowMenuHover(true)
    } else {
      setTimeout(() => setOverflowMenuHover(false), 400)
    }
  }

  useEffect(() => {
    handleOverflow(hide)
  }, [hide])

  return (
    <Flex
      width="100%"
      height={hide ? '0px' : '52px'}
      justify="center"
      mt="0rem"
      mb="0rem"
      bg="white"
      position="fixed"
      zIndex={201}
      overflow={overflowMenuHover || hide ? 'hidden' : ''}
      transition={`height ${transitionValue}`}
    >
      <Flex
        w="100%"
        maxW="1680px"
        position="relative"
        justify="center"
        m="auto"
      >
        {Data.map((items) => {
          return <MenuItems key={items.id} data={items} hide={hide} />
        })}
      </Flex>
    </Flex>
  )
}
