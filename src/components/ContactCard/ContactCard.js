import React from 'react'
import phone from '../../assets/images/phone_icon.png';
import email from '../../assets/images/email_icon.png';
import contact_img from '../../assets/images/contact_us.svg';
import Bounce from 'react-reveal/Bounce'
import { useInView } from 'react-intersection-observer'

const ContactCard = () => {
    const [ref, inView] = useInView({
        threshold: 0,
    });
    return (
        <div ref={ref} id="contact" href="contact" className="contact-card">
            <div className="contact-card__content">
                <Bounce spy={inView}>
                    <div className="contact-card__title">
                        Get in touch
            </div>
                </Bounce>
                <div className="contact-card__info">
                    <img className="contact-card__icon" src={phone} ></img>
                    <div class="contact-card__info-text">
                        703-753-1234
                </div>
                </div>
                <div className="contact-card__info">
                    <img className="contact-card__icon" src={email} ></img>
                    <div class="contact-card__info-text">
                        HT@gmail.com
                </div>
                </div>
            </div>
            <img class="contact-card__img-container" src={contact_img}></img>
        </div>
    )
}

export default ContactCard