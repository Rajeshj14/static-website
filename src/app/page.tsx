import HelpSection from '@/component/backgroundimage'
import Banners from '@/component/Banner'
import CraftsmanshipSection from '@/component/banner_page'
import CardsSection from '@/component/CardTest'
import HeadstoneCarde from '@/component/classic_series'
import HeadstoneCarded from '@/component/laser'
import HeadstoneCardeds from '@/component/white_marble'
import React from 'react'

const App = () => {
  return (
    <div>
      
      <Banners />
      <CardsSection />
      <HeadstoneCarded />
      <HeadstoneCarde/>
      <HeadstoneCardeds />
      <CraftsmanshipSection />
      <HelpSection />
    </div>
  )
}

export default App
