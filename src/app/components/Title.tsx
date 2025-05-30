import Image from 'next/image';

export default function Title() {
  return (
    <section 
      id="title" 
      className="relative flex justify-center text-center pt-22 pb-10"
      data-aos="fade-up"
    >
      <div className="relative w-full max-w-6xl mx-auto h-80 md:h-96 rounded-b-3xl overflow-hidden">
        <Image
          src="/nightsky.jpg"
          alt="Night sky"
          style={{ objectFit: "cover" }}
          quality={90}
          priority
          fill
        />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/90 to-transparent pointer-events-none" />
        {/* Text over image */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-4">
            PORTFOLIO
          </h1>
          <p className="text-2xl md:text-3xl mt-2">Jaku Lahtinen</p>
        </div>
      </div>
    </section>
  );
}