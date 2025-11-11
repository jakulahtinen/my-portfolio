
export default function Experience() {
    return(
    <section 
        id="experience-cards" 
        className="bg-white py-10 scroll-mt-20"
        data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-black underline">Education & Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
            <div className="bflex flex-col items-start bg-gray-100 p-6 rounded-lg shadow-md space-y-2 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center space-x-3">
                  <img
                  src="/icons/education.png"
                  alt="icon1"
                  className="w-10 h-10"
                  />
                  <span className="text-xl font-semibold text-black">Education</span>
              </div>
                <div className="relative"> 
                    <div className="mb-8">
                        <p className="font-semibold text-black">Degree Programme in Software Engineering</p>
                        <p className="text-sm text-gray-600"> South-Eastern Finland University of Applied Sciences  | 2021 – 2025</p>
                    </div>
                    {/* Timeline line and dot */}
                    <div className="absolute right-[-20px] top-2 w-3 h-3 bg-green-500 rounded-full z-10"></div>
                    <div className="absolute right-[-15px] top-3 h-[100%] w-0.5 bg-gradient-to-t from-black to-green-200"></div>
                    <div className="mb-8">
                        <p className="font-semibold text-black">
                            Vehicle Body Mechanic
                        </p>
                        <p className="text-sm text-gray-600 ">
                            South Savo Vocational College | 2014 - 2017
                        </p>
                        <div className="absolute right-[-20px] top-22 sm:top-24 w-3 h-3 bg-black rounded-full z-10"></div>
                    </div>
                </div>
            </div>
            
          {/* Card 2 */}
          <div className="bflex flex-col items-start bg-gray-100 p-6 rounded-lg shadow-md space-y-2 hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center space-x-3">
                <img
                    src="/icons/challenge.png"
                    alt="icon1"
                    className="w-10 h-10 mb-2"
                />
                <span className="text-xl font-semibold text-black">Work experience</span>
             </div>
             <div className="relative">
                    <div className="mb-8">
                        <p className="font-semibold text-black">Software Engineer</p>
                        <p className="text-sm text-gray-600">Hevtec Oy | June 2025 - Present</p>
                        <p className="text-sm text-black mt-3">
                            My main focus at Hevtec Oy is on web development and integrating embedded systems such as
                            Codesys -based displays into modern interfaces built with Next.js and React. 
                        </p>
                        <p className="text-sm text-black mt-3">
                            I also participate to
                            development of Codesys libraries and function blocks based on technical documentation,
                            including I/O mapping and CAN message handling. Also working and testing physical components for customers.
                        </p>
                        <p className="text-sm text-black mt-3">
                        In my latest project, I developed an EV charging simulation system that models real-time
                        charging behaviour and visualizes live metrics through an interactive tablet UI. The system also
                        controls LED strips to simulate charging effects. This solution was showcased at Teknologia 25.
                        </p>
                    </div>


                    {/* Timeline line and dot */}
                    <div className="absolute right-[-20px] top-2 w-3 h-3 bg-green-500 rounded-full z-10"></div>
                    <div className="absolute right-[-15px] top-3 h-[100%] w-0.5 bg-gradient-to-t from-black to-green-200"></div>


                    <div className="mb-8">
                        <p className="font-semibold text-black mt-4">Software Engineer Intern</p>
                        <p className="text-sm text-gray-600">Xamk University | January 2025 - May 2025</p>
                        <p className="text-sm text-black mt-3">Project website: <a href="https://xsahko.xamk.fi/" className="hover:underline hover:text-green-600">https://xsahko.xamk.fi/</a></p>
                        <p className="text-sm text-black mt-3">
                            Collaborated on a project aimed at developing an application that calculates user’s
                            electricity usage and consumption prices based on consumption files to provide the best
                            options.
                        </p>
                        <p className="text-sm text-black mt-3">
                            My main responsibilities in the development of the application were building the estimated
                            counter for the back/front side, xUnit tests, building the CI pipeline, and the visual layout of
                            the site.
                        </p>
                        <div className="absolute right-[-20px] top-28 w-3 h-3 bg-green-600 rounded-full z-10"></div>
                    </div>
                    <div>
                        <p className="font-semibold text-black mt-4">Machine Operator</p>
                        <p className="text-sm text-gray-600">Mölnlycke Health Care Oy | July 2018 - August 2023</p>
                        <p className="text-sm text-black mt-3">
                            I was a machine operator at Mölnlycke Health Care Oy, where my duties included the duties of a machine operator, maintenance and driving of production
                            machines and orientation of new employees. Product quality control.
                        </p>
                        <div className="absolute right-[-20px] top-107 w-3 h-3 bg-black rounded-full z-10"></div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </section>
    )
}

{/* TÄNNE VIELÄ YMPYRÖIYTYINÄ ALAS TEKNIIKAT/TEKNOLOGIAT JOITA KÄYTETTY*/}