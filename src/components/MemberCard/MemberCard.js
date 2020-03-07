import React from 'react'

const MemberCard = () => (
  <div className="member-card">
    <div className="member-card__img-container">
      <img src="https://source.unsplash.com/random?300x300?search=beach" alt="" className="member-card__img" />
    </div>
    <div className="member-card__content">
      <h1 className="member-card__title">Visit Hawaii</h1>
      <p className="member-card__text">Looking for a vacation? Hawaii is the perfect place to kick back, relax, and enjoy the summer sun.</p>
      <a href="#" className="member-card__button">Find a hotel</a>
      <a href="#" className="member-card__button card__button--outline">Price Comparisons</a>
    </div>
  </div >
)

export default MemberCard