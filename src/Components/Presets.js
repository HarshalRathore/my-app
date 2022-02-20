import React from 'react'
import { ReactComponent as ReactLogo } from '../svg/iPhone13.svg';
import "../Presets.css"
import Rectangle from '../svg/Rectangle.svg';

// export const Presets = () => {
//     return (
//         <div className='container' >
//             <div className="suffix">
//                 <h1 id='suffix' >Simplistic way to ace Employee engagement and Financial wellness with <span id="suffix-rai">Rewards and Incentives</span> </h1>
//                 <div className="sub-suffix">
//                     <p>SaaS-based reward and recognition platform that is easy to use and makes the employee engagement process easy, fun, cost-effective.</p>
//                 </div>
//                 <img src={Rectangle} alt="" />
//             </div>
//             <ReactLogo />

//         </div>
//     )
// }

export default function Presets() {
    return (
        <div className='container' >
            <div className="suffix">
                <h1 id='suffix' >Simplistic way to ace Employee engagement and Financial wellness with <span id="suffix-rai">Rewards and Incentives</span> </h1>
                <div className="sub-suffix">
                    <p>SaaS-based reward and recognition platform that is easy to use and makes the employee engagement process easy, fun, cost-effective.</p>
                </div>
                <img src={Rectangle} alt="" />
            </div>
            <ReactLogo />

        </div>
    )
}

