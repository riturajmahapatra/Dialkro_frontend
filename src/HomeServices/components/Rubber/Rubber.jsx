import React, { useEffect, useState } from 'react'
import Nav from '../../../components/Navbar/Nav'
import Footer from '../../../components/Footer/Footer'
import BannerCarousel from '../../../components/Body/Carousel/BannerCarousel'
import AlignmentSubCards from '../../../components/ui/AlignmentSubCard'
import { useNavigate } from 'react-router-dom'

const Rubber = () => {
  const navigate = useNavigate()
  const category = 'b2b' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`
  ]

  // Dynamic Data for Rubber Tyre
  const [tyre, settyre] = useState([])
  const [searchVal, setsearchVal] = useState('')
  const [viewMore , setviewMore] = useState(4);

  useEffect(() => {
    const getRubber = async () => {
      let fetchRubber = await fetch(`${import.meta.env.VITE_REACT_APP}/get/b2b/rubber/tyre`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      fetchRubber = await fetchRubber.json()
      // console.log(fetchRubber)
      settyre(fetchRubber.gotTyre)
    }
    getRubber()
  }, [])

  const filterRubber = tyre.filter((item) =>
    item.rubberCategory.toLowerCase().includes(searchVal.toLowerCase())
  )

  // handle View more
  const handleViewmore = ()=>{
    setviewMore((prevCount)=>prevCount + 5)
  }

  return (
    <div>
      <Nav services={`Services`} />
      <BannerCarousel images={images} />
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-5">
        <p>{searchVal}</p>
        <input
          type="text"
          value={searchVal}
          onChange={(e) => setsearchVal(e.target.value)}
          className="rounded border outline-none"
          placeholder="Search Category ...."
        />
        <div className=" grid items-center justify-center gap-7 max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filterRubber?.slice(0, viewMore).map((item, i) => {
            return (
              <AlignmentSubCards
                
                image={item.image}
                prompt={item.rubberCategory}
                onClick={(`/rubberpage/${item.rubberCategory}`)}
              />
            )
          })}
        </div>

        {
          tyre.length > viewMore && 
          <div>
            <button onClick={handleViewmore} className='bg-blue-500 text-white font-bold px-6 py-2 rounded hover:bg-blue-400 duration-200'>View More</button>
          </div>
        }
      </div>
      <Footer />
    </div>
  )
}

export default Rubber
