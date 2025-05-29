'use client';

import { useState } from "react";

export default function ProjectCard() {

    const [showXMenu, setShowXMenu] = useState<number | null>(null);
    const [showHauMenu, setShowHauMenu] = useState<number | null>(null);

    return (
        <section 
        id="projects" 
        className="bg-white py-10 scroll-mt-20 mt-10"
        data-aos="fade-up"
        >
            <h2 className="text-3xl font-bold text-center mb-10 text-black underline">Latest Projects</h2>
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {/* Project Card 1 */}
                    <div className="relative bg-gray-100 p-6 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-black">X-Sähkö</h3>
                        <img
                            src="/projectassets/xsahko-front.png"
                            alt="xsahko project thumbnail"
                            className="rounded-lg w-full h-85 md:h-105 lg:h-125 object-cover mt-4"
                        />
                        <p className="text-gray-700 mt-4">
                            Collaborated on a project aimed at developing an application that calculates user's electricity usage and consumption prices based on consumption files to provide the best options.
                            Implemented features allowing users to calculate also directive electricity price costs.
                        </p>
                        <p className="text-gray-700 mt-8">
                            <b>Technologies:</b>
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2 text-gray-700">
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-blue-400 bg-white font-semibold">C#</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-green-400 bg-white font-semibold">.NET</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-purple-400 bg-white font-semibold">React</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-green-400 bg-white font-semibold">TypeScript</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-cyan-400 bg-white font-semibold">SQL</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-quartz-400 bg-white font-semibold">EF Core</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-red-400 bg-white font-semibold">CI/CD</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-ember-400 bg-white font-semibold">Azure</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-teal-400 bg-white font-semibold">GIT</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-yellow-400 bg-white font-semibold">GitHub</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-indigo-400 bg-white font-semibold">API</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-lime-400 bg-white font-semibold">ASP.NET</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-navy-400 bg-white font-semibold">CSS</span>
                        </div>
                        
                        <a href="https://xsahko.xamk.fi/" className="text-blue-500 inline-block mt-23">View Project</a>
                        <img
                            src="/icons/githubblack.png"
                            alt=""
                            className="w-8 h-8 inline-block ml-4 hover:scale-110 transition-transform duration-300 cursor-pointer"
                            onClick={() => setShowXMenu(showXMenu === 0 ? null : 0)}
                        />
                        {showXMenu === 0 && (
                            <div className="absolute right-4 bottom-4 bg-white shadow-lg rounded-lg p-4">
                                <a
                                    href="https://github.com/xamkfi/tempus-frontend"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-4 py-2 hover:bg-gray-100 rounded text-black"
                                >
                                    Frontend
                                </a>
                                <a
                                    href="https://github.com/xamkfi/tempus-electrica-backend"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-4 py-2 hover:bg-gray-100 rounded text-black"
                                >
                                    Backend
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Project Card 2 */}
                    <div className="relative bg-gray-100 p-6 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300">
                        <h3 className="text-xl font-semibold text-black">Hirvensalmen Autourheilijat</h3>
                        <img
                        src="/projectassets/hau-front.png"
                        alt="xsahko project thumbnail"
                        className="rounded-lg w-full h-85 md:h-105 lg:h-125 object-cover mt-4"
                        />
                        <p className="text-gray-700 mt-4">
                            New website of a Hirvensalmen Autourheilijat motorsport club.
                            The site is being rebuilt to replace an outdated WordPress site, providing a modern and user-friendly experience for both visitors and administrators.
                            Visitors can easily find latest news and events, while administrators can manage content efficiently.
                        </p>
                        <p className="text-gray-700 mt-2">
                            <b>Technologies:</b>
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2 text-gray-700">
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-blue-400 bg-white font-semibold">C#</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-green-400 bg-white font-semibold">.NET</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-purple-400 bg-white font-semibold">React</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-green-400 bg-white font-semibold">TypeScript</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-cyan-400 bg-white font-semibold">JWT</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-quartz-400 bg-white font-semibold">EF Core</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-red-400 bg-white font-semibold">CI/CD</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-teal-400 bg-white font-semibold">GIT</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-yellow-400 bg-white font-semibold">GitHub</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-indigo-400 bg-white font-semibold">API</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-lime-400 bg-white font-semibold">ASP.NET</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-navy-400 bg-white font-semibold">CSS</span>
                            <span className="inline-block px-2 py-0.5 rounded-full ring-2 ring-violet-400 bg-white font-semibold">PostgreSQL</span>
                        </div>
                        
                        <a href="#" className="text-blue-500 mt-14 inline-block">View Project</a>
                        <img
                        src="/icons/githubblack.png"
                        alt=""
                        className="w-8 h-8 inline-block ml-4 hover:scale-110 transition-transform duration-300 cursor-pointer"
                        onClick={() => setShowHauMenu(showHauMenu === 0 ? null : 0)}
                        />
                        {showHauMenu === 0 && (
                            <div className="absolute right-4 bottom-4 bg-white shadow-lg rounded-lg p-4">
                                <a
                                    href="https://github.com/jakulahtinen/hau-frontend"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-4 py-2 hover:bg-gray-100 rounded text-black"
                                >
                                    Frontend
                                </a>
                                <a
                                    href="https://github.com/jakulahtinen/hau-backend"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-4 py-2 hover:bg-gray-100 rounded text-black"
                                >
                                    Backend
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}