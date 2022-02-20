import React from "react";

export const Aboutus = () => {
    const h1 = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#2c3e50',
        textAlign: 'center',
        paddingTop: '5rem',
        paddingRight: '10rem',
        paddingLeft: '10rem',

    }
    const h1div = {
        width: '100%',
        height: '91vh',
        backgroundColor: '#bcbcfc',
    }
    const h2 = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: 'rgb(255 166 0)',
        textAlign: 'center',
        paddingTop: '5rem',
        paddingRight: '10rem',
        paddingLeft: '10rem',
    }
    const h2our = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: 'rgb(255 166 0)',
        textAlign: 'center',
        // paddingTop: '5rem',
        // paddingRight: '10rem',
        // paddingLeft: '10rem',
    }
    return (
        <>
            <div style={h1div} >
                {/* <h1 style={h2our}>Our</h1> */}
                <h1 style={h2}>Our Mission</h1>
                <h1 style={h1} >Deliver program which connect and benefit both the brands and organization's client /employees. We intend to provide an end to end solution to facilitate meaningful client & employee engagement through exclusive privileges and rewards provide by our brand partners.</h1>
            </div>
            <h1 style={h1}>Meet our founder</h1>
            <div className="container-fluid column">
                <div className="card-columns">
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title that wraps to a new line</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div className="card p-3">
                        <blockquote className="blockquote mb-0 card-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card bg-primary text-white text-center p-3">
                        <blockquote className="blockquote mb-0">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                            <footer className="blockquote-footer">
                                <small>
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </div>
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img" src="..." alt="Card image" />
                    </div>
                    <div className="card p-3 text-right">
                        <blockquote className="blockquote mb-0">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer className="blockquote-footer">
                                <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}