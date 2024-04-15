import React, { useEffect, useState } from "react";
import { database } from "./firebase";
import { get, ref } from "firebase/database";

interface GalleryItemProps {
  imageUrl: string;
  title: string;
  category: string;
  description: string;
  link: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  imageUrl,
  title,
  category,
  description,
  link
}) => {
  return (
    <div className="gallery-item">
      <a href={link} target="_blank">
      <figure className="img-container">
        <img src={imageUrl} alt={title} className="gallery-image" />
        <figcaption className="img-content">
          <h2 className="title">{title}</h2>
          <h3 className="category">{category}</h3>
        </figcaption>
        <span className="img-content-hover">
          <h2 className="title">{title}</h2>
          <h3 className="category">{category}</h3>
          <p className="description">{description}</p>
        </span>
      </figure>
      </a>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [galleryData, setGalleryData] = useState<GalleryItemProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const galleryRef = ref(database, "site_gallery");
        const snapshot = await get(galleryRef);
        if (snapshot.exists()) {
          const data: GalleryItemProps[] = snapshot.val();
          setGalleryData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <nav className="navigation">
        <div className="branding">A Mako Sites</div>

        <div className="menu">
          <ul className="menu-list">
            <li>
              <a href="#" className="menu-link active">
                Work
              </a>
            </li>
            <li>
              <a
                href="https://services.okamalabs.com"
                target="_blank"
                className="menu-link"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="gallery">
        <div className="gallery-topbar"></div>
        <div className="gallery-main">
          {galleryData.map((item, index) => (
            <GalleryItem
              key={index}
              imageUrl={item.imageUrl}
              title={item.title}
              category={item.category}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
        <div className="gallery-bottombar"></div>
      </section>

      <div className="floating-button">
        <a href="https://www.upwork.com/services/product/design-a-personalized-resume-cv-website-to-showcase-your-professional-profile-1778446841765494784?ref=project_share&tier=1" target="_blank" className="menu-link">
          <button className="btn">Get a Website</button>
        </a>
      </div>

      <footer className="footer">
        <ul className="social">
          <li>
            <a
              href="https://www.linkedin.com/in/foramako/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fab fa-linkedin">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/amakodev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fab fa-github">Github</span>
            </a>
          </li>
        </ul>

        <div className="copyright">&copy; Copyright 2024 okamalabs</div>
      </footer>
    </div>
  );
};

export default Gallery;
