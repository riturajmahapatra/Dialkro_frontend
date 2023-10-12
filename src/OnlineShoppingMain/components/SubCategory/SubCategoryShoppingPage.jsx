import React from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import SearchBar from '../SearchBar'
import BannerCarousel from '../../../components/Body/Carousel/BannerCarousel'
import { useNavigate } from 'react-router-dom'

const SubCategoryShoppingPage = () => {
  const category = 'b2b' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`
  ]
  const navigate = useNavigate()
  return (
    <div>
      <Nav services={`Shopping`} />
      <BannerCarousel images={images} />

      <div className="mt-10 flex items-center justify-center">
        <SearchBar />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className=" flex gap-10 max-lg:grid">
          <img
            src="/onlineshoppingCarousel/frames/Frame 15.jpg"
            alt="alt"
            className="mt-10 cursor-pointer"
            onClick={(e) => {
              navigate('/online/groceries')
            }}
          />
          <img
            src="/onlineshoppingCarousel/frames/Frame 8.jpg"
            alt="alt"
            className="mt-10 cursor-pointer"
            onClick={(e) => {
              navigate('/online/electronics')
            }}
          />
        </div>
        <div className="flex gap-10 max-lg:grid">
          <img
            src="/onlineshoppingCarousel/frames/Frame 7.jpg"
            alt="alt"
            className="mt-10 cursor-pointer"
            onClick={(e) => {
              navigate('/online/clothing')
            }}
          />
          <img
            src="/onlineshoppingCarousel/frames/Frame 11.jpg"
            alt="alt"
            className="mt-10 cursor-pointer"
            onClick={(e) => {
              navigate('/online/furniture')
            }}
          />
        </div>
        <div className="flex gap-10 max-lg:grid">
          <img
            src="/onlineshoppingCarousel/frames/Frame 13.jpg"
            alt="alt"
            className="mt-10 cursor-pointer"
            onClick={(e) => {
              navigate('/online/movies')
            }}
          />
          <img
            src="/onlineshoppingCarousel/frames/Frame 14.jpg"
            alt="alt"
            className="mt-10 cursor-pointer"
            onClick={(e) => {
              navigate('/online/movies')
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SubCategoryShoppingPage
