import React, { Component } from 'react'
import '../loder.css'

export class Loder extends Component {
    render() {
        return (
            <>
                <div className="text-center">
                    <div className="spinner-border" role="status"></div>
                    <span className="visually-hidden">Loading.....</span>
                </div>
                <div className=" container loading-wrapping">
		        <div className="bar one"></div>	
		        <div className="bar two"></div>
		        <div className="bar three"></div>
	            </div>
            </>
        )
    }
}

export default Loder
