import React from 'react'
import Hero from '../components/hero'
import Latestproduct from '../components/latestproduct'
import Bestseller from '../components/bestseller'
import Ourpolicy from '../components/ourpolicy'
import Newslatterbox from '../components/Newslatterbox'

function Home() {
  return (
    <div>
        <Hero/>
        <Latestproduct/>
        <Bestseller/> 
        <Ourpolicy/>
        <Newslatterbox/>
    </div>
  )
}

export default Home
