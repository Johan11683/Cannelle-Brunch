import { useEffect, useRef, useState } from 'react';
import '../styles/_home.scss';

export default function Home() {
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setZoomedIndex(null);
      }
    }

    if (zoomedIndex !== null) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [zoomedIndex]);

  const handleImageClick = (index: number) => {
    setZoomedIndex(prev => (prev === index ? null : index));
  };

  return (
    <main className="home">
      <section className="home__description">
        <h1 className="home__title">Bienvenue chez Cannelle.Brunch</h1>
        <p className="home__subtitle">
          Des brunchs faits maison, de saison, livrés avec amour 😋
        </p>
        <div className="home__barre"></div>
        <p className="home__text">
          Cannelle.Brunch est une petite entreprise artisanale qui propose des brunchs faits maison, préparés avec des ingrédients frais,
          de saison et livrés avec soin sur Bordeaux. Notre passion pour la cuisine se reflète dans chaque plat que nous créons, 
          et nous sommes fiers de partager notre amour pour la gastronomie avec vous.
        </p>
        <div className='home__menu-subtitle'>
          Découvrez nos menus précédents 👇
        </div>
        <div className="home__menu" ref={containerRef}>
          {['menu1.webp', 'menu2.webp'].map((src, index) => (
            <img
              key={index}
              src={`${import.meta.env.BASE_URL}images/${src}`}
              alt={`Menu Cannelle Brunch ${index + 1}`}
              className={`home__menu-image ${zoomedIndex === index ? 'zoomed' : ''}`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        <p className="home__text home__text--cta">
          Pour voir nos menus à jour et commander, c'est par là ! 👇
        </p>

        <a
          href="https://www.instagram.com/cannelle.brunch/"
          className="home__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/logos/insta.webp`}
            alt="Instagram Cannelle Brunch"
            className="home__link-icon"
          />
        </a>
      </section>
    </main>
  );
}
