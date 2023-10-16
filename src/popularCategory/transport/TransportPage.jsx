import React from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel'
import { useEffect, useState } from 'react'
const TransportPage = () => {
  const navigate = useNavigate()
  const category = 'transport' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`,
    `${category}Carousel/${category}4.webp`
  ]


   // Dynamic Transport Datas
   const [transport, settransport] = useState([])
   useEffect(() => {
     const getData = async () => {
       let fetchData = await fetch(`${import.meta.env.VITE_REACT_APP}/get/transport`, {
         method: 'get',
         headers: {
           'Content-Type': 'application/json'
         }
       })
       fetchData = await fetchData.json()
       settransport(fetchData.gotTransport)
       console.log(transport)
     }
     getData()
   }, [])
  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        {
transport && transport.map((item,i)=>{
  return(
<CardSection companyName={item.companyName} image={item.image} rating={item.rating} transportType={item.transportType} description={item.description} price={item.price}  onClick={() => navigate('/transport/Product_Detail')} />
  )
})
        
        }
        {/* <CardSection onClick={() => navigate('/transport/Product_Detail')} />
        <CardSection onClick={() => navigate('/transport/Product_Detail')} />
        <CardSection onClick={() => navigate('/transport/Product_Detail')} />
        <CardSection onClick={() => navigate('/transport/Product_Detail')} /> */}
      </div>
      <Footer />
    </div>
  )
}

export default TransportPage
