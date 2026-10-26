import { useRef, useState } from 'react';
import './App.css';

const promotions = [
{ id: 1, image: '/images/pepsi1.jpg', alt: 'Pepsi promotion 1' },
{ id: 2, image: '/images/pepsi2.jpg', alt: 'Pepsi promotion 2' },
{ id: 3, image: '/images/pepsi3.jpg', alt: 'Pepsi promotion 3' },
{ id: 4, image: '/images/pepsi4.jpg', alt: 'Pepsi promotion 4' },
{ id: 5, image: '/images/pepsi5.jpg', alt: 'Pepsi promotion 5' },
{ id: 6, image: '/images/pepsi6.jpg', alt: 'Pepsi promotion 6' },
{ id: 7, image: '/images/pepsi7.jpg', alt: 'Pepsi promotion 7' },
{ id: 8, image: '/images/pepsi4.jpg', alt: 'Pepsi promotion 4 repeated' },
{ id: 9, image: '/images/pepsi1.jpg', alt: 'Pepsi promotion 1 repeated' },
];


function App() {
const trackRef = useRef(null);
const [activeDot, setActiveDot] = useState(0);

const scrollToPromotion = (index) => {
const track = trackRef.current;
const card = track?.children[index];


if (!track || !card) return;

const left =
  card.getBoundingClientRect().left -
  track.getBoundingClientRect().left +
  track.scrollLeft;

track.scrollTo({
  left,
  behavior: 'smooth',
});

setActiveDot(index);


};

return ( <main className="promotions-section">
<div
className="promotions-track"
ref={trackRef}
onScroll={(event) => {
const track = event.currentTarget;
const cards = Array.from(track.children);


      let closestIndex = 0;
      let smallestDistance = Infinity;

      cards.forEach((card, index) => {
        const distance = Math.abs(
          card.getBoundingClientRect().left -
            track.getBoundingClientRect().left
        );

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveDot(Math.min(6, closestIndex));
    }}
  >
    {promotions.map((promotion) => (
      <article className="promotion-card" key={promotion.id}>
        <a
          href="https://www.instagram.com/pepsi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${promotion.alt} on Instagram`}
        >
          <img
            src={promotion.image}
            alt={promotion.alt}
            className="promotion-image"
          />
        </a>
      </article>
    ))}
  </div>

  <div className="carousel-dots" aria-label="Promotional slides">
    {Array.from({ length: 7 }, (_, dot) => (
      <button
        key={dot}
        className={`carousel-dot ${
          activeDot === dot ? 'active' : ''
        }`}
        onClick={() => scrollToPromotion(dot)}
        aria-label={`Go to promotional image ${dot + 1}`}
        aria-current={activeDot === dot ? 'true' : undefined}
      />
    ))}
  </div>
</main>

);
}

export default App;