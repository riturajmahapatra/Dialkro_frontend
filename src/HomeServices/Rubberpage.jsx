import React, { useEffect, useState } from 'react'
import Nav from '../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../components/Body/Carousel/BannerCarousel'
import CardSectionshop from './components/cardSectionshop';
import { useParams } from 'react-router-dom';

const Rubberpage = () => {
  const navigate = useNavigate()

  const category = 'autocare' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`,
    `${category}Carousel/${category}4.webp`
  ]

  // Dynamic data for tyres 
  const [rubber , setrubber] = useState([]);
  const params = useParams();
  const tyreCategory = params.name;

  useEffect(()=>{
    const getRubber = async ()=>{
      let fetchRubber = await fetch(`${import.meta.env.VITE_REACT_APP}/get/b2b/rubber/tyre`, {
        method:'get',
        headers:{
          'Content-Type': 'application/json'
        }
      });
      fetchRubber = await fetchRubber.json();
      setrubber(fetchRubber.gotTyre);
    }
    getRubber();
  },[])

  const filterTyre = rubber.filter((item)=>item.rubberCategory === tyreCategory);
  console.log(filterTyre)

  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav services={`Services`} />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        {
          filterTyre?.map((item,i)=>{
            return (
              <CardSectionshop image={item.image} rubberCategory={item.rubberCategory} companyName={item.companyName} rating={item.rating} price={item.price} description={item.description} onClick={() => navigate('/autocare/Product_Detail')} />
            )
          })
        }
        

        {/* <CardSectionshop onClick={() => navigate('/autocare/Product_Detail')} />
        <CardSectionshop onClick={() => navigate('/autocare/Product_Detail')} />
        <CardSectionshop onClick={() => navigate('/autocare/Product_Detail')} />
        <CardSectionshop onClick={() => navigate('/autocare/Product_Detail')} /> */}
      </div>
      <Footer />
    </div>
  )
}

export default Rubberpage
