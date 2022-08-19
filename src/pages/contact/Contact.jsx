import s from "./Contact.module.scss";

import { MapContainer, TileLayer, Marker } from "react-leaflet";

const position = [-33.851596, 150.986579];

const Contact = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className={s["contact-header"]}>
        <div>
          <h2>Contact us</h2>
        </div>
      </section>
      <section className={s["contact-main"]}>
        <div className="container">
          <form onSubmit={submitHandler}>
            <div className={s["form-top"]}>
              <div>
                <label htmlFor="first_name">First name*</label>
                <input type="text" name="first_name" required />
              </div>
              <div>
                <label htmlFor="last_name">Last name*</label>
                <input type="text" name="last_name" required />
              </div>
            </div>
            <label htmlFor="email">Email*</label>
            <input type="email" name="email" required />
            <label htmlFor="message">Your message*</label>
            <textarea name="message" id="message" required></textarea>
            <button>Submit</button>
          </form>
          <hr />
          <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
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
