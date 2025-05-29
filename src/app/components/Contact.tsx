
export default function ContactForm() {
  return (
    <section 
    id="contact" 
    className="py-16 bg-gradient-to-b from-white to-gray-100 text-center"
    data-aos="fade-up"
    >
    <h1 className="text-3xl font-bold text-center mb-8 text-black underline">Contact Me</h1>

      <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-10">
        Feel free to connect with me on LinkedIn or check out my work on GitHub!
      </p>
      <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-10">
        <b>Email: </b> jakulahtinen@msn.com
      </p>

      <div className="flex justify-center space-x-6">
        {/* GitHub */}
        <a
            href="https://github.com/jakulahtinen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-white shadow-md hover:shadow-lg border border-gray-200 px-6 py-3 rounded-xl transition-all duration-300 hover:bg-gray-50"
        >
        <img
            src="/icons/githubblack.png" 
            alt="GitHub" className="w-6 h-6" 
        />
          <span className="text-black font-semibold">GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
            href="https://www.linkedin.com/in/jaku-lahtinen-903b97276/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-white shadow-md hover:shadow-lg border border-gray-200 px-6 py-3 rounded-xl transition-all duration-300 hover:bg-gray-50"
        >
        <img
            src="/icons/linkedin.png"
            alt="LinkedIn" className="w-6 h-6"
        />
          <span className="text-black font-semibold">LinkedIn</span>
        </a>
      </div>
    </section>
  );
}