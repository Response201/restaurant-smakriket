import check from "../assets/notfound.json";
import Lottie  from "lottie-react";
import returant from '../assets/homePageImage.png'

export const NotFound = () => {


  
  
  
    return (
      <section className="pageNotFoundContainer">
        <div className= "pageNotFoundContainer___overLay"></div>
  <img  src={returant} alt="resturant" className="pageNotFoundContainer___backgroundImg" />
  <section className="pageNotFoundContainer___animationAndText"> 
  <Lottie
                      animationData={check}
                      loop={true}
                      autoPlay={true}
                      className="pageNotFoundContainer___animationAndText___animation"
      
                  />
  <h1>Page not found</h1>
  <div className="pageNotFoundContainer___animationAndText___overlay"> </div>
  </section>
      </section>
    )
  }
  

