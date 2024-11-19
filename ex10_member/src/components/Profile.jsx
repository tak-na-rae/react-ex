import '../styles/Profile.css';

import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import {FaBars, FaStickyNote, FaEnvelope, FaFacebookF} from 'react-icons/fa';

const profiles = {
  member1: { //member1, member2 등의 key는 해당 멤버의 프로필 스타일을 설정
    title: "Member1111",
    backgroundColor: "#ebfaff",
    imgShadow: "5px 15px 30px rgba(173,216,230,.8)",
    btnBg: "linear-gradient(45deg, #4affff, #35e0f7)",
    btnShadow: "5px 10px 20px rgba(0,255,255,.4)",
    iconColor: "#35e0f7",
  },
  member2: {
    title: "Member2222",
    backgroundColor: "#edffeb",
    imgShadow: "5px 15px 30px rgba(189,204,183,.8)",
    btnBg: "linear-gradient(45deg, #a0ff9d, #55f5b2)",
    btnShadow: "5px 10px 20px rgba(33,250,105,.3)",
    iconColor: "#55f5b2",
  },
  member3: {
    title: "Member3333",
    backgroundColor: "#fff3fd",
    imgShadow: "5px 15px 30px rgba(252,99,214,.2)",
    btnBg: "linear-gradient(45deg, #ef74ff, #ff11c4)",
    btnShadow: "5px 10px 20px rgba(255,17,196,.4)",
    iconColor: "#ff11c4",
  },
  member4: {
    title: "Member4444",
    backgroundColor: "#f5f0ff",
    imgShadow: "5px 15px 20px rgba(183,82,250,.2)",
    btnBg: "linear-gradient(45deg, #8e74ff, #a011ff)",
    btnShadow: "5px 10px 20px rgba(160,17,255,.4)",
    iconColor: "#a011ff",
  },
}
const Profile = ({member}) => { //App컴포넌트에서 member라는 props를 받아옴
  const [profile, setProfile] = useState(profiles.member1);
  return (
    <>
      <div className="profile_container" style={{backgroundColor:profile.backgroundColor}}>
        <section>
          <nav className="menu">
            <Link to="#">
              <FaBars style={{color:profile.iconColor}}/>
            </Link>
            <Link to="#">
              <FaStickyNote style={{color:profile.iconColor}}/>
            </Link>
          </nav>
          {/* 프로필 이미지, 텍스트, 이미지 경로는 props({member})에 따라 바뀜 */}
          <article className="profile">
            <img src={`img/${member}.jpg`} style={{boxShadow:profile.imgShadow}}/>
            <h1>{profile.title}</h1>
            <h2>UI/UX INTERACTIVE DEVELOPER</h2>

            {/* Link 컴포넌트를 버튼으로 스타일링, profile객체에 따라 스타일 적용 */}
            <Link to="#" className="btnView"
            style={{background:profile.btnBg, btnShadow:profile.btnShadow}}>VIEW MORE</Link>
          </article>
          <ul className="contact">
            <li>
              <FaEnvelope style={{color:profile.iconColor}}/>
              <span>Visit My Facebook page!</span>
              </li>
            <li>
              <FaFacebookF style={{color:profile.iconColor}}/>
              <span>example.naver.com</span>
            </li>
          </ul>
          <nav className="others">
            {Object.keys(profiles).map(m => {
              // 현재 순회중인 key 값이 member1일 경우,
              // key = member1, to={member1}, className=on, style={{background:profiles[member1].iconColor,..}}
              <Link key={m} to={`/${m}`} className={member == m}/>
            })}
          </nav>
        </section>
      </div>
    </>
  )
}

export default Profile;