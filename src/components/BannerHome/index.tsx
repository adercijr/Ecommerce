import {
  Text,
  Flex,
  Grid,
  GridItem,
  useBreakpointValue
} from '@chakra-ui/react'
import TitleBanner from './TitleBanner'

export default function BannerHome() {
  const isWide = useBreakpointValue({
    base: false,
    lg: true
  })
  return (
    <Flex w="100%" maxW="1680px">
      <Grid
        templateColumns={['1fr', '1fr', '1fr 1fr', '55% 1fr']}
        templateRows={{ base: '1fr 1fr 1fr 1fr ' }}
        width="100%"
        height={isWide ? '75rem' : '75rem'}
        gap={1}
      >
        <GridItem
          rowSpan={2}
          colSpan={isWide ? 1 : 2}
          backgroundImage="url('./images/bannerHome/women.jpg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          bgSize="100%"
          rowStart={{ base: 1, lg: 1 }}
          rowEnd={{ base: 3, lg: 3 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <TitleBanner
            size="large"
            description="Choose the ideal look for you"
            link="Women"
          />
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={1}
          backgroundImage="url('./images/bannerHome/man.jpg')"
          backgroundPosition="0px -200px"
          backgroundRepeat="no-repeat"
          bgSize="100%"
          colStart={{ base: 1, md: 1, lg: 2 }}
          colEnd={{ base: 2, md: 2, lg: 2 }}
          rowStart={{ base: 3, lg: 1 }}
          rowEnd={{ base: 4, lg: 2 }}
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
        >
          <TitleBanner size="small" link="Men" />
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={1}
          backgroundImage="url('./images/bannerHome/kid.jpg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          bgSize="100%"
          colStart={{ base: 1, md: 2, lg: 2 }}
          colEnd={{ base: 2, md: 3, lg: 2 }}
          rowStart={{ base: 4, md: 3, lg: 2 }}
          rowEnd={{ base: 5, md: 4, lg: 3 }}
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
        >
          <TitleBanner size="small" link="Kids" />
        </GridItem>
      </Grid>
    </Flex>
  )
}
