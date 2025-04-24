import "../contact_input/contactinput.css";

const ContactInput = () => {
  return (
    <>
      <div className="contactinput">
        <div className="container">
          <div className="contact_input_main">
            <div className="contact_inputs_boxs">
              <div className="inputs_left">
                <div className="inputs_title">
                  <h3>GET IN TOUCH</h3>
                  <h1>CONTACT US</h1>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt tempora alias magnam ipsam, temporibus saepe.
                    Voluptas, quam possimus commodi tempora eligendi incidunt,
                    architecto minima debitis eum deleniti maxime eius dolor.
                    Voluptas, quam possimus commodi tempora eligendi incidunt,
                    architecto minima debitis eum deleniti maxime eius dolor.
                  </p>
                </div>
              </div>
              <div className="inputs_right">
                <form action="">
                  <div className="contact_inputs_box1">
                    <input type="text" name="" id="" placeholder="Your Name " />
                    <input type="text" name="" id="" placeholder="Yout Email" />
                  </div>
                  <div className="contact_inputs_box1">
                    <input
                      className="subject_input2"
                      type="text"
                      name=""
                      id=""
                      placeholder="Subject"
                    />
                  </div>
                  <textarea name="" id=""></textarea>
                  <div className="contact_form_button">
                    <button className="submit_btn">submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInput;
