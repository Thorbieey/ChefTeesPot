import React from 'react'
import BannerSection from './sections/bannerSection'
import CallToAction from './sections/callToAction'
import EventDetail from './sections/eventDetail'
import FoodMenu from './sections/foodMenu'
import FoodCarousel from './sections/foodCarousel'
import DrinkMenu from './sections/drinkMenu'
import DrinkCarousel from './sections/drinkCarousel'
import ContactUsSection from './sections/contactUsSection'
import Footer from './sections/footer'


const Page = () => {
  return (
    <div className='hide-scrollbar h-screen w-full'>
      <BannerSection />
      <CallToAction/>
      <EventDetail />
      <FoodMenu />
      <FoodCarousel />
      <DrinkMenu />
      <DrinkCarousel />
      <ContactUsSection />
      <Footer />
    </div>
  )
}

export default Page