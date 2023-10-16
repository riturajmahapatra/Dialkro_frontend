import React, { useEffect, useState } from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel'
const MoversPage = () => {
  const navigate = useNavigate()
  const category = 'movers' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`,
    `${category}Carousel/${category}4.webp`
  ]

  const [movers, setmovers] = useState([])

  useEffect(() => {
    const getMovers = async () => {
      let fetchMovers = await fetch(`${import.meta.env.VITE_REACT_APP}/get/packers&movers`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      fetchMovers = await fetchMovers.json()
      // console.log(fetchMovers.gotPackers);
      setmovers(fetchMovers.gotPackers)
      console.log(movers)
    }
    getMovers()
  }, [])

  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        {movers &&
          movers.map((item, i) => {
            return <CardSection companyName={item.companyName} image={item.image} rating={item.rating} description={item.description} price={item.price} onClick={() => navigate('/movers/Product_Detail')} />
          })}

        {/* <CardSection onClick={() => navigate('/movers/Product_Detail')} />
        <CardSection onClick={() => navigate('/movers/Product_Detail')} />
        <CardSection onClick={() => navigate('/movers/Product_Detail')} />
        <CardSection onClick={() => navigate('/movers/Product_Detail')} /> */}
      </div>
      <Footer />
    </div>
  )
}

export default MoversPage
