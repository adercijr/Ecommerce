import { createContext, useContext, useEffect, useState } from 'react'

type FilterProps = {
  structure: {
    id: number
    name: string
    value: string[]
  }[]
  filteredStructure: {
    id: number
    name: string
    value: string[]
  }[]
  setFilterdData: Function
  brand: string[]
  setBrand: Function
  activity: string[]
  setActivity: Function
  style: string[]
  setStyle: Function
  category: string[]
  setCategory: Function
  data: Data
  filteredData: Data
  setData: Function
  setFilteredStructure: Function
}

type Data = {
  id: number
  brand: string
  description: string
  category: string
  style: string
  activity: string
  variants: {
    id: number
    src: string
    price: number
    sizes: {
      size: number
      inventory: number
      discount: number
    }[]
  }[]
}[]

export const FiltersContext = createContext<FilterProps | null>(null)

export const FiltersProvider = (props) => {
  const [data, setData] = useState<Data>([])
  const [filteredData, setFilterdData] = useState<Data>([])

  const [filteredStructure, setFilteredStructure] = useState([])

  const [brand, setBrand] = useState([])
  const [activity, setActivity] = useState([])
  const [style, setStyle] = useState([])
  const [category, setCategory] = useState([])

  const [] = useState([])

  useEffect(() => {
    setData(dataArray)
    setFilterdData(dataArray)
    setFilteredStructure(structure)
  }, [])

  const dataArray = [
    {
      id: 1,
      brand: 'Nike',
      description: 'Air Zoom Pegasus 39',
      category: 'Footwear',
      style: 'Trainers',
      activity: 'Running',
      variants: [
        {
          id: 1,
          src: '/images/trainer1.webp',
          price: 109.99,
          sizes: [
            { size: 3, inventory: 100, discount: 0 },
            { size: 4, inventory: 23, discount: 10 },
            { size: 5, inventory: 76, discount: 0 },
            { size: 6, inventory: 234, discount: 10 },
            { size: 7, inventory: 97, discount: 10 }
          ]
        }
      ]
    },
    {
      id: 2,
      brand: 'New Balance',
      description: 'Air Zoom Pegasus 39',
      category: 'Clothing',
      style: 'Shoes',
      activity: 'Lifestyle',
      variants: [
        {
          id: 1,
          src: '/images/trainer2.webp',
          price: 109.99,
          sizes: [
            { size: 3, inventory: 100, discount: 0 },
            { size: 4, inventory: 23, discount: 10 },
            { size: 5, inventory: 76, discount: 0 },
            { size: 6, inventory: 234, discount: 10 },
            { size: 7, inventory: 97, discount: 80 }
          ]
        }
      ]
    },
    {
      id: 3,
      brand: 'New Balance',
      description: 'Air Zoom Pegasus 39',
      category: 'Footwear',
      style: 'Boots',
      activity: 'Lifestyle',
      variants: [
        {
          id: 1,
          src: '/images/trainer3.webp',
          price: 109.99,
          sizes: [
            { size: 3, inventory: 100, discount: 0 },
            { size: 4, inventory: 23, discount: 10 },
            { size: 5, inventory: 76, discount: 0 },
            { size: 6, inventory: 234, discount: 10 },
            { size: 7, inventory: 97, discount: 40 }
          ]
        }
      ]
    },
    {
      id: 4,
      brand: 'New Balance',
      description: 'Air Zoom Pegasus 39',
      category: 'Footwear',
      style: 'Boots',
      activity: 'Gym',
      variants: [
        {
          id: 1,
          src: '/images/trainer3.webp',
          price: 109.99,
          sizes: [
            { size: 3, inventory: 100, discount: 0 },
            { size: 4, inventory: 23, discount: 10 },
            { size: 5, inventory: 76, discount: 0 },
            { size: 6, inventory: 234, discount: 10 },
            { size: 7, inventory: 97, discount: 40 }
          ]
        }
      ]
    }
  ]

  const structure = [
    {
      id: 1,
      name: 'brand',
      value: ['New Balance', 'Nike']
    },
    {
      id: 2,
      name: 'category',
      value: ['Clothing', 'Footwear']
    },
    {
      id: 3,
      name: 'style',
      value: ['Trainers', 'Shoes', 'Boots']
    },
    {
      id: 4,
      name: 'activity',
      value: ['Lifestyle', 'Running', 'Gym']
    }
  ]

  return (
    <FiltersContext.Provider
      value={{
        setFilterdData,
        filteredData,
        data,
        brand,
        setBrand,
        activity,
        setActivity,
        style,
        setStyle,
        category,
        setCategory,
        structure,
        setData,
        filteredStructure,
        setFilteredStructure
      }}
    >
      {props.children}
    </FiltersContext.Provider>
  )
}

export const useFilters = () => useContext(FiltersContext)
