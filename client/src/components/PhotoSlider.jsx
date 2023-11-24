import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function PhotoSlider() {
  /**
   * note: if you want to add extra images, enclose each 1 between a <SplideSlide> tag
   * like the pattern below.
   * the image srcs should be inside the public/img folder.
   */
  return (
    <div id="photo-slider">
      <h2 className='is-title'>Explore world-class art</h2>

      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          perMove: 1,
          gap: '12px',
          perPage: 3,

          // the breakpoints works like (max-width: 768px) desktop-first
          breakpoints: {
            768: {
              perPage: 1,
            },
            1024: {
              perPage: 2,
            },
          },
        }}
      >
        <SplideSlide>
          <img src="/img/art3.jpg" alt="" />
        </SplideSlide>

        <SplideSlide>
          <img src="/img/art2.jpg" alt="" />
        </SplideSlide>

        <SplideSlide>
          <img src="/img/art1.jpg" alt="" />
        </SplideSlide>
      </Splide>
    </div>
  );
}
