import React, { Component } from 'react'
import { Circles } from 'react-loader-spinner'
export class Spinner extends Component {
    render() {
        return (
            

            <div className="text-center">
                <Circles
                    height="80"
                    width="80"
                    color="#0d6efd"
                    ariaLabel="circles-loading"
                    wrapperStyle={{position: "fixed", top: "40%", left: "45%", transform: "translate(-0%, -50%)"}}
                    wrapperClass=" wrapperStyle"
                    visible={true}
                />
                <h2 style={{color:"#0d6efd",position: "fixed", top: "52%", left: "44%", transform: "translate(-0%, -50%)"}}>Loading... </h2>
            </div>
        )
    }
}
export default Spinner
