const Gallery = () => {
    return (
       
        <div>
             <section id="gallary"    data-aos="fade-up"
    data-aos-duration="1500">
      <div className="container">
          <h1>OUR GALLERY</h1>
          <div className="row" style={{ marginTop: '30px' }}>
              <div className="col-md-4 py-3 py-md-0">
                  <div className="card">
                      <div className="overlay">
                          <h3 className="text-center">Trainers</h3>
                      </div>
                      <img src="./image/o1.png" alt=""/>
                  </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                  <div className="card">
                      <div className="overlay">
                          <h3 className="text-center">Equipments</h3>
                      </div>
                      <img src="./image/o2.jpg  "  className="he1"alt=""/>
                  </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                  <div className="card">
                      <div className="overlay">
                          <h3 className="text-center">Member</h3>
                      </div>
                      <img src="./image/o3.png" alt="" className="he1"/>
                  </div>
              </div>
          </div>


          <div className="row" style={{ marginTop: '30px' }}   data-aos="fade-up"
          data-aos-duration="1500">
              <div className="col-md-4 py-3 py-md-0">
                  <div className="card">
                      <div className="overlay">
                          <h3 className="text-center">Branchs</h3>
                      </div>
                      <img src="./image/o4.png"      className="he2" alt=""/>
                  </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                  <div className="card">
                      <div className="overlay">
                          <h3 className="text-center">Extras</h3>
                      </div>
                      <img src="./image/o5.png" className="he2" alt=""/>
                  </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                  <div className="card">
                      <div className="overlay">
                          <h3 className="text-center">Growth</h3>
                      </div>
                      <img src="./image/o6.jpg" alt=""/>
                  </div>
              </div>
          </div>
                    </div>
                   
    </section>
        </div>
      );
}
 
export default Gallery;