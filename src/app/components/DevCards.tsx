export default function DevCards() {
  return (
    <section 
      id="dev-cards" 
      className="bg-white py-10 scroll-mt-20"
      data-aos="fade-up"
      >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-black underline">My Main Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
            <div className="flex flex-col items-start bg-gray-100 p-6 rounded-lg shadow-md space-y-2 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center space-x-3">
                  <img
                  src="/icons/coding.png"
                  alt="icon1"
                  className="w-10 h-10"
                  />
                  <span className="text-xl font-semibold text-black">Front-end</span>
              </div>
              <p className="text-gray-700">
                  My main skills in Front-end development are React Framework, TypeScript and CSS.
                  Currently also learning Next.js and Tailwind CSS.
              </p>
            </div>
            
          {/* Card 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center space-x-3">
                <img
                    src="/icons/development.png"
                    alt="icon1"
                    className="w-10 h-10 mb-2"
                />
                <span className="text-xl font-semibold text-black">Back-end</span>
            </div>
            <p className="text-gray-700">My main skills in Back-end development are C#, .NET, ASP.NET Core and Entity Framework.</p>
          </div>

            {/* Card 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                <img
                    src="/icons/database.png"
                    alt="icon1"
                    className="w-10 h-10 mb-2"
                />
                <span className="text-xl font-semibold text-black">Databases</span>
            </div>
            <p className="text-gray-700">My main skills in Database area are SQL and lately PostgreSQL.</p>
          </div>

            {/* Card 4 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                    <img
                        src="/icons/devops.png"
                        alt="icon1"
                        className="w-10 h-10 mb-2"
                    />
                    <span className="text-xl font-semibold text-black">CI/CD</span>
                </div>
            <p className="text-gray-700">I have some experience with CI/CD-pipelines in GitHub Actions.</p>
          </div>

            {/* Card 5 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                    <img
                        src="/icons/github.png"
                        alt="icon1"
                        className="w-10 h-10 mb-2"
                    />
                    <span className="text-xl font-semibold text-black">Version Control</span>
                </div>
            <p className="text-gray-700">I have experience with Git and GitHub and I can work with them fluently.</p>
          </div>

            {/* Card 6 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                    <img
                        src="/icons/cloud.png"
                        alt="icon1"
                        className="w-10 h-10 mb-2"
                    />
                    <span className="text-xl font-semibold text-black">Cloud</span>
                </div>
            <p className="text-gray-700">I have some experience with Azure App Service, Azure Key Vault and Azure SQL-Server.</p>
          </div>
        </div>
      </div>
    </section>
  );
}