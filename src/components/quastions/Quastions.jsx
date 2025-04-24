import "../quastions/quastions.css";

const Quastions = () => {
  return (
    <>
      <div className="quastions">
        <div className="quastions2" />
        <div className="container">
          <div className="quastions_main">
            <div className="quastions_box">
              <div className="quastions_left">
                <p>GET FREE QUOTE</p>
                <h1>NEED CONSULTATION?</h1>
                <p className="info_text_quote">
                  Feel free to contact us and ask your question, its absolutely
                  free.
                </p>
              </div>

              <div className="quastions_right">
                <form action="">
                  <div className="inputs_box1">
                    <input type="text" name="" id="" placeholder="Your Name " />
                    <input type="text" name="" id="" placeholder="Yout Email" />
                  </div>
                  <div className="inputs_box1">
                    <input className="subject_input" type="text" name="" id="" placeholder="Subject" />
                  </div>
                  <textarea name="" id=""></textarea>
                  <div className="form_button">
                    <button>submit</button>
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

export default Quastions;
