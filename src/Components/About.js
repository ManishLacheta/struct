import React, { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color:'black',
        backgroundColor: 'white'
    }) 

    const [btntext, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if(myStyle.color === 'black'){
            setMyStyle({
                 color:'white',
                 backgroundColor: 'black',
                 border: "1px solid white"
            })
            setBtnText("Enable Light Mode")
        }else{
            setMyStyle({
                color:'black',
                backgroundColor: 'white'
           })
           setBtnText("Enable Dark Mode");

        }
    }

  return (
        <div className='container' style={myStyle}>
            <h2 className='my-3'>About Us</h2>
            <div className="accordion" id="accordionExample" >
                
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion item  #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong> This is first item </strong> good night every one i am manish lacheta from borud manawar currentlt living in indore for my b std pursuing btech in final year from sushila devi bansal college of engineering indore.
                        </div>
                    </div>
                </div>
                
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion item  #2
                            </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong> This is Second item </strong> good night every one i am manish lacheta from borud manawar currentlt living in indore for my b std pursuing btech in final year from sushila devi bansal college of engineering indore.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThtee">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion item  #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong> This is third item </strong> good night every one i am manish lacheta from borud manawar currentlt living in indore for my b std pursuing btech in final year from sushila devi bansal college of engineering indore.
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
            </div>
        </div>
    )
}
