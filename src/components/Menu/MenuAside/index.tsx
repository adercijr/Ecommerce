import { Accordion, Flex, Icon, Text, VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { BsBackspace } from 'react-icons/bs'
import { useFilters } from '../../../providers/Filters'
import Item from './Item'

export default function MenuAside() {
  const {
    setFilterdData,
    data,
    filteredStructure,
    brand,
    category,
    style,
    activity,
    setBrand,
    setCategory,
    setStyle,
    setActivity
  } = useFilters()

  const handleClear = () => {
    setFilterdData(data)
    setBrand([]), setCategory([]), setStyle([]), setActivity([])
  }
  return (
    <VStack w="100%">
      {brand.length | category.length | style.length | activity.length && (
        <Flex pt={2} align="center" gap={3}>
          <Icon as={BsBackspace} w={'0.9rem'} h={'0.9rem'} />
          <Text
            as="button"
            onClick={handleClear}
            textDecoration="underline"
            fontSize="0.9rem"
          >
            Clear all filters
          </Text>
        </Flex>
      )}

      <Accordion allowMultiple w="100%">
        {filteredStructure.map((i) => (
          <Item key={i.id} value={i} />
        ))}
      </Accordion>
    </VStack>
  )
}
