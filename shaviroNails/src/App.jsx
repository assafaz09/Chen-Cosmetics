import { useState, useEffect } from "react";
import "./App.css";

// Custom hook for scroll animations
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll(
      ".fade-in, .slide-in-left, .slide-in-right, .scale-in"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  useScrollAnimation();

  const services = [
    {
      title: "עיצוב ציפורניים",
      description: "מניקור מקצועי, ג'ל פוליש, בניית ציפורניים, עיצובים מיוחדים",
      src: "/chenPic.JPG",
    },
    {
      title: "עיצוב גבות",
      description: "עיצוב גבות בשעווה, פינצטה, צביעה וטיפוח",
    },
    {
      title: "קוסמטיקה",
      description: "איפור מקצועי לאירועים, הדרכות איפור אישיות",
    },
    {
      title: "טיפוח פנים",
      description: "טיפולי פנים מקצועיים, ניקוי עור, מסכות מזינות",
    },
  ];

  // Placeholder images - you can replace these with actual photos

  const galleryImages = [
    {
      id: 2,
      src: "/chenNails.jpg",
      alt: "עיצוב ציפורניים 2",
    },
    {
      id: 3,
      src: "/henNails1.jpg",
      alt: "עיצוב גבות 1",
    },
    {
      id: 4,
      src: "/henNails12.png",
      alt: "עיצוב גבות 2",
    },
    {
      id: 5,
      src: "/1chenE.jpg",
      alt: "איפור מקצועי 1",
    },
  ];

  return (
    <div className="app" dir="rtl">
      <head>
        <title>שבירו ביוטי – עיצוב ציפורניים וגבות בכרמי גת</title>
        <meta
          name="description"
          content="שבירו ביוטי מציעה עיצוב ציפורניים, עיצוב גבות, איפור מקצועי וטיפולי פנים בכרמי גת. שירות מקצועי עם תוצאות מרשימות."
        />
        <meta
          name="keywords"
          content="עיצוב ציפורניים כרמי גת, עיצוב גבות, מניקור ג'ל, איפור מקצועי, טיפולי פנים"
        />
      </head>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          {/* <div className="nav-logo">
            <h2>שבירו ביוטי</h2>
          </div> */}
          <ul className="nav-menu">
            <li>
              <a href="#home">בית</a>
            </li>
            <li>
              <a href="#services">שירותים</a>
            </li>
            <li>
              <a href="#gallery">גלריה</a>
            </li>
            <li>
              <a href="#about">אודות</a>
            </li>
            <li>
              <a href="#contact">צור קשר</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>CHEN Cosmetics</h1>
          <h2>מעצבת ציפורניים וגבות מקצועית</h2>
          <p>
            ברוכות הבאות לעולם של יופי ואלגנטיות. כאן תמצאו שירותי עיצוב
            ציפורניים וגבות ברמה הגבוהה ביותר
          </p>
          <button
            className="cta-button"
            onClick={() => document.getElementById("contact").scrollIntoView()}
          >
            קבעי תור עכשיו
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="fade-in">השירותים שלנו</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="fade-in">גלרית עבודות</h2>
          <p className="gallery-subtitle fade-in">
            הציצו בחלק מהעבודות המקצועיות שלנו
          </p>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item scale-in"
                onClick={() => setSelectedImage(image)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={image.src} alt={image.alt} />
                <div className="gallery-overlay">
                  <span>לחצי להגדלה</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          {/* Block 1: History and Heritage */}
          <div className="about-block">
            <div className="about-text">
              <h2 className="about-title">היסטוריה ומורשת</h2>
              <p>
                העסק שלנו נוסד מתוך אהבה ליופי ואסתטיקה. עם ניסיון של שנים
                בתחום, אנו מביאים את המומחיות שלנו לכל לקוח ולקוחה. הצוות שלנו
                מורכב מאנשי מקצוע מיומנים ומנוסים, המתחייבים להעניק את השירות
                הטוב ביותר. אנו גאים להציע שירותים מותאמים אישית לכל לקוח, תוך
                שימוש במוצרים האיכותיים ביותר.
              </p>
            </div>
            <img
              className="about-img"
              src="/henAbout.jpg"
              alt="עיצוב ציפורניים"
            />
          </div>

          {/* Divider */}
          <div className="about-divider"></div>

          {/* Block 2: Mission and Before/After */}
          <div className="about-block">
            <img
              className="about-beforeafter"
              src="/eyebrowsHen.jpg"
              alt="עיצוב גבות לפני אחרי"
            />

            <div className="about-text">
              <h2 className="about-title">המשימה שלנו</h2>
              <p>
                המטרה שלנו היא להעניק לכל לקוח חוויה ייחודית ומותאמת אישית, תוך
                שמירה על סטנדרטים גבוהים של איכות ושירות. אנו שואפים ליצור סביבה
                נעימה ומזמינה, בה כל לקוח ירגיש ייחודי ומוערך. החזון שלנו הוא
                להמשיך להוביל בתחום היופי, תוך חידוש והתפתחות מתמדת.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="fade-in">צרו קשר</h2>
          <div className="contact-content fade-in">
            <div className="contact-info">
              <div
                className="contact-item slide-in-left"
                style={{ animationDelay: "0.1s" }}
              >
                <div>
                  <h4>טלפון</h4>
                  <p>050-799-6189</p>
                </div>
              </div>

              <div
                className="contact-item slide-in-right"
                style={{ animationDelay: "0.2s" }}
              >
                <div>
                  <h4>כתובת</h4>
                  <p>כרמי גת, קריית גת</p>
                </div>
              </div>
              <div
                className="contact-item slide-in-left"
                style={{ animationDelay: "0.3s" }}
              >
                <div>
                  <h4>שעות פעילות</h4>
                  <p>
                    ראשון-חמישי: 9:00-19:00
                    <br />
                    שישי: 9:00-14:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer fade-in">
        <div className="container">
          <p>&copy; 2025 שבירו ביוטי. כל הזכויות שמורות.</p>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedImage(null)}>
              &times;
            </span>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
