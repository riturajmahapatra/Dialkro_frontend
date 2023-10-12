import React from 'react'
import Nav from '../../components/Navbar/Nav'
import Footer from '../../components/Footer/Footer'
import DropdownMenu from './DropdownComponent'
import Card from '../../components/Card'
import { faker } from '@faker-js/faker'
import Section from '../../components/Section'

const OnlineShoppingFurniture = () => {
  function CardList() {
    const cards = []
    for (let i = 0; i < 10; i++) {
      cards.push(
        <Card
          id={i}
          heading={faker.commerce.productName()}
          description={faker.commerce.productDescription()}
          companyName={faker.company.buzzVerb()}
          image={faker.image.url()}
          price={faker.commerce.price()}
          rating={faker.number.float({ min: 1, max: 5, precision: 0.1 })}
          reviews={faker.number.int({ max: 10000 })}
        />
      )
    }
    return cards
  }
  const cards = CardList()
  return (
    <>
      <Nav services={`Furniture`} />
      <div className=" flex flex-wrap items-center justify-center gap-10 overflow-hidden max-lg:grid max-lg:grid-cols-2 ">
        <DropdownMenu
          prompt={'Seating Furniture'}
          image={'/onlineshoppingCarousel/chairs.PNG'}
          options={['Chairs', 'Sofas', 'Benches', 'Stools']}
        />

        <DropdownMenu
          prompt={'Tables'}
          image={'/onlineshoppingCarousel/desk.PNG'}
          options={[
            'Dining Tables',
            'Coffee Tables',
            'End Tables',
            'Console Tables',
            'Desks',
            'Nightstands'
          ]}
        />

        <DropdownMenu
          prompt={'Storage Furniture'}
          image={'/onlineshoppingCarousel/storage.PNG'}
          options={['Cabinets', 'Dressers', 'Wardrobes', 'Bookshelves', 'Buffets and Sideboards']}
        />

        <DropdownMenu
          prompt={'Beds'}
          image={'/onlineshoppingCarousel/beds.PNG'}
          options={[
            'Bed Frames',
            'Mattresses',
            'Headboards and Footboards',
            'Bunk Beds',
            'Canopy Beds'
          ]}
        />

        <DropdownMenu
          prompt={'Outdoor Furniture'}
          image={'/onlineshoppingCarousel/bench.PNG'}
          options={['Patio Sets', 'Outdoor Sofas', 'Sun Loungers', 'Adirondack Chairs', 'Hammocks']}
        />

        <DropdownMenu
          prompt={"Children's Furniture"}
          image={'/onlineshoppingCarousel/craddle.PNG'}
          options={['Cribs', 'Changing Tables', "Kids' Beds", 'Playroom Furniture']}
        />
      </div>
      <div className="my-10 flex items-center justify-center">
        <img src="/onlineshoppingCarousel/frames/Frame 12.jpg" alt="alt" className="mt-20" />
      </div>
      <div className=" flex w-full flex-col items-center justify-center gap-10">
        <Section FirstHeading="Trendy Furnitures" cards={cards} isCardCarousel={true} />
      </div>
      <Footer />
    </>
  )
}

export default OnlineShoppingFurniture
