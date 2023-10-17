import React, { useEffect, useState } from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel'
const HostelsPage = () => {
  const images = [
    'HostelCarousel/hostel1.webp',
    'HostelCarousel/hostel2.webp',
    'HostelCarousel/hostel3.webp',
    'HostelCarousel/hostel4.webp',
    'HostelCarousel/hostel5.webp'
  ]
  const navigate = useNavigate();
 
  // Dynamic Data for Hostel
  const [hostel, sethostel] = useState([])
  useEffect(()=>{
     const getHostel = async ()=>{
      let fetchHostel = await fetch(`${import.meta.env.VITE_REACT_APP}/get/hostel/info`,{
        method:'get',
        headers:{
          'Content-Type':'application/json'
        }
      });
      fetchHostel = await fetchHostel.json();
      // console.log(fetchHostel)
      sethostel(fetchHostel.gothostel)
      
     }
     getHostel();
  },[])

  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        {
          hostel && hostel.map((item,i)=>{
            return (
              <CardSection key={item._id} hostelName={item.hostelName} price={item.price} rating={item.rating} description={item.description} image={item.image} onClick={() => navigate('/hostels/Product_Detail')} />
            )
          })
        }
        
        {/* <CardSection onClick={() => navigate('/hostels/Product_Detail')} />
        <CardSection onClick={() => navigate('/hostels/Product_Detail')} />
        <CardSection onClick={() => navigate('/hostels/Product_Detail')} />
        <CardSection onClick={() => navigate('/hostels/Product_Detail')} />
        <CardSection onClick={() => navigate('/hostels/Product_Detail')} /> */}
      </div>
      <Footer />
    </div>
  )
}

export default HostelsPage
