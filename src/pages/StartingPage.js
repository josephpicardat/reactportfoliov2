import Turtle from '../assets/Turtle.png';
// import '../css/card.css';

function StartingPage() {
  return (
    /* Home Page */
    <section className="pagesWrapper" id="home">
      <div className="pages">
        <div className="homeCardLeft">
          <p className="title" id="hi">
            Hi! I'm
          </p>
          <p className="title" id="nameTitle">
            Joseph,
          </p>
          <p className="normalText">
            A <span className="highlight">web designer</span> in the works who's
            ready to take on any challenge you hit me with. I am taking a{' '}
            <span className="highlight">Coding Bootcamp </span>
            under the <span id="ut">University of Texas</span> banner and will
            graduate from the course in December 2022. This site is where all of
            my work is documented, feel free to look around!
          </p>
        </div>
        <div className="homeCardRight">
          <img id="homeLogo" alt="enlarged logo" src={Turtle}></img>
        </div>
      </div>
    </section>
  );
}

export default StartingPage;
