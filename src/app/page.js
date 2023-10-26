import Image from 'next/image'
import Navbar from './components/navbar'
import "./images/joe-img.jpeg"
import './globals.css'
/**
 * 
 * @returns home screen functionality bella
 */
export default function Home() {
  return (
    <div>
      <h1>Welcome to <span className='accent-word'>Odin</span></h1>
      <p>
        In the dynamic and demanding world of education, staying organized and on top of your academic progress is often a challenging task.
        To address this, we are excited to introduce our innovative web platform designed exclusively for students.
        Our Student Dashboard Web Platform, Odin, is a powerful tool that empowers students to take control of their academic journey like never before.
      </p>
      <p>
        Gone are the days of managing multiple notebooks, spreadsheets, or sticky notes to keep track of your module information, marks, test dates, and project deadlines.
        Our platform offers a comprehensive solution that simplifies and streamlines your academic life.
      </p>
      <h2>Why Choose Odin?</h2>
      <section className='three-column'>
        <div>
          <h4>Personalised Dashboards</h4>
          <p>
            Create dedicated dashboards for each of your modules, allowing you to centralize all relevant information in one place.
            You can easily switch between modules to access specific details.
          </p>
        </div>
        <div>
          <h4>Mark Management</h4>
          <p>
            Input your marks for assignments, quizzes, tests, and projects directly into the platform.
            The system will automatically calculate your current grade and display it prominently, giving you a real-time overview of your academic performance.
          </p>
        </div>
        <div>
          <h4>Assessment Dates</h4>
          <p>
            Stay ahead of your assessments by adding important dates for tests, exams, and project submissions to your module dashboards.
          </p>
        </div>
        <div>
          <h4>Pass/Fail Tracker</h4>
          <p>
            Worried about whether you're on track to pass your courses? Our platform takes the guesswork out of the equation.
            It calculates whether you're meeting the required criteria for passing and notifies you of your running course mark.
          </p>
        </div>
        <div>
          <h4>Data Security & Privacy</h4>
          <p>
            We understand the sensitivity of academic data. Rest assured, your information is securely stored and only accessible to you.
            Your privacy and data security are our top priorities.
          </p>
        </div>
        <div>
          <h4>Platform-Agnostic Accessibility</h4>
          <p>
            Odin is accessible from anywhere, on any device with a web browser, without the need for downloads or installations.
            This means you can seamlessly transition between your devices, ensuring your academic life is always within reach.
          </p>
        </div>
      </section>
      <div>
        <h2>About Us</h2>
        <img src={'joe-img.jpeg'} alt='Image of Joseph Lutz' className='float-left' />
        <p>
          Our paths crossed during the final stages of our first year at university, and we quickly discovered our shared passion for developing new projects and enhancing our coding skills.
        </p>
        <p>
          Joseph holds a degree in computer science and applied mathematics, while Bella's expertise lies in socio-informatics, also known as Information Systems Management.
          This combination of skills allows us to create innovative solutions and projects that we hope can benefit others.
        </p>
        <img src='src/app/images/joe-img.jpeg' alt='Image of Joseph Lutz' className='float-right' />
        <h3>Why did we create Odin?</h3> {/*Image float right*/}
        <p>
          With a humble beginning using a spreadsheet to track our academic marks, our shared aspiration was to develop a more versatile and visually appealing tool to monitor our academic progress effectively.
        </p>
        <p>
          Together, we have created this platform with the hope that it will benefit fellow students. We aim to provide an easy-to-use and customizable tool that empowers students to track their academic progress through a user-friendly dashboard for each module.
          Our mission is to make academic management more accessible and efficient for students everywhere.
        </p>
      </div>
      <h2>An Inside Look</h2>
      <div className='two-column'>
        <div id='module-eg'>
          <h3>The Overiew</h3>
          <p>

          </p>
        </div>
        <div id='dashboard-eg'>
          <h3>The Dashboard</h3>
          <p>

          </p>
        </div>
      </div>
    </div>
  )
}
