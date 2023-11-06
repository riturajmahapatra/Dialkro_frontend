import React, { useEffect, useState } from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel';
import { useParams } from 'react-router-dom';

const Education = () => {

 const params = useParams();
 const source = params.name
 console.log(source)

 const [education , seteducation] = useState([])

 useEffect(()=>{
    const getEducation = async ()=>{
      let fetchEducation = await fetch(`${import.meta.env.VITE_REACT_APP}/get/education/info` , {
        method:'get',
        headers:{
          'Content-Type': 'application/json'
        }
      });
      fetchEducation = await fetchEducation.json();
      console.log(fetchEducation.getEdu);
      seteducation(fetchEducation.getEdu);
    }
    getEducation();
 },[])

 const filterEducation = education.filter((item)=> item.educationSource === source);


  const navigate = useNavigate()

  const category = 'hospital' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`,
    `${category}Carousel/${category}4.webp`
  ]
  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        {
          filterEducation?.map((item,i)=>{
            return (
              <CardSection 
              image={item.image}
              sourceName={item.sourceName}
              description={item.description}

              rating={item.rating}
              charges={item.fee}
               onClick={() => navigate('/hospitals/Product_Detail')} />
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

export default Education
