import img1 from '../../assets/banner-slide03.png';
import img2 from '../../assets/banner-slide.png';
import img3 from '../../assets/banner-slidee.png';

const Banner = () => {
    return (
        <div className="mt-10 max-h-96">
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full max-h-96">
    <img src={img1} className="w-full" />
    <div className="absolute flex justify-between transform right-5 bottom-5 gap-4">
      <a href="#slide3" className="btn btn-circle btn-outline btn-warning btn-sm">❮</a> 
      <a href="#slide2" className="btn btn-circle btn-outline btn-warning btn-sm">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full max-h-96">
    <img src={img2} className="w-full" />
    <div className="absolute flex justify-between transform right-5 bottom-5 gap-4 ">
      <a href="#slide1" className="btn btn-circle btn-outline btn-warning btn-sm">❮</a> 
      <a href="#slide3" className="btn btn-circle btn-outline btn-warning btn-sm">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full max-h-96">
    <img src={img3} className="w-full" />
    <div className="absolute flex justify-between transform right-5 bottom-5 gap-4 ">
      <a href="#slide2" className="btn btn-circle btn-outline btn-warning btn-sm">❮</a> 
      <a href="#slide1" className="btn btn-circle btn-outline btn-warning btn-sm">❯</a>
    </div>
  </div> 
</div>
        </div>
    );
};

export default Banner;