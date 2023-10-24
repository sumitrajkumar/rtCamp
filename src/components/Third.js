import React from 'react'
import './Third.css'
function Third() {
    return (
        <>
            <div className="third">
                <div className='third-page-first-part'>
                    <div id='third-page-heading'>What's New?</div>
                    <div>Web is becoming more private with Privacy Sandbox.</div>
                    <div>Learn the impact of third-party cookies deprecation, explore privacy-friendly alternatives, the analysis tool we are building with Google, and how we can help you.</div>
                    <button id="third-page-button">Privacy Sandbox</button>
                </div>
                <div className='third-page-second-part'>
                    <img src="	https://rtcamp.com/wp-content/uploads/sites/2/2023/09/Whats-new.svg" width="400" alt="whats-new" />
                </div>
            </div>
        </>
    )
}

export default Third
