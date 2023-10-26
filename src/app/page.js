import Image from 'next/image'
import Navbar from './components/navbar'
import './globals.css'
/**
 * 
 * @returns home screen functionality bella
 */
export default function Home() {
  return (
    <div>
      <h1>Joseph Lutz & Bella Scholtz</h1>
      <p>This section will have a base into of us</p>
      <div>
        <h1>About Us</h1>
        {/* Have floating image next to each name */}
        <h2>Joseph</h2> {/*Image float left  for Joe*/}
        <p>
          Graduating from Stellenbosch University, in 2023, with a BSc Bachelor's degree that double majored in Computer Science and Applied Mathematics.
          I have a deep passion for programming and mathematics with a goal of moving my career to focus on the area of Machine Learning and Artificial Intelligence. <br></br>
          I am driven and focused to put my abilities towards the betterment of my field.
        </p>
        <p>If you would like to view a full list of my skills and expertise you can download a copy of my Resume/CV</p>
        <button>Download CV</button>{/*Create button to download PDF of CV */}
        <h3>Technical Expertise</h3>
        <p>Highlight your programming languages, tools, and technologies you specialize in.</p>
        <h3>Certifications</h3>
        <p>List of certificates / courses completed</p>
        <h2>Bella</h2> {/*Image float right  for Bella*/}
        <p>
          Originally a Computer Science student at Stellenbosch University before I changed my degree to Socio-Informatics (Information Systems Management/Information Science). <br></br>
          I have a love for designing and programming.
        </p>
        <p>If you would like to view a full list of my skills and expertise you can download a copy of my Resume/CV</p>
        <button>Download CV</button>{/*Create button to download PDF of CV */}
        <h3>Technical Expertise</h3>
        <p>Highlight your programming languages, tools, and technologies you specialize in.</p>
        <h3>Certifications</h3>
        <p>List of certificates / courses completed</p>
      </div>
      <h1>Portfolio Showcase</h1>
      {/*2 columns with one side for Joseph and the other for Bella */}
      <div className='two-column'>
        <div id='Joseph-Showcase'>
          <h2>Top Projects</h2>
          <p>
            List top 3 projects with short description <br></br>
            Eg. Compiler, Concurency game engine & one other (each in h3).
          </p>
          <button>Joseph's Projects</button>{/*Button with link to Joseph's Projects page */}
          <p>To look at more of my projects in detail you can visit my projects page or view my git profile</p>
          <button>Joseph's Projects</button>{/*Button with link to Joseph's Projects page */} <button>Joseph's GitHub</button>{/*Button with link to Joseph's Github profile */}
        </div>
        <div id='Bella-Showcase'>
          <h2>Top Projects</h2>
          <p>List top 3 projects with short description</p>
          <button>Bella's Projects</button>{/*Button with link to Bella's Projects page */}
          <p>To look at more of my projects in detail you can visit my projects page or view my git profile</p>
          <button>Bella's Projects</button>{/*Button with link to Bella's Projects page */} <button>Bella's GitHub</button>{/*Button with link to Bella's Github profile */}
        </div>
      </div>
      <h1>GitHub Activity</h1>
      {/*Embed GitHub activity feed to show our recent code commits and contributions */}
      <div className='two-column'>
        <div id='Joe-github-activity'>
          <h2>Joseph's recent activity</h2>
        </div>
        <div id='Bella-github-activity'>
          <h2>Bella's recent activity</h2>
        </div>
      </div>
    </div>
  )
}
