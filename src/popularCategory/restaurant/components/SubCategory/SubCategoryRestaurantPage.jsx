import React from 'react'
import Nav from '../../../../components/Navbar/Nav'
import Footer from '../../../../components/Footer/Footer'
import SearchBar from '../SearchBar'
import Choices from '../Choices'
import BannerCarousel from '../../../../components/Body/Carousel/BannerCarousel'

const SubCategoryRestaurantPage = () => {
  const resturant = 'resturant'
  const images = [
    `Hero_pg1/SubCategoryImages/${resturant}Carousel/${resturant} (1).webp`,
    `Hero_pg1/SubCategoryImages/${resturant}Carousel/${resturant} (2).webp`,
    `Hero_pg1/SubCategoryImages/${resturant}Carousel/${resturant} (4).webp`,
    `Hero_pg1/SubCategoryImages/${resturant}Carousel/${resturant} (5).webp`,
    `Hero_pg1/SubCategoryImages/${resturant}Carousel/${resturant} (6).webp`
  ]
  return (
    <div>
      <Nav />
      <BannerCarousel images={images} />
      <div className="mt-5 flex flex-col gap-8">
        <div className="flex items-center justify-center">
          <Choices />
        </div>
        <div className="ml-24">
          <SearchBar />
        </div>
        <div className="flex items-center justify-center">
          <button className="h-[40px] w-[25vw] rounded-md bg-blue-500 text-white hover:bg-blue-400">
            View All Categories
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SubCategoryRestaurantPage
