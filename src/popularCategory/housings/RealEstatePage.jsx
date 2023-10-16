import React, { useEffect, useState } from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel'
const RealEstatePage = () => {
  const images = [
    'HouseCarousel/house1.webp',
    'HouseCarousel/house2.webp',
    'HouseCarousel/house3.webp',
    'HouseCarousel/house4.webp',
    'HouseCarousel/house5.webp'
  ]
  const navigate = useNavigate()

  // Dynamic Data for Commercial
  const [commercial, setcommercial] = useState([]);
  useEffect(()=>{
    const getCommercial = async ()=>{
      let fetchData = await fetch(`${import.meta.env.VITE_REACT_APP}/get/commercial/property`,{
       method:'get',
       headers:{
         'Content-Type': 'application/json'
       }
      });
      fetchData = await fetchData.json();
      // console.log(fetchData.getAllcommercial);
      setcommercial(fetchData.getAllcommercial);
      console.log(commercial)
   }
   getCommercial();
  },[])
 

  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">

        {
          commercial && commercial.map((item,i)=>{
            return (
              <CardSection key={item._id} companyName={item.companyName} description={item.description} image={item.image} price={item.price} rating={item.rating} onClick={() => navigate('/housings/Product_Detail')} />
            )
          })
        }
        
        {/* <CardSection onClick={() => navigate('/housings/Product_Detail')} />
        <CardSection onClick={() => navigate('/housings/Product_Detail')} />
        <CardSection onClick={() => navigate('/housings/Product_Detail')} />
        <CardSection onClick={() => navigate('/housings/Product_Detail')} />
        <CardSection onClick={() => navigate('/housings/Product_Detail')} /> */}
      </div>
      <Footer />
    </div>
  )
}

export default RealEstatePage
