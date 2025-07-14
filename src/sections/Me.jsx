import React from 'react'
import AnimatedCounter from './AnimatedCounter.jsx'
const Me = () => {
  return (
        <section id="me">
            <AnimatedCounter />  
            <div className="me-card-container">
                <div className="me-card">
                    <div className="me-header">
                        <h2>About Me</h2>
                    </div>
                    <div className="me-body">
                        <img src="/images/Me.JPG" alt="Mark Joseph O. Iglesia" />
                    </div>
                    <div className="me-footer">

                    </div>
                </div>
                
            </div>
        </section>  
)}

export default Me