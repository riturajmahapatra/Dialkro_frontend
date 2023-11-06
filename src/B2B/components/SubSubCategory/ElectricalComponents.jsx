import React, { useEffect, useState } from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import BannerCarousel from '../../../components/Body/Carousel/BannerCarousel'
import AlignmentSubCards from '../../../components/ui/AlignmentSubCard'
import { useNavigate } from 'react-router-dom'

const ElectricalComponents = () => {
  const navigation = useNavigate()
  const category = 'b2b' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`
  ]

  // Dynamic data for Electrical Components
  const [component , setcomponent] = useState([]);
  useEffect(()=>{
     const getElectricComp = async()=>{
       let fetchComp = await fetch(`${import.meta.env.VITE_REACT_APP}/get/b2b/electricalcomp`,{
        method:'get',
        headers:{
          'Content-Type':'application/json'
        }
       });
       fetchComp = await fetchComp.json();
       setcomponent(fetchComp.gotElectrical);
     }
     getElectricComp();
  },[])

  return (
    <div>
      <Nav services={`B2B`} />
      <BannerCarousel images={images} />
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-5">
        <div className=" flex items-center justify-center gap-5 max-lg:flex-wrap ">

          {
            component?.map((item,i)=>{
              return (
                <AlignmentSubCards
                image={item.image}
                prompt={item.componentName}
                onClick={`/componentpage/${item.componentName}`}
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

export default ElectricalComponents
