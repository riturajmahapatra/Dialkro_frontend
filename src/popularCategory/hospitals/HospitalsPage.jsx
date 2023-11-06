import React, { useEffect, useState } from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel';
import { useParams } from 'react-router-dom'
const HospitalsPage = () => {
  const navigate = useNavigate()

  const category = 'hospital' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`,
    `${category}Carousel/${category}4.webp`
  ]
 
  // Dynamic Data for hospital 
  const params = useParams();
  const specialist = params.name
  const [hospital , sethospital] = useState([]);
  useEffect(()=>{
   const getHospital = async ()=>{
     let fetchHospital = await fetch(`${import.meta.env.VITE_REACT_APP}/get/all/hospital`,{
      method:'get',
      headers:{
        'Content-Type': 'application/json'
      }
     });
     fetchHospital = await fetchHospital.json();
    //  console.log(fetchHospital.allHospital);
     sethospital(fetchHospital.allHospital);
   }
   getHospital()
  },[]);

  const fileteredHospital = hospital.filter((item)=>item.specialisation === specialist);
  console.log(fileteredHospital) 

  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        {
          fileteredHospital?.map((item,i)=>{
            return (
              <CardSection image={item.image} description={`description:   ${item.description}`} specialisation={`${item.specialisation}-specialist`} rating={item.rating} address={`Address: ${item.address}`}  onClick={() => navigate('/hospitals/Product_Detail')} />  
            )
          })
        }
        


        {/* <CardSection onClick={() => navigate('/hospitals/Product_Detail')} />
        <CardSection onClick={() => navigate('/hospitals/Product_Detail')} />
        <CardSection onClick={() => navigate('/hospitals/Product_Detail')} />
        <CardSection onClick={() => navigate('/hospitals/Product_Detail')} /> */}
      </div>
      <Footer />
    </div>
  )
}

export default HospitalsPage
