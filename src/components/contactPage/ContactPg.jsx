import '../contactPage/contactpg.css';
import { MdPhoneInTalk } from "react-icons/md";
import { HiOutlineMailOpen, HiOutlineLocationMarker } from "react-icons/hi";

const ContactPg = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact_main">
          <div className="phone_email_box">
            <div className="phone_box">
              <div className="phone_icon">
                <span><MdPhoneInTalk /></span>
              </div>
              <div className="number_box">
                <h3>Phone</h3>
                <p>+370 648 45 075</p>
              </div>
            </div>

            <div className="email_box">
              <div className="email_icon">
                <span><HiOutlineMailOpen /></span>
              </div>
              <div className="email_text">
                <h3>Email</h3>
                <p>factory@xtra.industrial</p>
              </div>
            </div>

            <div className="location_box">
              <div className="location_icon">
                <span><HiOutlineLocationMarker /></span>
              </div>
              <div className="location_info">
                <h3>Office Address</h3>
                <p>BENKAM Alu Extrusions, Navoiy, Uzbekistan</p>
              </div>
            </div>
          </div>

          {/* IFrame bilan toza Google Map */}
          <div style={{ marginTop: '2rem', borderRadius: '10px', overflow: 'hidden' }}>
            <iframe
              title="Benkam Factory Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4790.276345375846!2d65.1526886!3d40.1500653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f51b50a57a49c01%3A0xc5ba5b00baa15ecb!2sBENKAM%20Alu%20Extrusions!5e0!3m2!1sen!2s!4v1713437572543!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPg;
