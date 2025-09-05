import { useNavigate } from "react-router";

const MoonIcon = () => (
    <svg className="w-[20px] h-[20px] block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
);

function Index() {
    const navigator = useNavigate();
    const navigate = (redirect: string) => {
        navigator(redirect);
    };

    return (
        <div id="body" className="font-system bg-bg-dark text-text-primary min-h-screen flex flex-col items-center p-[20px] supports-[height:100dvh]:min-h-dvh">
            <button
                aria-label="Toggle theme"
                className="fixed top-[20px] right-[20px] bg-bg-light border-solid border-2 border-gray-600 rounded-md pt-[8px] pb-[8px] pr-[12px] pl-[12px] cursor-pointer flex items-center gap-2 text-[1em] text-text-primary hover:bg-bg-lighter hover:border-border-hover hover:translate-y-[-1px] active:translate-y-0"
            >
                <MoonIcon />
            </button>
            <div id="startScreen" className="flex flex-col items-center gap-[25px] text-center max-w-[800px] w-full p-[20px] mt-auto mb-auto">
                <header>
                    <h1 className="font-mono font-bold text-[clamp(2.5rem,10vw,4rem)]">
                        <span className="text-wong-sky-blue">new</span>
                        &nbsp;
                        <span className="text-wong-orange">Date</span>
                        <span className="text-wong-grey">(</span>
                        <span className="text-wong-bluish-green">"wtf"</span>
                        <span className="text-wong-grey">)</span>
                    </h1>
                    <p className="text-text-secondary text-[clamp(1.2rem,4vw,2em)] italic">How well do you know JavaScript's Date class?</p>
                </header>

                <p className="text-text-secondary font-mono w-full max-w-[500px] text-[1.1em] italic bg-bg-light p-[15px] rounded-lg text-balance">
                    All questions verified using NodeJS 24.4.0 on a MacBook Pro set to the BST timezone (UTC+1).
                </p>

                <button onClick={() => navigate('/question')} className="bg-primary hover:bg-primary-hover text-bg-dark border-none rounded-lg font-bold cursor-pointer w-full max-w-[250px] py-3 text-base sm:text-xl font-sans">
                    Start Quiz
                </button>
            </div>
            <footer className="text-center text-gray-300 text-sm">
                <p>
                    made with ❤️ by <a href="https://samwho.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover">samwho</a>
                </p>
            </footer>
        </div>
    )
}

export default Index;