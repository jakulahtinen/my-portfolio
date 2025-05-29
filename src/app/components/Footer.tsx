
export default function Footer() {
    return (
        <footer className="w-full backdrop-blur-md bg-black/75 px-5 py-3 text-sm font-semibold transition-colors duration-300 hover:bg-accent-600">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col items-center justify-center text-white">
            <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Jaku Lahtinen.
            </p>
        </div>
        </footer>
    );
}