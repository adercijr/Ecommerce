import { Flex, Checkbox, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useFilters } from '../../../providers/Filters'

export default function CheckboxMenuAside({ data: itemCheck, value: type }) {
  const {
    filteredData,
    setFilterdData,
    data,
    brand,
    setBrand,
    activity,
    setActivity,
    style,
    setStyle,
    category,
    setCategory
  } = useFilters()

  const [amount, setAmount] = useState(0)

  function uniqueFilter(element) {
    return element.filter((e, i) => element.indexOf(e) === i)
  }

  const handleChecks = (e) => {
    const isCheacked = e.target.checked

    let result = []

    switch (type) {
      case 'brand':
        if (isCheacked) {
          result = filteredData.filter((e) => e.brand == itemCheck)

          setFilterdData(uniqueFilter(result))
          break
        } else {
          result = [
            ...filteredData,
            ...data.filter((e) => e.brand != itemCheck)
          ]

          setFilterdData(uniqueFilter(result))
          break
        }
      case 'category':
        if (isCheacked) {
          result = filteredData.filter((e) => e.category == itemCheck)

          setFilterdData(uniqueFilter(result))
          break
        } else {
          result = [
            ...filteredData,
            ...data.filter((e) => e.category != itemCheck)
          ]

          setFilterdData(uniqueFilter(result))
          break
        }
      case 'style':
        if (isCheacked) {
          result = filteredData.filter((e) => e.style == itemCheck)

          setFilterdData(uniqueFilter(result))
          break
        } else {
          result = [
            ...filteredData,
            ...data.filter((e) => e.style != itemCheck)
          ]

          setFilterdData(uniqueFilter(result))
          break
        }
      case 'activity':
        if (isCheacked) {
          result = filteredData.filter((e) => e.activity == itemCheck)

          setFilterdData(uniqueFilter(result))
          break
        } else {
          result = [
            ...filteredData,
            ...data.filter((e) => e.activity != itemCheck)
          ]

          setFilterdData(uniqueFilter(result))
          break
        }
    }
  }

  useEffect(() => {
    switch (type) {
      case 'brand':
        setAmount(filteredData.filter((e) => e.brand == itemCheck).length)
        if (
          filteredData.filter((e) => e.brand == itemCheck).length > 0 &&
          filteredData.filter((e) => e.brand == itemCheck).length ==
            filteredData.length
        ) {
          setBrand([...brand, itemCheck])
        } else if (
          filteredData.filter((e) => e.brand == itemCheck).length > 0 &&
          filteredData.filter((e) => e.brand == itemCheck).length !=
            filteredData.length
        ) {
          setBrand(brand.filter((e) => e == itemCheck))
        }
        break
      case 'category':
        setAmount(filteredData.filter((e) => e.category == itemCheck).length)
        if (
          filteredData.filter((e) => e.category == itemCheck).length > 0 &&
          filteredData.filter((e) => e.category == itemCheck).length ==
            filteredData.length
        ) {
          setCategory([...brand, itemCheck])
        } else if (
          filteredData.filter((e) => e.category == itemCheck).length > 0 &&
          filteredData.filter((e) => e.category == itemCheck).length !=
            filteredData.length
        ) {
          setCategory(brand.filter((e) => e == itemCheck))
        }
        break
      case 'style':
        setAmount(filteredData.filter((e) => e.style == itemCheck).length)
        if (
          filteredData.filter((e) => e.style == itemCheck).length > 0 &&
          filteredData.filter((e) => e.style == itemCheck).length ==
            filteredData.length
        ) {
          setStyle([...brand, itemCheck])
        } else if (
          filteredData.filter((e) => e.style == itemCheck).length > 0 &&
          filteredData.filter((e) => e.style == itemCheck).length !=
            filteredData.length
        ) {
          setStyle(brand.filter((e) => e == itemCheck))
        }
        break
      case 'activity':
        setAmount(filteredData.filter((e) => e.activity == itemCheck).length)
        if (
          filteredData.filter((e) => e.activity == itemCheck).length > 0 &&
          filteredData.filter((e) => e.activity == itemCheck).length ==
            filteredData.length
        ) {
          setActivity([...brand, itemCheck])
        } else if (
          filteredData.filter((e) => e.activity == itemCheck).length > 0 &&
          filteredData.filter((e) => e.activity == itemCheck).length !=
            filteredData.length
        ) {
          setActivity(brand.filter((e) => e == itemCheck))
        }
        break
    }
  }, [filteredData])

  const handleIsChecked = () => {
    if (amount == filteredData.length) {
      return true
    } else {
      return false
    }
  }

  return (
    <Flex key={itemCheck} py="0.15rem">
      {amount > 0 && (
        <Checkbox
          onChange={(e) => handleChecks(e)}
          colorScheme="cyan"
          isChecked={handleIsChecked()}
        >
          <Text fontSize="0.8rem" fontWeight={500} color="black">
            {itemCheck} ({amount})
          </Text>
        </Checkbox>
      )}
    </Flex>
  )
}
