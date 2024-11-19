import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import Webd from '../components/contents/Webd'
import Website from '../components/contents/Website'
import Portfolio from '../components/contents/Portfolio'
import Youtube from '../components/contents/Youtube'

const Home = () => {
  return (
    <Main
      title="나의 유튜브"
      description="제 유튜버 사이트에 오신 것을 환영합니다">
      <Today/>
      <Developer/>
      <Webd/>
      <Website/>
      <Portfolio/>
      <Youtube/>
    </Main>
  )
}

export default Home