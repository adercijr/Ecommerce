import {
  AccordionButton,
  AccordionItem,
  Box,
  Text,
  AccordionIcon,
  AccordionPanel,
  Flex
} from '@chakra-ui/react'
import { useFilters } from '../../../providers/Filters'
import CheckboxMenuAside from './Checkbox'

type ItemProps = {
  value: {
    id: number
    name: string
    value: string[]
  }
}

export default function Item({ value: values }: ItemProps) {
  const { brand, activity, style, category } = useFilters()

  const Active = () => {
    switch (values.name) {
      case 'brand':
        return brand.map((item) => (
          <Text key={item} fontSize="0.7rem" mt={1} mr={2}>
            {item}
          </Text>
        ))
      case 'category':
        return category.map((item) => (
          <Text key={item} fontSize="0.7rem" mt={1} mr={2}>
            {item}
          </Text>
        ))
      case 'style':
        return style.map((item) => (
          <Text key={item} fontSize="0.7rem" mt={1} mr={2}>
            {item}
          </Text>
        ))
      case 'activity':
        return activity.map((item) => (
          <Text key={item} fontSize="0.7rem" mt={1} mr={2}>
            {item}
          </Text>
        ))
    }
  }

  return (
    <AccordionItem p={5} borderBottom="0px" borderBottomColor="gray.300">
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text
                  fontSize="0.9rem"
                  fontWeight={700}
                  textTransform="capitalize"
                >
                  {values.name}
                </Text>
                {!isExpanded && <Flex>{Active()}</Flex>}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {values.value.map((item) => (
              <CheckboxMenuAside data={item} value={values.name} key={item} />
            ))}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  )
}
