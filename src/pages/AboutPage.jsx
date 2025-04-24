import React from 'react'
import Aboutcom from '../components/about_company/Aboutcom'
import Resualts from '../components/ourResualts/Resualts'
import Testimosnials from '../components/testimosnials/Testimosnials'
import AboutHis from '../components/about_history/AboutHis'
import Faq from '../components/faq/Faq'
import Partners from '../components/partners/Partners'


const AboutPage = () => {
  return (
    <>
      <Aboutcom/>
      <Resualts/>
      <Testimosnials/>
      <AboutHis/>
      <Faq/>
      <Partners/>
    </>
  )
}

export default AboutPage