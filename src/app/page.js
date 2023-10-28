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
        <div className='w-64 h-64 m-5 bg-contain rounded-lg shadow-lg float-left joe-image'></div>
        <h3>Who are we?</h3>
        <p>
          Our paths crossed during the final stages of our first year at university, and we quickly discovered our shared passion for developing new projects and enhancing our coding skills.
        </p>
        <p>
          Joseph holds a degree in computer science and applied mathematics, while Bella's expertise lies in socio-informatics, also known as Information Systems Management.
          This combination of skills allows us to create innovative solutions and projects that we hope can benefit others.
        </p>
        <p>
          This partnership has not only been an exciting journey but a realization of our shared vision to create a tool that empowers students to take control of their academic progress while making the experience enjoyable and informative.
          Our platform is a testament to this shared passion, and we are thrilled to share it with you.
        </p>
      </div>
      <div>
        <div className='w-64 h-64 m-5 bg-contain rounded-lg shadow-lg float-right bella-image'></div>
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
      <p>Odin has two main displays for users</p>
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
      <footer>
        <div>
          <h3>Contact Us</h3>
          <ul className="max-w-md m-5 space-y-1 text-white-500 list-inside space-y-4">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              jkolutz@gmail.com
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              bellascholtz19@gmail.com
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +27 (71) 888 5833
            </li>
          </ul>
        </div>
        <div>
          <h3>Quick Links</h3>
        </div>
        <div>
          <div className='w-64 h-64 m-5 bg-contain float-right logo-sqr'></div>
        </div>
      </footer>
    </div>
  )
}
