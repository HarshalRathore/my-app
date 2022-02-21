import React from 'react'
import PropTypes from 'prop-types'
import Benefits from '../svg/benefits.svg'
import '../Benefits.css'
import Logo from '../logo139.svg'

export const Benifits = (props) => {
    return (
        <>
            <div className="container-fluid d-flex justify-content-center pt-5 h5 text-warning">
                BENEFITS
            </div>
            <div style={{ color: 'purple' }} className="container-fluid d-flex justify-content-center h2">
                Why Employee Perk ?
            </div>
            <div className="name"><h1>Rewards and recognision</h1></div>
            <div className="text">Employee recognision program That drives the business growth. An experience that is fun, timely and reinforces the right employment empowerment.</div>
            <div className="tax">Tax free Benifits</div>
            <div className="save"> Tax saving benefits upto Rs.75,000 with a Co-pay option available for higher value transactions.</div>
            <img id='gif' src={Benefits} alt="" />
            <div className="perks">Perks</div>
            <div className="poks">Exclusive corperate deals, discounts and cashback on 400+ brands all over India. Prioritaize the well being of employees by enabling savings with perks in every sphere of life.</div>
            <div className="advantage">Advantage card</div>
            <div className="adva-text">Meal, feul, communication, gifts and other digital tax benifits using out Razor card for hassle free tax benefits which can be used in 100+ outlets in India.</div>
            <div className="hexa-card"></div>
            <div className="need">NEED</div>
            <div className="why">Why Employee Benefit is important ?</div>
            <div className="box1 box"></div>
            <div className="box2 box"></div>
            <div className="box3 box"></div>
            <div className="box4 box"></div>
            <div className="box5 box"></div>
            <div className="box6 box"></div>
            <h1 className='box1-h'>5x</h1>
            <h1 className='box2-h'>40%</h1>
            <h1 className='box3-h'>7%</h1>
            <h1 className='box4-h'>20%</h1>
            <h1 className='box5-h'>10%</h1>
            <h1 className='box6-h'>15%</h1>
            <h2 className="box1-h2">Employee Engagement</h2>
            <h2 className="box2-h2">Increased
                Participation</h2>
            <h2 className="box3-h2">Reduced
                Absenteeism</h2>
            <h2 className="box4-h2">Incresed peer-to-peer recognition</h2>
            <h2 className="box5-h2">Boost in work
                culture</h2>
            <h2 className="box6-h2">Increase in Employee loyalty</h2>
            <div className="partner">OUR PARTENERS IN EXPANSION</div>
            <div className="runn">Running successfully with 50+ Indian Companies</div>
            <div className="divider"></div>
            <div className="vertical-divider1"></div>
            <div className="vertical-divider2"></div>
            <div className="vertical-divider3"></div>
            <div className="vertical-divider4"></div>
            <div className="test">TESTIMONIALS</div>
            <div className="testimonial">Words from our customers</div>
            <div className="monial-cont"></div>
            <div className="monial-text">“Great rewards and have a excellent customer service.”</div>
            <div className="band">BRAND PARTNERS</div>
            <div className="bandman">Providing best with 500+ Brand partners</div>
            <div className="partners"></div>
            <div className="footer"></div>
            <img src={Logo} id="footer-logo"alt="" />
            <div className="footer-comp">{props.title}</div>
            <div className="footer-text">We envision a world where employees are highly engaged and very happy at their work. Join us in our journey today!</div>
            <div className="startup"></div>
            <div className="download">Download the App</div>
            <div className="download-txt">Takes just 30sec to download !</div>
            <div className="playstore"></div>
            <div className="appstore"></div>
        </>
    )
}

Benifits.propTypes = {
    title: PropTypes.string
}
