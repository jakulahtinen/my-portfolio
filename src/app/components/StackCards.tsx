import { useState } from 'react';

export default function Stack() {

    const [openTooltip, setOpenTooltip] = useState<number | null>(null);
    const techs = [
        {
            img: "/techicons/atom.png",
            label: "React",
            tooltip: "2 years of experience (School/Projects)",
        },
        {
            img: "/techicons/typescript.png",
            label: "TypeScript",
            tooltip: "2 years of experience (School/Projects)",
        },
        {
            img: "/techicons/nextjs.png",
            label: "Next.js",
            tooltip: "Currently learning",
        },
        {
            img: "/techicons/css.png",
            label: "CSS",
            tooltip: "2 years of experience (School/Projects)",
        },
        {
            img: "/techicons/tailwind.png",
            label: "Tailwind CSS",
            tooltip: "Currently learning",
        },
        {
            img: "/techicons/git.png",
            label: "Git",
            tooltip: "2 years of experience",
        },
        {
            img: "/techicons/postman.png",
            label: "Postman",
            tooltip: "Can use for API testing",
        },
        {
            img: "/techicons/azure.png",
            label: "Azure",
            tooltip: "One project experience / 1 year",
        },
        {
            img: "/techicons/csharp.png",
            label: "C#",
            tooltip: "2 years of experience (School/Projects)",
        },
        {
            img: "/techicons/dotnet.png",
            label: ".NET Framework",
            tooltip: "2 years of experience (School/Projects)",
        },
    ];



    return (
        <section 
            id="stack" 
            className="bg-white py-10 scroll-mt-20"
            data-aos="fade-up"
        >
            <h2 className="text-3xl font-bold text-center mb-10 text-black underline">My Tech Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 max-w-2xl mx-auto gap-2">
                {techs.map((tech, idx) => (
                    <div
                        key={tech.label}
                        className="flex flex-col items-center bg-gray-100 p-5 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 group relative"
                        onClick={() => setOpenTooltip(openTooltip === idx ? null : idx)}
                        onMouseLeave={() => setOpenTooltip(null)}
                        tabIndex={0}
                    >
                        <img
                            src={tech.img}
                            alt={tech.label}
                            className="w-10 h-10"
                        />
                        <span className="text-sm font-semibold text-black mt-2">{tech.label}</span>
                        <div
                            className={`
                                absolute top-25 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1
                                pointer-events-none z-30
                                transition-opacity duration-200
                                ${openTooltip === idx ? "opacity-100" : "opacity-0"}
                                group-hover:opacity-100
                                max-w-lg
                            `}
                        >
                            {tech.tooltip}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}