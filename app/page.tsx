import React from 'react'
import BannerSection from './sections/bannerSection'
import CallToAction from './sections/callToAction'
import EventDetail from './sections/eventDetail'
import FoodMenu from './sections/foodMenu'
import MenuCarousel from './sections/menuCarousel'
import DrinkMenu from './sections/drinkMenu'
import ContactUsSection from './sections/contactUsSection'
import Footer from './sections/footer'
import { foodCarouselImgs, drinkCarouselImgs } from "./constants";


const Page = () => {
  return (
    <div className='hide-scrollbar h-screen w-full bg-black/90'>
      <BannerSection />
      <CallToAction/>
      <EventDetail />
      <FoodMenu />
      <MenuCarousel images={foodCarouselImgs} />
      <DrinkMenu />
      <MenuCarousel images={drinkCarouselImgs} />
      <ContactUsSection />
      <Footer />
    </div>
  )
}

export default Page