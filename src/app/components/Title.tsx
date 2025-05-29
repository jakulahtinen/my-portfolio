export default function Title() {
  return (
    <section 
    id="title" 
    className="items-center justify-center  text-center bg-white pb-10 scroll-mt-30"
    data-aos="fade-up"
    >
      <div className="mt-30 border-dotted border-2 border-black rounded-lg max-w-full sm:max-w-lg md:max-w-2xl mx-auto p-4 sm:p-6 bg-gray-50 shadow-lg">
        <h1 className="text-4xl font-bold text-black pb-5">
        Hello, I am Jaku!
        </h1>
        <p className="max-w-xl mx-auto text-gray-600 text-xl mt-4">
            I am Jaku Lahtinen, a freshly graduated Software Engineer with a passion for full-stack development.
        </p>
        <p className="max-w-xl mx-auto text-gray-600 text-xl mt-4">
            I enjoy working on both backend and frontend development, primarily using C#/.NET and React/TypeScript and currently I am learning NextJS with Tailwind CSS.
        </p>
      </div>
    </section>
  );
}