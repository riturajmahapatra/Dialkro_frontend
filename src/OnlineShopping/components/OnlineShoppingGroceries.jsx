import React from 'react'
import Nav from '../../components/Navbar/Nav'
import Footer from '../../components/Footer/Footer'
import DropdownMenu from './DropdownComponent'
import Card from '../../components/Card'
import { faker } from '@faker-js/faker'
import Section from '../../components/Section'

const OnlineShoppingGroceries = () => {
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
      <Nav services={`Groceries`} />
      <div className=" flex flex-wrap  items-center justify-center gap-10 overflow-hidden max-lg:grid max-lg:grid-cols-2 ">
        <DropdownMenu
          prompt={'Staples'}
          image={'/onlineshoppingCarousel/grocery 1.png'}
          options={[
            'Dals & Pulses',
            'Ghee & Oils',
            'Aata Besan & Sooji',
            'Masalas',
            'Rice Products',
            'Dry Fruits and Seeds',
            'Sugar, Jaggery & Salt'
          ]}
        />

        <DropdownMenu
          prompt={'Packaged Foods'}
          image={'/onlineshoppingCarousel/packaged 1.png'}
          options={[
            'Breakfast Cereals',
            'Noodles & Pasta',
            'Ketchups & Spreads',
            'Chocolates & Sweets',
            'Jams & Honey',
            'Pickles & Chutney',
            'Ready to Cook',
            'Vinegar',
            'Baking Powder'
          ]}
        />
        <DropdownMenu
          prompt={'Snacks & Beverage'}
          image={'/onlineshoppingCarousel/snacks 1.png'}
          options={[
            'Biscuits',
            'Chips, Namkeen & Snacks',
            'Tea & Coffee',
            'Juices',
            'Health Drink Mix',
            'Soft Drinks',
            'Instant Drinks Mixes',
            'Squash & Syrups',
            'Water'
          ]}
        />
        <DropdownMenu
          prompt={'Daily Needs'}
          image={'/onlineshoppingCarousel/dialy-needs.PNG'}
          options={['Soaps & Baby Wash', 'Butter', 'Eggs', 'Hair Care', 'Oral Care']}
        />
      </div>
      <div className="my-10 flex items-center justify-center">
        <img src="/onlineshoppingCarousel/frames/Frame 16.jpg" alt="alt" className="mt-20" />
      </div>
      <div className=" flex w-full flex-col items-center justify-center gap-10">
        <Section FirstHeading="Fresh Groceries" cards={cards} isCardCarousel={true} />
      </div>
      <Footer />
    </>
  )
}

export default OnlineShoppingGroceries
