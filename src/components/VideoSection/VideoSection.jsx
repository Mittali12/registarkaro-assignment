import React from 'react'
import './VideoSection.css'
import { FcIdea } from "react-icons/fc";
import { TbDeviceDesktopShare } from "react-icons/tb";

const VideoSection = () => {
    const videoId = "https://www.youtube.com/embed/lYO6FqbN3-s?si=4u3TBh8p8i00B6f7";
    
    return (
        <div className='video-section-container'>
            <div className='video-text-content'>
                <h1>Our Video Introductions</h1>
                <p className='video-description'>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.</p>
                
                <div className='video-idea'>
                    <div className='video-icon'><FcIdea size={30} /></div>
                    <div className='video-text'>
                        <h3>Explore ideas together</h3>
                        <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                    </div>
                </div>

                <div className='video-idea'>
                    <div className='video-icon'><TbDeviceDesktopShare size={30} color='white' /></div>
                    <div className='video-text'>
                        <h3>Bring those ideas to life</h3>
                        <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                    </div>
                </div>
            </div>

            <div className='video-frame-container'>
                <iframe
                    src={videoId}
                    title="register karo video"
                    className='video-play'
                    allow="autoplay; encrypted-media"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default VideoSection;
