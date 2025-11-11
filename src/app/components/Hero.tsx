
export default function Hero() {
  return (
    <section 
    id="hero" 
    className="relative flex flex-col items-center justify-center px-6 text-center bg-gray-100 pt-4"
    data-aos="fade-up"
    >
      <img
        src="/CV_kuva.jpg"
        alt="CV_kuva"
        className="pt-15 mt-10 w-120 h-120 rounded-full mb-6 object-contain max-w-xs max-h-xs md:max-w-sm md:max-h-sm lg:max-w-md lg:max-h-md 
        xl:max-w-lg xl:max-h-lg 2xl:max-w-xl 2xl:max-h-xl border-2-quarter
        border-gray-300 shadow-lg hover:scale-105 transition-transform duration-300"
      />
      <h3 className="text-gray-600 mt-4 text-2xl">Hi, I’m Jaku</h3>
      <h2 className="text-black text-3xl font-bold mb-4 mt-4 underline">About Me</h2>
      <p className="max-w-2xl text-gray-600 text-lg">
        Hello! I am Jaku, Software Engineer currently working at <strong>Hevtec Oy</strong>. My main passion lies in web development, especially using technologies 
          like <strong>Next.js</strong>, <strong>.NET</strong>, and <strong>C#</strong>
      </p>
        <p className="max-w-2xl text-gray-600 text-lg mt-2">
          I love learning new technologies and building side projects in my free time.
        </p>
        <p className="max-w-2xl text-gray-600 text-lg mt-2 pb-10">
        In my freetime, i enjoy 🏕️camping, 🛥️boating, 🎸playing guitar,🏋🏼going gym, 📖reading books and diving into 🎮video games.
        </p>
        <p className="max-w-2xl text-gray-600 text-lg mt-4 pb-10">
        📍Helsinki, Finland
        </p>
    </section>
  );
}