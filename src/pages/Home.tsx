import returant from '../assets/homePageImage.png';


export const Home = () => {
  return (
    <>
      <section className="container--homePage">
        <section className="container--homePageTitles">
          <h3 className="homePageTitle__big">SMAKRIKET</h3>
          <p className="homePageTitle__small">EN UNIK ORIENTALISK RESTAURANG</p>
        </section>
        <section className="container--heroImage">
          <img className="heroImage" src={returant} alt="" />
        </section>
      </section>
    </>
  );
};
