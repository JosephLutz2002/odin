import Image from 'next/image'
import Navbar from './components/navbar'
import './globals.css'
/**
 * 
 * @returns home screen functionality and styling bella
 */
export default function Home() {
  return (
    <div>
      <div className='flex'>
        <h1>Welcome to </h1>
        <div className='w-48 h-48 m-8 heading-logo bg-contain'></div>
      </div>
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
        <h2 id='aboutUs'>About Us</h2>
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
        <h3>Why did we create Odin?</h3>
        <p>
          With a humble beginning using a spreadsheet to track our academic marks, our shared aspiration was to develop a more versatile and visually appealing tool to monitor our academic progress effectively.
        </p>
        <p>
          Together, we have created this platform with the hope that it will benefit fellow students.
          We aim to provide an easy-to-use and customizable tool that empowers students to track their academic progress through a user-friendly dashboard for each module.
          Our mission is to make academic management more accessible and efficient for students everywhere.
        </p>
      </div>
      <h2>An Inside Look</h2>
      <p>Odin has two main displays for users.</p>
      <div className='two-column'>
        <div id='module-eg'>
          <h3>The Overiew</h3>
          <p>
            Quickly add and categorize your academic modules. You can set custom names, add course descriptions or course codes, and even colour code your modules, making it easy to identify each one at a glance.
          </p>
          <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="./images/Screenshot 2023-12-01 at 18.29.23.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="./images/bella-img.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
              <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
        <div id='dashboard-eg'>
          <h3>The Dashboard</h3>
          <p>
            Add, update, and track your marks for various assignments, quizzes, tests, and projects. Watch your progress evolve through visual graphs and charts that offer a dynamic representation of your performance in each module.
          </p>
          <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
              </div>
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
              <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
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
              <a className='links'>jkolutz@gmail.com</a>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <a className='links'>bellascholtz19@gmail.com</a>
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
          <ul className="max-w-md m-5 space-y-1 text-white-500 list-inside space-y-4">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <a href='' className='links'>Create an Account</a>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <a href='' className='links'>Login</a>
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <a href='#aboutUs' className='links'>About Us</a>
            </li>
          </ul>
        </div>
        <div>
          <div className='w-64 h-64 m-5 bg-contain logo-sqr'></div>
        </div>
      </footer>
    </div>
  )
}
