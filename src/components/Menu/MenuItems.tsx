import { Button, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import MenuHover from './MenuHover'

export default function MenuItems({ nav }) {
  const [hover, setHover] = useState(null)

  function handleHover(e) {
    setHover(e.id)
    console.log(hover)
  }
  return (
    <Flex
      key={nav.id}
      justify="center"
      align="center"
      onMouseEnter={() => handleHover(nav)}
      onMouseLeave={() => setHover(null)}
    >
      <Button
        fontSize="0.95rem"
        variant="unstyled"
        height="100%"
        padding={2}
        mx={4}
        borderRadius="0"
        border="2px"
        borderColor="transparent"
        _hover={{
          borderBottom: '2px'
        }}
        textTransform="uppercase"
        fontWeight={600}
        color={nav.name === 'Sale' ? 'red.600' : 'black'}
      >
        {nav.name}
      </Button>

      {hover === nav.id && <MenuHover data={nav} />}
    </Flex>
  )
}
