import React from 'react'
import './VideoSection.css'
import { FcIdea } from "react-icons/fc";
import { TbDeviceDesktopShare } from "react-icons/tb";
const VideoSection = () => {
    return (
        <div className='video-section-container'>
            <div className='video-content'>
                <h1 >0ur Video Introductions</h1>
                <p className='video-description'>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.</p>
                <div className='video-idea'>
                    <div className='video-icon'><FcIdea size={30} /> </div>
                    <div className='video-content'>
                        <h3>Explore ideas together</h3>
                        <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                    </div>
                </div>
                <div className='video-idea'>
                    <div className='video-icon'><TbDeviceDesktopShare size={30} color='white' /> </div>
                    <div className='video-content'>
                        <h3>Bring those ideas to life</h3>
                        <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                    </div>
                </div>
            </div>

            <div>
                <img src='images/video.png' alt='video' height={420} className='video-img' />
            </div>
        </div>
    )
}

export default VideoSection