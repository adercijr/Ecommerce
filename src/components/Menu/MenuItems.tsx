import { Text, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'
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
  hide: boolean
}

export default function MenuItems({ data, hide }: MenuItemsProps) {
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
  }
  return (
    <Flex
      key={data.id}
      justify="center"
      align="center"
      onMouseEnter={() => handleHover(data)}
      onMouseLeave={() => setHover(null)}
    >
      <Link href={data.name != 'Home' ? data.name : '/'} passHref>
        <Flex
          bg="white"
          direction="column"
          cursor="pointer"
          fontSize="0.95rem"
          paddingRight={3}
          paddingLeft={3}
          paddingTop="5px"
          mx={2}
          textTransform="uppercase"
          fontWeight={600}
          color={data.name === 'Sale' ? 'cyan.600' : 'black'}
          align="center"
        >
          <Text>{data.name}</Text>

          <Flex
            w={
              isCurrentPath(data.name) && !hover
                ? '120%'
                : hover
                ? '120%'
                : '0%'
            }
            h="2px"
            mt="10px"
            bg={
              hover
                ? 'cyan.400'
                : '' || isCurrentPath(data.name)
                ? 'cyan.400'
                : ''
            }
            transition="all 0.5s"
          ></Flex>
        </Flex>
      </Link>

      {hover === data.id && <MenuHover data={data} hide={hide} />}
    </Flex>
  )
}
