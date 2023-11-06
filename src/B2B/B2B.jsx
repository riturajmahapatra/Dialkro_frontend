import React, { useEffect, useState } from 'react'
import Nav from '../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../components/Body/Carousel/BannerCarousel'
import CardSectionshop from './components/cardSectionshop';
import { useParams } from 'react-router-dom';
const B2B = () => {
  const navigate = useNavigate()

  const category = 'autocare' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`,
    `${category}Carousel/${category}4.webp`
  ]
  
  // Dynamic Data for Engineparts
  const params = useParams();
  const part = params.name;
  const [enginepart, setenginepart] = useState([]);

  useEffect(()=>{
   const getEngine = async ()=>{
    let fetchEngine = await fetch(`${import.meta.env.VITE_REACT_APP}/get/b2b/enginepart`,{
      method:'get',
      headers:{
        'Content-Type':'application/json'
      }
    })
    fetchEngine = await fetchEngine.json();
    // console.log(fetchEngine.gotEngine);
    setenginepart(fetchEngine.gotEngine);
   }
   getEngine();
  },[])

  const filteredPart = enginepart.filter((item)=>item.enginepartName === part);
  console.log(filteredPart)

  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav services={`B2B`} />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">

        {
          filteredPart?.map((item,i)=>{
            return (
              <CardSectionshop
              key={item._id}
               image={item.image}
                companyName={item.companyName}
                 enginepartName={item.enginepartName}
                  description={item.description}
                  rating={item.rating}
                  price={item.price}
                   onClick={() => navigate('/b2b/Product_Detail')} />
            )
          })
        }
       


        {/* <CardSectionshop onClick={() => navigate('/b2b/Product_Detail')} />
        <CardSectionshop onClick={() => navigate('/b2b/Product_Detail')} />
        <CardSectionshop onClick={() => navigate('/b2b/Product_Detail')} />
        <CardSectionshop onClick={() => navigate('/b2b/Product_Detail')} /> */}
      </div>
      <Footer />
    </div>
  )
}

export default B2B
