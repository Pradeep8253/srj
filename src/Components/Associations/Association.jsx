"use client";
import React , {useEffect} from 'react'
import '../Associations/Association.css'
const Association = () => {
  useEffect(() => {
    const photoWrapper = document.getElementById("photoWrapper");
    const photos = Array.from(document.getElementsByClassName("photo"));

    let count = 0;
    photos.forEach((photo) => {
        count++;
        if (count % 2) {
            photo.classList.add("even");
        }
    });

    const checkPosition = (photo) => {
      if (photo.getBoundingClientRect().right - 4 <= 0) {
          photo.remove();
          photoWrapper.append(photo);
          photoWrapper.scrollLeft = 0;
          return;
      }
    };

    const handleScroll = () => {
      photos.forEach(checkPosition);
    };

    photoWrapper.addEventListener("scroll", handleScroll);

    const infiniteScroll = () => {
      photoWrapper.scrollLeft++;
      requestAnimationFrame(infiniteScroll);
    };

    infiniteScroll();

    return () => {
      photoWrapper.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className='our-association-section five'>
      <div className='title-div'>
      <div className="three">
  <h1>OUR ASSOCIATIONS</h1>
</div>
      </div>
      
     <div className="photo-wrapper" id="photoWrapper">
  <div className="photo">
    <img src="A1.webp" />
  </div>
  <div className="photo">
    <img src="A22.jpg" />
  </div>
  <div className="photo">
    <img src="A3.webp" />
  </div>
  <div className="photo">
    <img src="A4.jpg" />
  </div>
  <div className="photo">
    <img src="A55.jpg" />
  </div>
  <div className="photo">
    <img src="A6.jpg" />
  </div>
  
</div>

</section>
    </>
  )
}

export default Association