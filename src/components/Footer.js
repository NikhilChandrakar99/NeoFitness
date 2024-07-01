const Footer = () => {
    return (  
        <div>
            <footer id="footer"    data-aos="fade-up"
       data-aos-duration="1500">
         <h3 className="text-center">NeoFitness</h3>
        
         <div className="icons text-center">
             <i className="bx bxl-facebook"></i>
             <i className="bx bxl-google mx-4"></i>
             <i className="bx bxl-instagram "></i>
         </div>
         <div className="copyright text-center">
             &copy; Copyright <strong>NeoFitness</strong> . All Rights Reserved
         </div>
        
       </footer>
 
       <a href="#" className="arrow"><i><img src="./image/up-arrow.png" alt="" width="50px"/></i></a>
        </div>
    );
}
 
export default Footer;