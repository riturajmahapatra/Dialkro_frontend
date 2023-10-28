import React, { useEffect, useState } from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel';
import { useParams } from 'react-router-dom';

const ElectronicServicesPage = () => {
  const electronics = 'electronics'

  const images = [
    `${electronics}Carousel/${electronics} (1).webp`,
    `${electronics}Carousel/${electronics} (2).webp`,
    `${electronics}Carousel/${electronics} (3).webp`,
    `${electronics}Carousel/${electronics} (4).webp`,
    `${electronics}Carousel/${electronics} (5).webp`,
    `${electronics}Carousel/${electronics} (6).webp`,
    `${electronics}Carousel/${electronics} (7).webp`
  ]

  // Dynamic Data for electronic services
  const params = useParams();
  const company = params.name;
  const [electronicData, setelectronicData] = useState([]);
  useEffect(()=>{
    const getElectronic = async (req,res)=>{
      let fetchElectronic = await fetch (`${import.meta.env.VITE_REACT_APP}/get/electronic/service`,{
        method:'get',
        headers:{
          'Content-Type':'application/json'
        }
      });
      fetchElectronic = await fetchElectronic.json();
      // console.log(fetchElectronic);
      setelectronicData(fetchElectronic.electronicService);
    }
    getElectronic();
  },[]);

  const filteredElectronic = electronicData.filter((item)=>item.companyName === company);
  console.log(filteredElectronic);
  const navigate = useNavigate()
  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />

      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        {
          filteredElectronic?.map((item,i)=>{
            return (
              <CardSection key={item._id} companyName={item.companyName} image={item.image} charges={item.charges} rating={item.rating} description={item.description} onClick={() => navigate('/electronicServices/Product_Detail')} />
            )
          })
        }
        
        {/* <CardSection onClick={() => navigate('/electronicServices/Product_Detail')} />
        <CardSection onClick={() => navigate('/electronicServices/Product_Detail')} />
        <CardSection onClick={() => navigate('/electronicServices/Product_Detail')} />
        <CardSection onClick={() => navigate('/electronicServices/Product_Detail')} />
        <CardSection onClick={() => navigate('/electronicServices/Product_Detail')} /> */}
      </div>
      <Footer />
    </div>
  )
}

export default ElectronicServicesPage
