import React from 'react'
import Nav from '../../components/Navbar/Nav'
import Footer from '../../components/Footer/Footer'
import DropdownMenu from './DropdownComponent'
import Card from '../../components/Card'
import { faker } from '@faker-js/faker'
import Section from '../../components/Section'

const OnlineShoppingClothing = () => {
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
      <Nav services={`Fashion`} />
      <div className=" flex flex-wrap items-center justify-center gap-10 overflow-hidden max-lg:grid max-lg:grid-cols-2 ">
        <DropdownMenu
          prompt={"Men's Clothing"}
          image={'/onlineshoppingCarousel/menswear.PNG'}
          options={[
            'T-Shirts',
            'Shirts',
            'Jeans',
            'Trousers',
            'Suits',
            'Jackets',
            'Sweaters',
            'Activewear',
            'Sleepwear'
          ]}
        />

        <DropdownMenu
          prompt={"Women's Clothing"}
          image={'/onlineshoppingCarousel/womenswear.PNG'}
          options={[
            'Ladies Suit',
            'Saree',
            'Salwars',
            'Dresses',
            'Tops',
            'Bottoms',
            'Outerwear',
            'Swimwear',
            'Activewear',
            'Lingerie',
            'Sleepwear'
          ]}
        />

        <DropdownMenu
          prompt={"Kids' Clothing"}
          image={'/onlineshoppingCarousel/kidswear.PNG'}
          options={["Boys' Clothing", "Girls' Clothing", 'Baby Clothing', 'Accessories']}
        />

        <DropdownMenu
          prompt={'Footwear'}
          image={'/onlineshoppingCarousel/footwear.PNG'}
          options={[
            "Men's Shoes",
            "Women's Shoes",
            "Kids' Shoes",
            'Sports Shoes',
            'Casual Shoes',
            'Boots',
            'Sandals',
            'Slippers'
          ]}
        />

        <DropdownMenu
          prompt={'Accessories'}
          image={'/onlineshoppingCarousel/watches.PNG'}
          options={[
            'Bags',
            'Watches',
            'Jewelry',
            'Hats',
            'Sunglasses',
            'Belts',
            'Scarves',
            'Gloves'
          ]}
        />
      </div>
      <div className="my-10 flex items-center justify-center">
        <img src="/onlineshoppingCarousel/frames/Frame 9.jpg" alt="alt" className="mt-20" />
      </div>
      <div className=" flex w-full flex-col items-center justify-center gap-10">
        <Section FirstHeading="Fashion Fiesta" cards={cards} isCardCarousel={true} />
      </div>
      <Footer />
    </>
  )
}

export default OnlineShoppingClothing
