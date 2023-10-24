import React from 'react'
import './Second.css'
function Second() {
    return (
        <>

            <div className='second'>



                <div className="second-page-first-part">
                    <p>Enterprise Web Solutions</p>
                    <div className="second-page-first-content">
                        <div>The open-source technologies at the center of all our work help you unlock operational efficiency, develop new capabilities, remove vendor lock-in, reskill your teams, and reduce TCO.</div>

                        <div> Our bespoke engineering solutions for Fortune 500 companies, government agencies, and household brands reach millions of people every day.</div>

                        <div>We're a distributed company, over 125 strong, and a WordPress VIP Gold agency partner.</div>
                    </div>
                    <img src="https://rtcamp.com/wp-content/uploads/sites/2/2023/09/Award.svg" alt="award" height="80" />
                </div>



                <div className="second-page-second-part">
                    <img src="	https://rtcamp.com/wp-content/uploads/sites/2/2021/03/google-logo-testimonials.svg" alt="google-logo" />

                    <div className="second-page-second-content">
                        "Partnering with rtCamp has been key to the success of several important projects for us. Their WordPress ecosystem insights, engineering expertise, user focus, and super high-quality output have been the perfect combination to complement our efforts in developing tooling for the WordPress ecosystem."
                    </div>

                    <div className='test-man'>
                        <div>
                            <img  src={require("./man.png")} width="140" height="100" alt="prof" id="man-image" />
                        </div>
                        <div>
                            <h4>Alberto Medina</h4>
                            <p>Developer Relations, Google</p>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Second
