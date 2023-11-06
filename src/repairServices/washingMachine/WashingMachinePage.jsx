import React, { useEffect, useState } from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel';
import { useParams } from 'react-router-dom';
const WashingMachinePage = () => {
  const washing = 'washing'

  const images = [
    `washingCarousel/${washing} (1).webp`,
    `washingCarousel/${washing} (2).webp`,
    `washingCarousel/${washing} (3).webp`,
    `washingCarousel/${washing} (4).webp`,
    `washingCarousel/${washing} (5).webp`
  ]

  //Dynamic Data For washing machine
  const params = useParams();
  const company = params.name;
  
  const [machineData, setmachineData] = useState([]);
  useEffect(()=>{
    const getmachineData = async ()=>{
      let fetchMachine = await fetch(`${import.meta.env.VITE_REACT_APP}/get/washing/service`,{
        method:'get',
        headers:{
            'Content-Type':'application/json'
        }
      });
      fetchMachine = await fetchMachine.json();
      // console.log(fetchMachine.getmachineService)
      setmachineData(fetchMachine.getmachineService)

    }
    getmachineData();
  });

  const filteredCompany = machineData.filter((item)=>item.companyName === company);


  const navigate = useNavigate()
  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />

      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        {
          filteredCompany?.map((item,i)=>{
            return (
              <CardSection key={item._id} charges={item.charges} companyName={item.companyName} image={item.image} description={item.description} rating={item.rating} onClick={() => navigate('/washingMachine/Product_Detail')} />
            )
          })
        }
        
        {/* <CardSection onClick={() => navigate('/washingMachine/Product_Detail')} />
        <CardSection onClick={() => navigate('/washingMachine/Product_Detail')} />
        <CardSection onClick={() => navigate('/washingMachine/Product_Detail')} />
        <CardSection onClick={() => navigate('/washingMachine/Product_Detail')} />
        <CardSection onClick={() => navigate('/washingMachine/Product_Detail')} /> */}
      </div>
      <Footer />
    </div>
  )
}

export default WashingMachinePage
