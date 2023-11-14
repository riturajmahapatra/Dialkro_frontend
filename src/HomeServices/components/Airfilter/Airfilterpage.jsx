
import React, { useEffect, useState } from 'react'
import Nav from '../../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
// import Footer from '../components/Footer/Footer'
import Footer from '../../../components/Footer/Footer'
import { Toaster } from 'react-hot-toast'
// import BannerCarousel from '../components/Body/Carousel/BannerCarousel';
import BannerCarousel from '../../../components/Body/Carousel/BannerCarousel';
// import CardSectionshop from './components/cardSectionshop';
import CardSectionshop from '../../components/cardSectionshop'
import { useParams } from 'react-router-dom';

const Airfilterpage = () => {
  const navigate = useNavigate()

  const category = 'autocare' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`,
    `${category}Carousel/${category}4.webp`
  ]

  // Dynamic data for Airfilter 
  const [filterAir , setfilterAir] = useState([]);
  const params = useParams();
  const filteredCategory = params.name;

  useEffect(()=>{
    const getfilterAir = async ()=>{
      let fetchfilterAir = await fetch(`${import.meta.env.VITE_REACT_APP}/get/b2b/airfilter`, {
        method:'get',
        headers:{
          'Content-Type': 'application/json'
        }
      });
      fetchfilterAir = await fetchfilterAir.json();
    //   console.log(fetchfilterAir)
      setfilterAir(fetchfilterAir.gotAirfilter);
    }
    getfilterAir();
  },[])

  const filterairData = filterAir.filter((item)=>item.filterType === filteredCategory);
  

  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav services={`Services`} />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        {
          filterairData?.map((item,i)=>{
            return (
              <CardSectionshop image={item.image} filterType={item.filterType} companyName={item.companyName} rating={item.rating} price={item.price} description={item.description} onClick={() => navigate('/autocare/Product_Detail')} />
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

export default Airfilterpage
