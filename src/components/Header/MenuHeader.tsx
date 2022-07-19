import { Flex, Icon, IconButton } from '@chakra-ui/react'
import { BsBasket2 } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import { IoLocationOutline } from 'react-icons/io5'

export default function MenuHeader() {
  return (
    <Flex>
      <IconButton
        icon={<Icon as={IoLocationOutline} w={6} h={6} />}
        aria-label="Location"
        p={4}
      />
      <IconButton
        icon={<Icon as={BiUser} w={6} h={6} />}
        aria-label="User"
        p={4}
      />
      <IconButton
        icon={<Icon as={BsBasket2} w={6} h={6} />}
        aria-label="Basket"
        p={4}
      />
    </Flex>
  )
}
