import React, { Component } from 'react';
import './index.sass';
import pic from "../acquainted/pic.jpg";


class Acquainted extends Component {
    render() {
        return (
        <div className="container">
            <div className="acquainted">
                <h2 className="acquainted__title">Let's get acquainted</h2>
                <div className="acquainted__content">
                    <div className="acquainted__picture">
                        <img src={pic} alt="pic"></img>
                    </div>
                    <div className="acquainted__desc">
                        <h3 className="acquainted__subtitle">I am cool frontend developer</h3>
                        <div className="acquainted__text">
                            <p>When real users have a slow experience on mobile, they're much less likely to find what they
                                are looking for or purchase from you in the future. For many sites this equates to a huge missed
                                opportunity, especially when more than half of visits are abandoned if a mobile page takes
                                over 3 seconds to load.
                            </p>
                            <p>
                               Last week, Google Search and Ads teams announced two new speed initiatives to help improve
                               user-experience on the web.
                            </p>
                        </div>
                        <a href="#" className="acquainted__btn">Sign Up</a>

                    </div>
                </div>

            </div>

        </div>

        );
    }
}

export default Acquainted;