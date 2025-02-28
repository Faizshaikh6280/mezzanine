export default function Footer() {
  return (
    <footer className="footer">
      <div className="col-1">
        <img src="/images/logo-white.svg" alt="Logo" />
        <div className="social-links">
          {["face-icon", "insta-icon", "linkedin-icon", "x"].map((icon) => (
            <a key={icon} href="#">
              <img src={`/images/${icon}.svg`} alt={icon} />
            </a>
          ))}
        </div>
      </div>

      <div className="col-2">
        <h2>Quick Links</h2>
        <a href="#">Services</a>
        <a href="#">Our Team</a>
        <a href="#">Portfolio</a>
      </div>

      <div className="col-3">
        <h2>Contact Information</h2>

        <div>
          <span>
            <img src="./images/location-white-icon.png" />
          </span>
          <p>
            C-44, Pushpam Bunglows, Kharawala Compound, Vatva Road, Isanpur,
            Ahmedabad-382443, Gujarat
          </p>
        </div>
        <div>
          <span>
            {" "}
            <img src="./images/call-icon.svg" />{" "}
          </span>
          <p>+91-886-687-3523</p>
        </div>
        <div>
          <span>
            <img src="./images/man-icon.svg" />{" "}
          </span>
          <p>mezzanineequity@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
