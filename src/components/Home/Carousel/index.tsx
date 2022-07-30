import { Flex, VStack, Text, useBreakpointValue } from '@chakra-ui/react'
import HomeProductCard from './Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

type CarouselProps = {
  data: {
    id: number
    src: string
    brand: string
    description: string
    price: number
    discount: number
  }[]
  title: string
}

const Breakpoints = {
  0: {
    slidesPerView: 2,
    spaceBetween: 200
  },
  630: {
    slidesPerView: 2,
    spaceBetween: 30
  },
  790: {
    slidesPerView: 3,
    spaceBetween: 180
  },
  900: {
    slidesPerView: 3,
    spaceBetween: 40
  },
  1100: {
    slidesPerView: 4,
    spaceBetween: 140
  },
  1400: {
    slidesPerView: 5,
    spaceBetween: 120
  },
  1550: {
    slidesPerView: 5,
    spaceBetween: 50
  }
}

export default function Carousel({ data, title }: CarouselProps) {
  return (
    <VStack w="100%" maxW="1680px" gap={10} align="left" p="2rem">
      <Text fontSize="1.8rem" fontWeight={800}>
        {title}
      </Text>
      <Flex w="100%" flexWrap="wrap">
        <Swiper
          cssMode={true}
          navigation={true}
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          className="mySwiper"
          scrollbar={{
            hide: false,
            draggable: true,
            dragClass: 'swiper-scrollbar-drags'
          }}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true
          }}
          breakpoints={Breakpoints}
        >
          {data.map((card) => {
            return (
              <SwiperSlide key={card.id}>
                <HomeProductCard
                  src={card.src}
                  description={card.description}
                  price={card.price}
                  discount={card.discount}
                  brand={card.brand}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Flex>
    </VStack>
  )
}
