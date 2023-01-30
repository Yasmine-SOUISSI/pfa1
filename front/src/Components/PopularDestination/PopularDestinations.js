import { useState } from "react";
import "./Popular.css";
const PopularDestinations = () => {
  const [destinations, setDestinations] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);

  return (
    <section id='popular-destination'>
      <h1 class='title'>destinations populaires</h1>
      <div class='content'>
        {destinations.map((destination) => (
          <div class='box'>
            <img src='images/paris.jpg' alt='' />
            <div class='content'>
              <div>
                <h4>Paris</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Ea iusto ipsa repudiandae amet conseq.</p>
                <a href='#'>Lire Plus</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;
