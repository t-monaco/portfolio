import { About, Contact, Experience, Main, Navbar } from "./components";
import { GlobalStyles } from "./styles";

const App: React.FC<NonNullable<unknown>> = () => {
    return (
        <>
            <GlobalStyles />
            <div className="relative z-0 bg-[#242431] min-h-screen overflow-hidden">
                <div className=" bg-cover bg-no-repeat bg-center relative">
                    <Navbar />
                    <Main />
                    <About />
                    <Experience />
                    <Contact />
                </div>
            </div>
        </>
    );
};

export default App;
