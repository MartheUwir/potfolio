import React from 'react'
import {BsGithub, BsLinkedin,BsFacebook,BsTwitter} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/uwiringiyimana-marthe-a66326227/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><BsGithub/></a>
        <a href="https://www.facebook.com/photo/?fbid=110870445227252&set=a.110870468560583" target="_blank"><BsFacebook/></a>
        <a href="https://Twitter.com" target="_blank"><BsTwitter/></a>
       
    </div>
  )
}

export default HeaderSocials