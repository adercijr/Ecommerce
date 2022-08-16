import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import Data from './Items.json'
import MenuItems from './MenuItems'

export default function Menu() {
  const [overflowMenuHover, setOverflowMenuHover] = useState(false)
  const transitionValue = '0.5s'

  function handleOverflow(hide) {
    if (hide) {
      setOverflowMenuHover(true)
    } else {
      setTimeout(() => setOverflowMenuHover(false), 400)
    }
  }

  return (
    <Flex
      width="100%"
      maxWidth="450px"
      height="52px"
      justify="center"
      mt="0rem"
      mb="0rem"
    >
      {Data.map((items) => {
        return <MenuItems key={items.id} data={items} />
      })}
    </Flex>
  )
}
