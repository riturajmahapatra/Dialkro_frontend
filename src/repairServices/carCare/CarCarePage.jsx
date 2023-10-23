import React, { useEffect, useState } from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel';
import { useParams } from 'react-router-dom';

const CarCarePage = ({carData}) => {
  const car = 'car'
 console.log(carData)
  const images = [
    `CarCarousel/${car} (1).webp`,
    `CarCarousel/${car} (2).webp`,
    `CarCarousel/${car} (3).webp`,
    `CarCarousel/${car} (4).webp`,
    `CarCarousel/${car} (5).webp`
  ]

  // Dynamic car service data
  const params = useParams();
  const company = params.name;
  const [carInfo , setcarInfo] = useState([]);
  useEffect(()=>{
    const getcarData = async ()=>{
      let fetchcarData = await fetch(`${import.meta.env.VITE_REACT_APP}/get/carcare/service`,{
        method:'get',
        headers:{
          'Content-Type':"application/json"
        }
      });
      fetchcarData = await fetchcarData.json();
      setcarInfo(fetchcarData.gotcarCare);
    };
    getcarData();
  },[]);

  const filtercarInfo = carInfo.filter((item)=>item.companyName === company)

  const navigate = useNavigate()
  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />

      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        {
          filtercarInfo?.map((item,i)=>{
            return (
              <CardSection key={item._id} companyName={item.companyName} image={item.image} rating={item.rating} description={item.description} charges={item.charges} onClick={() => navigate('/carCare/Product_Detail')} />
            )
          })
        }
      
        


        {/* <CardSection onClick={() => navigate('/carCare/Product_Detail')} />
        <CardSection onClick={() => navigate('/carCare/Product_Detail')} />
        <CardSection onClick={() => navigate('/carCare/Product_Detail')} />
        <CardSection onClick={() => navigate('/carCare/Product_Detail')} />
        <CardSection onClick={() => navigate('/carCare/Product_Detail')} /> */}
      </div>
      <Footer />
    </div>
  )
}

export default CarCarePage
