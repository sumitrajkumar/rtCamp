import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <>
            <div className='footer_flexbox'>
                <div className="height" id="first-box">
                    <div id="new-font-main" >About rtCamp</div>
                    <div id="new-font">We deliver enterprise-grade web publishing and digital commerce using WordPress.</div>
                    <div id="first-footer">
                        <img src="https://rtcamp2-develop.go-vip.net/rtcamp/wp-content/uploads/sites/2/2021/01/VIP-Logo.svg" width="199" height="71" />
                    </div>
                </div>


                <div className='height-one'>

                <div className="height">
                    <div id="first-footer">Company</div>
                    <div className='hover'>Case Study</div>
                    <div className='hover'>Solutions</div>
                    <div className='hover'>Careers</div>
                    <div className='hover'>About Us</div>
                    <div className='hover'>Blog</div>
                    <div className='hover'>Contact</div>
                </div>


                <div className="height">
                    <div id="first-footer">Resource</div>
                    <div className='hover'>Tutorials</div>
                    <div className='hover'>Presskit</div>
                    <div className='hover'>rtLearn</div>
                    <div className='hover'>rtMeadia</div>
                    <div className='hover'>Easy Engine</div>
                </div>

                </div>

                <div className="height" id='first-box'>
                    <p id='first-footer'>Subscribe to our newsletter and get a few email updates every month.</p>
                    <input type='email' placeholder='Email'/>
                </div>


            </div>
            <div className="last">
                <div className="one">
                © rtCamp Inc., since 2009. All rights reserved.
                    </div>
                <div className="two">
                Terms of Service | Privacy Policy 
                </div>
            </div>
        </>
    )
}

export default Footer
