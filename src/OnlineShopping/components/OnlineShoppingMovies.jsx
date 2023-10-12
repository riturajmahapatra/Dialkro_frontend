import React from 'react'
import Nav from '../../components/Navbar/Nav'
import Footer from '../../components/Footer/Footer'
import DropdownMenu from './DropdownComponent'
import Card from '../../components/Card'
import { faker } from '@faker-js/faker'
import Section from '../../components/Section'

const OnlineShoppingMovies = () => {
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
      <Nav services={`Movies`} />
      <div className=" flex flex-wrap items-center justify-center gap-10 overflow-hidden max-lg:grid max-lg:grid-cols-2 ">
        <DropdownMenu
          prompt={'Genres'}
          image={'/onlineshoppingCarousel/genre.PNG'}
          options={[
            'Action',
            'Adventure',
            'Comedy',
            'Drama',
            'Horror',
            'Science Fiction',
            'Fantasy',
            'Romance',
            'Thriller',
            'Animation',
            'Documentary',
            'Mystery',
            'Crime',
            'Family',
            'Musical',
            'War',
            'Western',
            'Biography',
            'History',
            'Sport'
          ]}
        />

        <DropdownMenu
          prompt={'Popular Movies'}
          image={'/onlineshoppingCarousel/popular.PNG'}
          options={[
            'Top Rated',
            'New Releases',
            'Box Office Hits',
            'Classic Movies',
            'Award-Winning Films',
            'Cult Favorites'
          ]}
        />

        <DropdownMenu
          prompt={'Movie Format'}
          image={'/onlineshoppingCarousel/4k.PNG'}
          options={['DVD', 'Blu-ray', '4K Ultra HD', 'Digital Download', "Collector's Editions"]}
        />

        <DropdownMenu
          prompt={'Movie Merchandise'}
          image={'/onlineshoppingCarousel/merch.PNG'}
          options={[
            'Posters',
            'T-Shirts',
            'Mugs',
            'Figurines',
            'Collectibles',
            'Movie Soundtracks'
          ]}
        />
      </div>
      <div className="my-10 flex items-center justify-center">
        <img src="/onlineshoppingCarousel/frames/Frame 14.jpg" alt="alt" className="mt-20" />
      </div>
      <div className=" flex w-full flex-col items-center justify-center gap-10">
        <Section FirstHeading="Trending Movies" cards={cards} isCardCarousel={true} />
      </div>
      <Footer />
    </>
  )
}

export default OnlineShoppingMovies
