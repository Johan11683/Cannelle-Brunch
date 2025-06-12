import { galleryImages } from '../data/galleryDatas';
import ImageGallery from '../components/ImageGallery';

export default function GalleryPage() {
  return (
    <section className="gallery-page">
      <h2>Galerie photo</h2>
      <p className="home__text home__text--cta">
        Pour voir nos menus à jour et commander, c'est par là ! 👇
        <a
          href="https://www.instagram.com/cannelle.brunch/"
          className="home__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Cannelle-Brunch/images/logos/insta.webp"
            alt="Instagram Cannelle Brunch"
            className="home__link-icon"
          />
        </a>
      </p>
      <ImageGallery images={galleryImages} />
    </section>
  );
}
