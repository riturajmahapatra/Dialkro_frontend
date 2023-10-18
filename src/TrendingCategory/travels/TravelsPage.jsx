import React, { useState } from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel';
import { useEffect } from 'react'
const TravelsPage = () => {
  const images = [
    'TravelCarousel/travel1.webp',
    'TravelCarousel/travel2.webp',
    'TravelCarousel/travel3.webp',
    'TravelCarousel/travel4.webp',
    'TravelCarousel/travel5.webp'
  ]

  const navigate = useNavigate();

  // Dynamic data for travel

  const [travel, settravel] = useState([]);

  useEffect(()=>{
     const getTravel = async ()=>{
      let fetchTravel = await fetch(`${import.meta.env.VITE_REACT_APP}/get/travel/info`,{
        method:'get',
        headers:{
          'Content-Type' : "application/json"
        }
      });
      fetchTravel = await fetchTravel.json();
      // console.log(fetchTravel.gotTravel);
      settravel(fetchTravel.gotTravel)
      console.log(travel)
     };
     getTravel();
  },[])

  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">

        {
          travel && travel.map((item,i)=>{
            return (
              <CardSection
               key={item._id}
                companyName={item.companyName}
                 description={item.description}
                  rating={item.rating}
                   charges={item.charges}
                    image={item.image}
                     onClick={() => navigate('/travels/Product_Detail')} 
                    />
            )
          })
        }
        
        {/* <CardSection onClick={() => navigate('/travels/Product_Detail')} />
        <CardSection onClick={() => navigate('/travels/Product_Detail')} />
        <CardSection onClick={() => navigate('/travels/Product_Detail')} />
        <CardSection onClick={() => navigate('/travels/Product_Detail')} />
        <CardSection onClick={() => navigate('/travels/Product_Detail')} /> */}
      </div>
      <Footer />
    </div>
  )
}

export default TravelsPage
