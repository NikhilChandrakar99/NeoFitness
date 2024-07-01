const Home = () => {
    return (  
    

        <div>
        {/* // <!-- home section --> */}

        <div className="home">
            <div className="content" data-aos="zoom-out-right">
                <h3>Get <span id="every">fit </span></h3>  <br/>
                <h4><p>“  Doesn't matter your age, condition, height, weight, gender, or if you know what a burpee or jab is. All you need is a pulse, a little motivation and we will do the rest”</p></h4>
                   
                <a href="#" className="btn">Join Now</a>
            </div>
            <div className="img"  data-aos="zoom-out-left">
                <img src="./image/background.png" alt=""/>
            </div>
        </div>
        {/* <!-- home section end --> */}

      {/* <!-- top cards --> */}
      <div className="container" id="box"    data-aos="fade-up"
      data-aos-duration="1500">
        <div className="row">
            <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                    <img src="./image/box1.jpg" alt=""/>
                </div>
            </div>
            <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                    <img src="./image/box2.jpg" alt=""/>
                </div>
            </div>
            <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                    <img src="./image/box3.jpg" alt=""/>
                </div>
            </div>
        </div>
      </div>
      {/* <!-- top cards end --> */}

      {/* <!-- banner --> */}
        <div className="banner"    data-aos="fade-up"
        data-aos-duration="1500">
            <div className="content">
                <h4 id="OPEN">1500 SQ.FT OPEN AIR CROSSFIT STUDIO</h4>
                <h6 id="UPTO">UPTO 50% OFF</h6>
             
                <div id="btnorder"><button>NOW</button></div>
            </div>
            <div className="img">
                <img src="./image/banner-background.jpg"  width="20px"  alt=""/>
            </div>
        </div>
            {/* <!-- banner end --> */}
            


            </div>
            
    );
}
 
export default Home;