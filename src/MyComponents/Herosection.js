function Herosection() {
    return (
      <div className="Herosection-container">
        <div className="Herosection ">
          <div className="leftsection">
            <div className="Herosection-primary-heading">
              <h1>Convallis turpis erat tempus, viverra aliquet. </h1>
              <button>Get in Touch</button>
            </div>
  
            <div className="Herosection-secondry-heading">
              <h3>I feel so much less stressed ❤️ as I now know by the book.</h3>
              <div className="user-profile">
                <img
                  srcSet="
                    https://i.ibb.co/jMZmgkb/peter-olexa-p-L7-Ire-X9-AGY-unsplash-11-1-320w.webp 320w,
                    https://i.ibb.co/jMZmgkb/peter-olexa-p-L7-Ire-X9-AGY-unsplash-11-1-480w.webp 480w,
                    https://i.ibb.co/jMZmgkb/peter-olexa-p-L7-Ire-X9-AGY-unsplash-11-1.webp 800w"
                  sizes="(max-width: 480px) 280px, (max-width: 800px) 440px, 800px"
                  src="https://i.ibb.co/jMZmgkb/peter-olexa-p-L7-Ire-X9-AGY-unsplash-11-1.webp"
                  alt="girl3"
                ></img>
                <div>
                  <p className="usersname">Andry Ford</p>
                  <p className="designation">CEO at Whatever</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rightsection">
            <img
              srcSet="
                https://i.ibb.co/jMZmgkb/peter-olexa-p-L7-Ire-X9-AGY-unsplash-11-1-320w.webp 320w,
                https://i.ibb.co/jMZmgkb/peter-olexa-p-L7-Ire-X9-AGY-unsplash-11-1-480w.webp 480w,
                https://i.ibb.co/jMZmgkb/peter-olexa-p-L7-Ire-X9-AGY-unsplash-11-1.webp 800w"
              sizes="(max-width: 480px) 280px, (max-width: 800px) 440px, 800px"
              src="https://i.ibb.co/jMZmgkb/peter-olexa-p-L7-Ire-X9-AGY-unsplash-11-1.webp"
              alt="hero image"
            ></img>
          </div>
        </div>
      </div>
    );
  }
  
  export default Herosection;
  