import React, { useEffect, useState } from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel';
import { useParams } from 'react-router-dom';

const AcRepairPage = ({acInfo}) => {

  
  const ac = 'ac'

  const images = [
    `ACCarousel/${ac} (1).webp`,
    `ACCarousel/${ac} (2).webp`,
    `ACCarousel/${ac} (3).webp`,
    `ACCarousel/${ac} (4).webp`,
    `ACCarousel/${ac} (5).webp`
  ]

 

  const navigate = useNavigate();

  // dynamic data for ac Repairing
  const params = useParams();
  const company = params.name;
  
  const [repairData, setrepairData] = useState([]);

  

  useEffect(()=>{
    const getAc = async ()=>{
      let fetchAc = await fetch(`${import.meta.env.VITE_REACT_APP}/get/acrepair/service`,{
        method:'get',
        headers:{
          'Content-Type': 'application/json'
        }
      });
      fetchAc = await fetchAc.json();
      // console.log(fetchAc.gotAcService);
      setrepairData(fetchAc.gotAcService);
     
    }
    getAc();
  },[])

  
 const filteredData = repairData.filter((item)=>item.companyName === company);
//  console.log(filteredData)

        
  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />

      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        {
          filteredData?.map((item,i)=>{
            return (
              <CardSection
               companyName={item.companyName}
                image={item.image}
                 rating={item.rating}
                  description={item.description}
                   onClick={() => navigate('/acRepairPage/Product_Detail')}
                   />
            )
          })
        }
        
        {/* <CardSection onClick={() => navigate('/acRepairPage/Product_Detail')} />
        <CardSection onClick={() => navigate('/acRepairPage/Product_Detail')} />
        <CardSection onClick={() => navigate('/acRepairPage/Product_Detail')} />
        <CardSection onClick={() => navigate('/acRepairPage/Product_Detail')} />
        <CardSection onClick={() => navigate('/acRepairPage/Product_Detail')} /> */}
      </div>
      <Footer />
    </div>
  )
}

export default AcRepairPage
