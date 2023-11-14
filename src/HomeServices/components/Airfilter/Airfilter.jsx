import React, { useEffect, useState } from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import BannerCarousel from '../../../components/Body/Carousel/BannerCarousel'
import AlignmentSubCards from '../../../components/ui/AlignmentSubCard'
import { useNavigate } from 'react-router-dom'

const Airfilter = () => {
  const navigation = useNavigate()
  const category = 'b2b' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`
  ]

  // Dynamic data for Airfilter
  const [airfilter , setairfilter] = useState([]);
  const [viewMore , setviewMore] = useState(4);

  useEffect(()=>{
    const getFilteredair = async ()=>{
      let fetchFilter = await fetch(`${import.meta.env.VITE_REACT_APP}/get/b2b/airfilter`, {
        method:'get',
        headers:{
          'Content-Type':'application/json'
        }
      });
      fetchFilter = await fetchFilter.json();
      setairfilter(fetchFilter.gotAirfilter);
      // console.log(airfilter)
    }
    getFilteredair();
  },[])

  // view More
  const handleView = ()=>{
    setviewMore((prevCount)=>prevCount + 5);
  }

  return (
    <div>
      <Nav services={`Services`} />
      <BannerCarousel images={images} />
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-10">
        <div className=" grid md:grid-cols-4 grid-cols-2 items-center justify-center md:gap-10 ">

          {
            airfilter?.slice(0,viewMore).map((item,i)=>{
              return (
                <AlignmentSubCards
                image={item.image}
                prompt={item.filterType}
                onClick={`/airfilterpage/${item.filterType}`}
              />
              )
            })
          }

         
          
          {/* <AlignmentSubCards
            images={`/homeservice/tvinstall.webp`}
            prompt={`Installation / Uninstallation`}
            onClick={() => navigation('/homeservices')}
          /> */}
        </div>
      
    {
      airfilter.length > viewMore && 

      <div className='mx-auto'>
          <button onClick={handleView} className='text-center border mx-auto  bg-blue-500 text-white font-bold px-5 py-2 rounded'>View More</button>
      </div>
    }

        
      </div>
      <Footer />
    </div>
  )
}

export default Airfilter
