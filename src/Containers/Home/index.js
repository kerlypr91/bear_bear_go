import React from 'react'

import SearchSection from '../SearchSection'
import ResultsSection from '../ResultsSection'
import Footer from '../../Components/Footer'

import './style.scss'

export default function Home () {
  return (
    <main className="home">
      <h1 className="home__header">BearBearGo</h1>
      <SearchSection />
      <ResultsSection />
      <Footer />
    </main>
  )
}