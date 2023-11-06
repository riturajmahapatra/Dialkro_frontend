import React, { useEffect, useState } from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel'
import { useParams } from 'react-router-dom'
const WeddingServices = () => {
  const navigate = useNavigate()

  const category = 'hospital' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`,
    `${category}Carousel/${category}4.webp`
  ]

  // Dynamic data for Events
  const [Event, setEvent] = useState([])
  const params = useParams()
  const event = params.name

  useEffect(() => {
    const geteventData = async () => {
      let fetcheventData = await fetch(`${import.meta.env.VITE_REACT_APP}/get/event/info`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      fetcheventData = await fetcheventData.json()
      // console.log(fetcheventData.gettingEvent);
      setEvent(fetcheventData.gettingEvent)
    }
    geteventData()
  })

  const filteredEvent = Event.filter((item) => item.eventName === event)

  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        {filteredEvent?.map((item, i) => {
          return (
            <CardSection
              key={item._id}
              image={item.image}
              charges={item.charges}
              eventName={item.eventName}
              price={item.price}
              rating={item.rating}
              description={item.description}
              onClick={() => navigate('/hospitals/Product_Detail')}
            />
          )
        })}

        {/* <CardSection onClick={() => navigate('/hospitals/Product_Detail')} />
        <CardSection onClick={() => navigate('/hospitals/Product_Detail')} />
        <CardSection onClick={() => navigate('/hospitals/Product_Detail')} />
        <CardSection onClick={() => navigate('/hospitals/Product_Detail')} /> */}
      </div>
      <Footer />
    </div>
  )
}

export default WeddingServices
