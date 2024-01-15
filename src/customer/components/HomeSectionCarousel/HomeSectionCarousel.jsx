import React from 'react'
import AliceCarousel from 'react-alice-carousel';

const HomeSectionCarousel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4 },
    };
    
  return (
    <div><AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={2000}
    infinite
    responsive={responsive}
    
/></div>
  )
}

export default HomeSectionCarousel