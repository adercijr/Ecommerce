import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import path from 'path'
import { useEffect, useState } from 'react'
import MenuHover from './MenuHover'

type MenuItemsProps = {
  data:
    | {
        id: number
        name: string
        category?: undefined
      }
    | {
        id: number
        name: string
        category: (
          | {
              name: string
              subCategories: {
                img: string
              }[]
            }
          | {
              name: string
              subCategories: {
                name: string
              }[]
            }
        )[]
      }
}

export default function MenuItems({ data }: MenuItemsProps) {
  const [hover, setHover] = useState(null)

  function isCurrentPath(id): boolean {
    if (typeof window !== 'undefined') {
      const pathName = window.location.pathname
      if (pathName == `/${id}`) {
        return true
      } else if (pathName == '/' && id == 'Home') {
        return true
      } else {
        return false
      }
    }
  }

  function handleHover(e) {
    setHover(e.id)
    console.log(hover)
  }
  return (
    <Flex
      key={data.id}
      justify="center"
      align="center"
      onMouseEnter={() => handleHover(data)}
      onMouseLeave={() => setHover(null)}
    >
      <Link href={data.name != 'Home' ? data.name : '/'}>
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
          color={data.name === 'Sale' ? 'red.600' : 'black'}
          borderBottom={isCurrentPath(data.name) ? '2px' : ''}
          borderBottomColor={isCurrentPath(data.name) ? 'red.400' : ''}
        >
          {data.name}
        </Button>
      </Link>

      {hover === data.id && <MenuHover data={data} />}
    </Flex>
  )
}
