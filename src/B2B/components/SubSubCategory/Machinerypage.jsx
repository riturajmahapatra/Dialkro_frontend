import React from 'react'
import { useEffect, useState } from 'react';
// import Nav from '../components/Navbar/Nav';
import Nav from '../../../components/Navbar/Nav';
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../../components/Footer/Footer'
import { Toaster } from 'react-hot-toast'
// import BannerCarousel from '../components/Body/Carousel/BannerCarousel'
import BannerCarousel from '../../../components/Body/Carousel/BannerCarousel'
// import CardSectionshop from './components/cardSectionshop';
import CardSectionshop from '../../components/cardSectionshop';
import { useParams } from 'react-router-dom';


const Machinerypage = () => {

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
    const [machinary , setmachinary] = useState([]);
    useEffect(()=>{
        const getMachinary = async ()=>{
            let fetchMachinary = await fetch(`${import.meta.env.VITE_REACT_APP}/get/b2b/agricultural/machine`,{
                method:'get',
                headers:{
                    'Content-Type' : 'application/json'
                }
            });
            fetchMachinary = await fetchMachinary.json();
            console.log(fetchMachinary);
            setmachinary(fetchMachinary.gotAgricultural);
        };
        getMachinary();
    },[])
  
    const filterMachinary = machinary.filter((item)=>item.machineName === part);
    
  return (
    <div>
        <Outlet />
      <Toaster />
      <Nav services={`B2B`} />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">

        {
          filterMachinary?.map((item,i)=>{
            return (
                <CardSectionshop
                key={item._id}
                rating={item.rating}
                 image={item.image}
                 toolName={item.toolName}
                 description={item.description}
                 companyName={item.companyName}
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

export default Machinerypage