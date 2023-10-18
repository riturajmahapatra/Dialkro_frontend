import React, { useEffect, useState } from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel'
const DentistPage = () => {
  const images = [
    'DentistCarousel/dentist1.webp',
    'DentistCarousel/dentist2.webp',
    'DentistCarousel/dentist3.webp',
    'DentistCarousel/dentist4.webp'
  ]
  const navigate = useNavigate();
 
  // Dynamic Data for Dentist
  const [dentist, setdentist] = useState([]);
  useEffect(()=>{
     const getDentist = async ()=>{
      let fetchDentist = await fetch(`${import.meta.env.VITE_REACT_APP}/get/dentist/info`,{
        method:'get',
        headers:{
          'Content-Type': 'application/json'
        }
      });
      fetchDentist = await fetchDentist.json();
      // console.log(fetchDentist)
      setdentist(fetchDentist.gotDentist);
      console.log(dentist)
     }
     getDentist();
  },[])

  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        {
           dentist && dentist.map((item,i)=>{
            return(
                  <CardSection dentistName={item.dentistName} image={item.image} description={item.description} price={item.price} onClick={() => navigate('/dentist/Product_Detail')} />
            )
           })
        }
        
        {/* <CardSection onClick={() => navigate('/dentist/Product_Detail')} />
        <CardSection onClick={() => navigate('/dentist/Product_Detail')} />
        <CardSection onClick={() => navigate('/dentist/Product_Detail')} />
        <CardSection onClick={() => navigate('/dentist/Product_Detail')} />
        <CardSection onClick={() => navigate('/dentist/Product_Detail')} /> */}
      </div>
      <Footer />
    </div>
  )
}

export default DentistPage
