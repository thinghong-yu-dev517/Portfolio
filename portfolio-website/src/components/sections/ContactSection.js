import React, { useState, useEffect } from "react";
import "../../styles/ContactSection.css"
import MyMaps from "../MyMaps";

const ContactSection = () => {
    const [localTime, setLocalTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
        setLocalTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <section id="contact" className="contact-section">
            <div className="contact-wrapper">
                <div className="contact-card">
                    <div className="card-header">
                        <h2>
                            {localTime.toLocaleTimeString('en-MY', {
                                timeZone: 'Asia/Kuala_Lumpur',
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',
                            })} (GMT+8)
                        </h2>
                    </div>
                    <div className="map">
                        <MyMaps></MyMaps>
                    </div>
                </div>

                <div className="contact-card">
                    <div className="card-header">
                        <h2>Let’s create something that’s matter!</h2>
                    </div>
                    <form className="contact-form">
                        <input type="text" placeholder="How should I address you?" />
                        <input type="email" placeholder="Your email" />
                        <textarea placeholder="Tell me your cool idea." rows="5"></textarea>
                        <button type="submit" className="submit-btn">Leave a message</button>
                    </form>
                    <a href="mailto:thinghong_dev@icloud.com" className="email-direct">Email me directly</a>
                </div>
            </div>
        </section>
    );
}

//AIzaSyAnFqYddVDYKp7_Dpb1T0EDXj03DbfWGms
//Google Map API Key

export default ContactSection;