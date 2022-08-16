import { Flex, useBreakpointValue, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Banner from '../components/Home/Banner'
import { GenderCard } from '../components/Home/Gender'
import Carousel from '../components/Home/Carousel'
import Footer from '../components/Footer'
import MessageBanner from '../components/Home/MessageBanner'

export default function Home() {
  const data = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      brand: 'Nike',
      description: 'Air Zoom Pegasus 39',
      price: 109.99,
      discount: 10
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',

      brand: 'Nike',
      description: 'Mercurial Vapor Academy FG Football Boots',
      price: 39.99,
      discount: 0
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      brand: 'Nike',
      description: 'Court Vision Mens Trainers',
      price: 19.99,
      discount: 20
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      brand: 'Nike',
      description: "Revolution 6 Men's Running Shoe",
      price: 9.99,
      discount: 0
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      brand: 'Nike',
      description: 'Air Max Invigor Trainers Mens',
      price: 13.99,
      discount: 0
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      brand: 'Nike',
      description: 'Mens Air Max Excee Trainers',
      price: 74.99,
      discount: 0
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      brand: 'Nike',
      description: 'Mens Air Max Excee Trainers',
      price: 4.99,
      discount: 0
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      brand: 'Nike',
      description: 'Mens Air Max Excee Trainers',
      price: 24.99,
      discount: 0
    }
  ]

  return (
    <Flex m="auto" direction="column" align="center" w="100%">
      <Header />
      <Flex w="100%" m="auto" direction="column" mt="5rem">
        <MessageBanner />
        <Banner />
      </Flex>

      <Flex w="100%" maxW="1680px" gap={20} pt="1rem" direction="column">
        <Flex w="100%" h="300px" justify="space-around">
          <GenderCard gender="men" />
          <GenderCard gender="women" />
          <GenderCard gender="kids" />
        </Flex>

        <Carousel data={data} title="NEW PRODUCTS" />
        <Carousel data={data} title="BEST SELLERS" />
      </Flex>

      <Footer />
    </Flex>
  )
}
