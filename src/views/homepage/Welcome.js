import React from 'react'
import Aboutmessaging from './Aboutmessaging'
import Servicemessaging from './Servicemessaging'
import Contact from './Contact'
import WelcomeNav from './WelcomeNav'
import WelcomeHeroSection from './WelcomeHeroSection'


function Welcome() {
  return (
    <div data-spy="scroll" data-target="#mainNav">
      {/** combines nav and banner */}
      <WelcomeNav/>
      <WelcomeHeroSection/>
      <Aboutmessaging/>
      <Servicemessaging/>
      <Contact/>
    </div>

  )
}

export default Welcome