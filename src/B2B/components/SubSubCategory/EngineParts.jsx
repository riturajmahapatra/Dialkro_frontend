import React, { useState } from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import BannerCarousel from '../../../components/Body/Carousel/BannerCarousel'
import AlignmentSubCards from '../../../components/ui/AlignmentSubCard'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'

const EngineParts = () => {
  const navigation = useNavigate()
  const category = 'b2b' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`
  ]

  // Dynamic Data for Engineparts
  const [engine , setengine] = useState([])
  const [image , setimage] = useState()
  useEffect(()=>{
    const getEngineparts = async ()=>{
      let fetchEngine = await fetch(`${import.meta.env.VITE_REACT_APP}/get/b2b/enginepart`,{
        method:'get',
        headers:{
          'Content-Type':'application/json'
        }
      });
      fetchEngine = await fetchEngine.json();
      // console.log(fetchEngine.gotEngine);
      setengine(fetchEngine.gotEngine);
    }
    getEngineparts();
},[]);

//  const filteredPart = [... new Set(engine.map((item,i)=>{
//   return (
//     item.enginepartName 
    
//   )
//  }))]
 

  return (
    <div>
      <Nav services={`B2B`} />
      <BannerCarousel images={images} />
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-5">
        <div className=" flex items-center justify-center gap-5 max-lg:flex-wrap ">
          {
            engine?.map((item,i)=>{
              return (
                <AlignmentSubCards
                key={item._id}
                companyName={item.enginepartName}
                onClick={`/b2b/${item.enginepartName}`}
                image={item.image}
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

export default EngineParts
