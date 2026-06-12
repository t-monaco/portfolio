import {
    Bento,
    Closer,
    Contact,
    Experience,
    Footer,
    Hero,
    KonamiEgg,
    Marquee,
    Overlays,
    Principles,
    StatsBand,
    StatusBar,
} from "./components";

export default function App() {
    return (
        <div
            className="relative z-0 overflow-hidden bg-ink"
            style={{ isolation: "isolate" }}
        >
            <Overlays />
            <KonamiEgg />
            <StatusBar />
            <main className="relative z-[2]">
                <Hero />
                <Marquee />
                <StatsBand />
                <Bento />
                <Experience />
                <Principles />
                <Contact />
                <Closer />
                <Footer />
            </main>
        </div>
    );
}
