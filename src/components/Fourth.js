import React from 'react'
import './Fourth.css'
function Fourth() {
  return (
    <>
        <div id='fourth-page-first-heading'>Case Studies</div>
        <div id='fourth-page-second-heading'>Some of our recent work delivering enterprise success with WordPress.</div>
        <div className='fourth'>
            <div>
                <img src="https://rtcamp.com/wp-content/uploads/sites/2/2021/06/Google-Web-Stories-Embed-rtCamp-Featured-Image.png?w=1920&quality=100&strip=all"/>
            </div>
            <div className='fourth-page-second-part'>
                <div id='fourth-page-heading'>Building Embedded Web Stories for Wordpress</div>
                <div>rtCamp collaborated with Google to make the snackable Web Stories format even easier to consume with flexible WordPress blocks.</div>
                <a href="#">View Case Study</a>
            </div>
        </div>

        <div className='fourth'id='fourth-page'>
            <div>
                <img src="https://rtcamp.com/wp-content/uploads/sites/2/2021/05/migrating-dealertrack-from-aem-to-wordpress-case-study.png?w=1200&quality=100&strip=all"/>
            </div>
            <div className='fourth-page-second-part'>
                <div id='fourth-page-heading'>Migrating Dealertrack from AEM to Wordpress</div>
                <div>By implementing a No-Code page editing experience, rtCamp empowered the marketing team to take full control of the content pipeline, resulting in a 50% reduction in the time it takes for landing pages to go live.</div>
                <a href="#">View Case Study</a>
            </div>
        </div>

    </>
  )
}

export default Fourth
