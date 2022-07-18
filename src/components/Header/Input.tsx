import { CloseIcon, SearchIcon } from '@chakra-ui/icons'
import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'
import { useState } from 'react'

export default function InputSearch() {
  const [inputValue, setInputValue] = useState('')
  return (
    <Flex
      border="1px"
      borderRadius="6px"
      borderColor="gray.300"
      maxW="500px"
      w="100%"
    >
      <InputGroup maxW="500px">
        <Input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="Search product or"
          size="sm"
          variant="unstyled"
          borderColor="gray.300"
          height="2.5rem"
          px="1rem"
          borderRadius="8px"
        />
        {inputValue && (
          <InputRightElement
            marginRight="10px"
            children={
              <IconButton
                aria-label="Search database"
                icon={<CloseIcon />}
                size="xs"
                onClick={() => setInputValue('')}
              />
            }
          />
        )}
      </InputGroup>
      <IconButton
        aria-label="Search database"
        icon={<SearchIcon />}
        size="md"
      />
    </Flex>
  )
}
