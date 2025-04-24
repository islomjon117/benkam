import React from 'react'
import Header from '../components/header/Header'
import About from '../components/about/About'
import Services from '../components/sevices/Services'
import LastProjects from '../components/last_projects/LastProjects'
import Testimosnials from '../components/testimosnials/Testimosnials'
import History from '../components/ourhistory/History'
import LatestNews from '../components/latest_news/LatestNews'
import Quastions from '../components/quastions/Quastions'

const Homepage = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Services/>
      <LastProjects/>
      <Testimosnials/>
      <History/>
      <LatestNews/>
    </div>
  )
}

export default Homepage