import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import path from 'path'
import { useState } from 'react'
import MenuHover from './MenuHover'

type MenuItemsProps = {
  nav: {
    id: number
    name: string
    category:
      | {
          name: string
          subCategories: {
            img: string
          }[]
        }
      | {
          name: string
        }
  }
}

export default function MenuItems({ nav }: MenuItemsProps) {
  const [hover, setHover] = useState(null)

  const pathName = window.location.pathname
  function isCurrentPath(id) {
    if (pathName == `/${id}`) {
      return true
    } else if (pathName == '/' && id == 'Home') {
      return true
    } else {
      return false
    }
  }

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
      <Link href={nav.name != 'Home' ? nav.name : '/'}>
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
          borderBottom={isCurrentPath(nav.name) ? '2px' : ''}
          borderBottomColor={isCurrentPath(nav.name) ? 'red.400' : ''}
        >
          {nav.name}
        </Button>
      </Link>

      {hover === nav.id && <MenuHover data={nav} />}
    </Flex>
  )
}
