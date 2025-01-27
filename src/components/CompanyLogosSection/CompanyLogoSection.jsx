import React from 'react'
import './CompanyLogos.css'

const companyLogoSection = () => {
    const companyLogos = [
        { logo: 'images/companyLogo1.png' },
        { logo: 'images/companyLogo2.png' },
        { logo: 'images/companyLogo3.png' },
        { logo: 'images/companyLogo4.png' },
        { logo: 'images/companyLogo5.png' },
        { logo: 'images/companyLogo6.png' }
    ]
    return (
        <div className='company-logos'>
            {
                companyLogos.map((logo, index) => {
                    return (
                        <img src={logo.logo} key={index} alt='company-logo' className='company-logo-image' />)
                })
            }
        </div>
    )
}

export default companyLogoSection