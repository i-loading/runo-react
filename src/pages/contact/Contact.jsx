import s from "./Contact.module.scss";

import { MapContainer, TileLayer, Marker } from "react-leaflet";

const position = [-33.851596, 150.986579];

const Contact = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section
        className={`${s["contact-header"]} wow animate__animated animate__fadeInDown`}
      >
        <div>
          <h2>Contact us</h2>
        </div>
      </section>
      <section className={s["contact-main"]}>
        <div className="container">
          <form onSubmit={submitHandler}>
            <div className={s["form-top"]}>
              <div className="wow animate__animated animate__fadeInDown">
                <label htmlFor="first_name">First name*</label>
                <input type="text" name="first_name" required />
              </div>
              <div
                className="wow animate__animated animate__fadeInDown"
                data-wow-delay="0.1s"
              >
                <label htmlFor="last_name">Last name*</label>
                <input type="text" name="last_name" required />
              </div>
            </div>
            <div
              className="wow animate__animated animate__fadeInDown"
              data-wow-delay="0.2s"
            >
              <label htmlFor="email">Email*</label>
              <input type="email" name="email" required />
            </div>
            <div
              className="wow animate__animated animate__fadeInDown"
              data-wow-delay="0.3s"
            >
              <label htmlFor="message">Your message*</label>
              <textarea name="message" id="message" required></textarea>
            </div>
            <button
              className="wow animate__animated animate__bounceIn"
              data-wow-delay="0.8s"
            >
              Submit
            </button>
          </form>
          <hr />
          <MapContainer
            className="wow animate__animated animate__fadeInUp animate__delay-1s"
            center={position}
            zoom={15}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} />
          </MapContainer>
        </div>
      </section>
    </>
  );
};

export default Contact;
