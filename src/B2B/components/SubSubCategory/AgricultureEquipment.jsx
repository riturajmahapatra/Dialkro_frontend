import React, { useEffect, useState } from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import BannerCarousel from '../../../components/Body/Carousel/BannerCarousel'
import AlignmentSubCards from '../../../components/ui/AlignmentSubCard'

const AgricultureEquipment = () => {
  const category = 'b2b' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`
  ]

  // Dynamic data for Agriculture to the
  const [Agricultural , setAgricultural] = useState([]);
  const [viewMore , setviewMore] = useState(4);
  useEffect(()=>{
    const getAgriculture = async ()=>{
      let fetchAgriculture = await fetch(`${import.meta.env.VITE_REACT_APP}/get/b2b/agricultural/tool`,{
        method:'get',
        headers:{
          'Content-Type':'application/json'
        }
      });
      fetchAgriculture = await fetchAgriculture.json();
      console.log(fetchAgriculture.gotTool);
      setAgricultural(fetchAgriculture.gotTool);
    }
    getAgriculture();
  },[])
  
  // viewMore
  const handleView = async ()=>{
    setviewMore((prevCount)=>prevCount+5)
  }


  return (
    <div>
      <Nav services={`B2B`} />
      <BannerCarousel images={images} />
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-5">
        <div className=" flex items-center justify-center gap-5 max-lg:flex-wrap ">

          {
            Agricultural?.slice(0,viewMore).map((item,i)=>{
              return (
                <AlignmentSubCards
                image={item.image}
                prompt={item.toolName}
                onClick={`/agriculturetoolpage/${item.toolName}`}
              />
              )
            })
          }
         
       
        </div>

        {
            Agricultural.length > viewMore && 
            <div>
              <button onClick={handleView} className='bg-blue-500 text-white font-bold px-5 py-2 rounded '>View More</button>
            </div>
        }
      </div>
      <Footer />
    </div>
  )
}

export default AgricultureEquipment
