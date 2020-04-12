import React from 'react'

const HomeCard = () => (
    <div className="home-card">
        <div className="home-card__header">
            <div className="home-card__img-container">
                <img src="https://source.unsplash.com/random?300x300?search=beach" alt="" className="home-card__img" />
            </div>
            <div className="home-card__title">
                Mission Statement
            </div>
        </div>
        <div className="home-card__content">
            <p className="home-card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis turpis urna, vitae venenatis justo mollis sit amet. Sed congue, urna eget mattis ullamcorper, orci magna consectetur nisl, et hendrerit libero ligula ac urna. Quisque pharetra libero justo. Nam vitae enim consequat, sodales purus ut, vestibulum purus. Donec euismod nibh quis ligula malesuada, ut scelerisque nunc vulputate. Praesent sed lobortis sapien. Pellentesque rhoncus odio consectetur justo pellentesque eleifend. Cras sit amet quam venenatis, fermentum elit vel, commodo magna. Proin non pretium metus, nec semper neque. Duis aliquam viverra condimentum. Aenean tincidunt dictum nulla, quis hendrerit velit condimentum id. Praesent luctus ultrices efficitur.
            </p>
        </div>
    </div>
)

export default HomeCard