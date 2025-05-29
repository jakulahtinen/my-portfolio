
export default function Hero() {
  return (
    <section 
    id="hero" 
    className="flex flex-col items-center justify-centerpx-6 text-center bg-gray-100"
    data-aos="fade-up"
    >
      <img
        src="\CV_kuva.jpg"
        alt="Oma nimi"
        className="pt-10 w-100 h-100 rounded-full mb-6 object-contain max-w-xs max-h-xs md:max-w-sm md:max-h-sm lg:max-w-md lg:max-h-md xl:max-w-lg xl:max-h-lg 2xl:max-w-xl 2xl:max-h-xl border-2-quarter border-gray-300 shadow-lg"
      />
      <h2 className="text-black text-3xl font-bold mb-4 underline">About Me</h2>
      <p className="max-w-xl text-gray-600 text-lg">
        Hello! I graduated as a Software Engineer in January 2025, and I have a passion for full-stack development.
      </p>
      <p className="max-w-xl text-gray-600 text-lg mt-2">
        I am starting a new position as a Software Engineer at HevTec Oy in June 2025.
      </p>
        <p className="max-w-xl text-gray-600 text-lg mt-2">
        Currently I am also learning new technologies and building side-projects as a hobby. 
       </p>
        <p className="max-w-xl text-gray-600 text-lg mt-2 pb-10">
        In my freetime, i enjoy 🏕️camping, 🛥️boating, 🎸playing guitar,🏋🏼going gym, 📖reading books and diving into 🎮video games.
        </p>
        <p className="max-w-xl text-gray-600 text-lg mt-4 pb-10">
        📍Helsinki, Finland
        </p>
    </section>
  );
}