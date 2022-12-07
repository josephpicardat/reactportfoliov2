import Turtle from '../assets/Turtle.png';
import Profile from '../assets/profile_picture.jpeg';
import RecipeIO from '../assets/recipeIO.png';
import Gifter from '../assets/Project-Preview.png';
import CheatSheet from '../assets/CSS-Snippet-Cheatsheet.png';

function PortfolioBody() {
  return (
    <div className="wrapper">
      {/* Home Page */}
      <section className="pagesWrapper">
        <div className="pages" id="home">
          <div className="homeCardLeft">
            <p className="title" id="hi">
              Hi! I'm
            </p>
            <p className="title" id="name">
              Joseph,
            </p>
            <p className="normalText">
              A <span className="highlight">web designer</span> in the works
              who's ready to take on any challenge you hit me with. I am taking
              a <span className="highlight">Coding Bootcamp </span>
              under the <span id="ut">University of Texas</span> banner and will
              graduate from the course in December 2022. This site is where all
              of my work is documented, feel free to look around!
            </p>
          </div>
          <div className="homeCardRight">
            <img id="homeLogo" alt="enlarged logo" src={Turtle}></img>
          </div>
        </div>
      </section>

      {/* About Me Page */}
      <section className="pagesWrapper">
        <div className="pages" id="about-me">
          <div className="homeCardLeft">
            <h2 class="header_sections">
              <span class="num">0.1 </span>About Me
            </h2>
            <h3 class="text-sections">
              Hi my name is Joseph Picardat and I enjoy adventure such as scuba
              diving and the creativity that programming gives me. Over the
              years I have been acquainted with many different genres of
              academics in my college career including engineering, computer
              science, and music performance. I am an Eagle Scout and love the
              outdoors and will take charge in any situation as needed.
            </h3>

            <h3 class="text-sections">
              I have experience in a few programing languages including: Python,
              MatLab, C++, HTML, CSS, and Javascript. I am not only acquainted
              with full-stack development, but have years of experience with
              SolidWorks, 3D printer software, and VCarve Pro. This includes the
              understanding and use of CNC machines, 3D printers, and laser
              cutters as well.
            </h3>
          </div>
          <div className="homeCardRight">
            <img id="profileImg" alt="profile" src={Profile}></img>
          </div>
        </div>
      </section>

      {/* Past Work */}
      <section className="pagesWrapper">
        <div className="pages" id="pastWork">
          <h2 class="header_sections">
            <span class="num">0.2 </span>
            {` `}Work
          </h2>

          <div
            className="workOne"
            href="https://recipeio-project2.herokuapp.com/"
          >
            <p className="workText">RecipeIO</p>
            <img id="workOne" alt="recipeIO" src={RecipeIO}></img>
          </div>

          <div className="secondWorkGroup">
            <div className="bottomWorks">
              Gifter
              <img id="workTwo" alt="Gifter" src={Gifter}></img>
            </div>
            <div className="bottomWorks">
              <p className="workText"> CSS Snippet Cheatsheet</p>
              <img
                id="workThree"
                alt="CSS Snippet Cheatsheet"
                src={CheatSheet}
              ></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioBody;
