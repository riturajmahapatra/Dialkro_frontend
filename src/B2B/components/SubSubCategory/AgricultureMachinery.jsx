import React, { useEffect, useState } from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import BannerCarousel from '../../../components/Body/Carousel/BannerCarousel'
import AlignmentSubCards from '../../../components/ui/AlignmentSubCard'
import { useNavigate } from 'react-router-dom'

const AgricultureMachinery = () => {

  const navigation = useNavigate()
  const category = 'b2b' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`
  ]

  // Dynamic data for machinery agriculture
  const [machinary , setmachinary] = useState([])
  useEffect(()=>{
     const getMachinary = async()=>{
      let fetchMachinary = await fetch(`${import.meta.env.VITE_REACT_APP}/get/b2b/agricultural/machine`,{
        method:'get',
        headers:{
          'Content-Type' : 'application/json'
        }
      });
      fetchMachinary = await fetchMachinary.json();
      // console.log(fetchMachinary)
      setmachinary(fetchMachinary.gotAgricultural);
     }
     getMachinary();
  },[])

  return (
    <div>
      <Nav services={`B2B`} />
      <BannerCarousel images={images} />
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-5">
        <div className=" flex items-center justify-center gap-5 max-lg:flex-wrap ">

          {
            machinary?.map((item,i)=>{
              return (
                <AlignmentSubCards
                image={item.image}
                prompt={item.machineName}
                onClick={`/machinarypage/${item.machineName}`}
              />
              )
            })
          }
         
     
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AgricultureMachinery
