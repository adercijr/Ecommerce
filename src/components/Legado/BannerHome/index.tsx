import { Flex, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image'
import TitleBanner from './TitleBanner'

export default function BannerHome() {
  const isWide = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Flex w="100%" height="98.185vh" paddingTop={isWide ? '100px' : 0}>
      <Grid
        templateColumns={['1fr', '1fr', '1fr 1fr', '55% 1fr']}
        templateRows={{
          base: '1fr 1fr 1fr',
          sm: '1fr 1fr 1fr 1fr',
          md: '1fr 1fr 1fr',
          lg: '1fr 1fr '
        }}
        width="100%"
        gap={1}
      >
        <GridItem
          rowSpan={2}
          colSpan={isWide ? 1 : 2}
          bgSize="100%"
          rowStart={{ base: 1, lg: 1 }}
          rowEnd={{ base: 3, lg: 3 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          position="relative"
          overflow="hidden"
        >
          <Image
            src="/images/bannerHome/women.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <TitleBanner size="large" link="Women" />
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={1}
          bgSize="100%"
          colStart={{ base: 1, md: 1, lg: 2 }}
          colEnd={{ base: 2, md: 2, lg: 2 }}
          rowStart={{ base: 3, lg: 1 }}
          rowEnd={{ base: 4, lg: 2 }}
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          position="relative"
        >
          <Image
            src="/images/bannerHome/man.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <TitleBanner size="small" link="Men" />
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={1}
          bgSize="100%"
          colStart={{ base: 1, md: 2, lg: 2 }}
          colEnd={{ base: 2, md: 3, lg: 2 }}
          rowStart={{ base: 4, md: 3, lg: 2 }}
          rowEnd={{ base: 5, md: 4, lg: 3 }}
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          position="relative"
        >
          <Image
            src="/images/bannerHome/kid.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <TitleBanner size="small" link="Kids" />
        </GridItem>
      </Grid>
    </Flex>
  )
}
