const About = () => {
    return (
      <div className="container" id="about" data-aos="fade-up" data-aos-duration="1500">
        <h1>ABOUT US</h1>
        <div className="row">
          <div className="col-md-6 py-3 py-md-0">
            <div className="card">
              <img src="./image/about.png" alt="About Us" />
            </div>
          </div>
          <div className="col-md-6 py-3 py-md-0">
            <p>
            OUR STORY
            In 1993, the first Fitness First club opened in Bournemouth in the South Of England. Over the next decade and a half, Fitness first was present in over 16 countries, including India making it a leader in the global fitness industry. 
            <br/>
            <br/>In 2018, Fitness First India was acquired by cure.fit, India's largest chain of fitness centres that offers energetic group workouts and multiple workout formats to choose from.
              <br />
              <br />
              HOW CAN WE HELP?
              We want to help our members go further, so if you have any suggestions about our clubs, classes, personal training sessions or anything else, please come in and talk to one of our team member or if you prefer, drop us a note via our online enquiry forms.
              
            </p>
            <div id="bt"><button>Read More...</button></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;