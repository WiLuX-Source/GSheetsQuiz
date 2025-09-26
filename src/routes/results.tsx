import { Navigate, useLocation, useNavigate } from "react-router";

const CopyIcon = () => (
    <svg className="w-[14px] h-[14px] stroke-text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
)

function Result() {
    const location = useLocation();
    const navigate = useNavigate();
    if (!location.state) {
        return <Navigate to="/" />;
    }
    const {score, total} = location.state;
    return (
        <div id="body" className="font-system bg-bg-dark text-text-primary min-h-screen flex flex-col items-center p-[20px] supports-[height:100dvh]:min-h-dvh">
            <div id="resultsScreen" className="flex flex-col items-center gap-[25px] text-center max-w-[800px] w-full flex-grow">
                <span className="text-primary text-[2rem] mb-[40px] font-bold sm:text-[3rem]">You got to the end!</span>
                <span id="score" className="text-primary text-[3rem] font-bold m-[40px] sm:text-[5rem]">{score} / {total}</span>
                <div id="share-box" className="relative bg-bg-light border-2 border-border rounded-lg p-[15px] pr-[47px] mt-[20px] max-w-[500px] w-full font-mono text-[0.9em] text-text-secondary">
                    <button id="copy" className="absolute top-[8px] right-[8px] bg-bg-lighter border-1 border-border rounded-sm p-[4px] cursor-pointer w-[24px] h-[24px] flex items-center justify-center">
                        <CopyIcon />
                    </button>
                    <div id="message">I scored {score} / {total} on https://jsdate.wtf and all I got was this lousy text to share on social media.</div>
                </div>
                <div id="button-row" className="flex flex-col gap-[12px] mt-[15px] justify-center items-center w-full">
                    <button onClick={() => navigate("/quiz/demo")} className="bg-secondary hover:bg-secondary-hover text-bg-dark border-none rounded-lg font-bold cursor-pointer w-full py-3 text-[1em] font-sans max-w-[200px] sm:text-[1.1em] sm:max-w-[250px]">Restart</button>
                    <button onClick={() => navigate("/")} className="bg-bg-light hover:bg-bg-lighter text-text-primary border-none rounded-lg font-bold cursor-pointer w-full py-3 text-[1em] font-sans max-w-[200px] sm:text-[1.1em] sm:max-w-[250px]">Main Menu</button>
                </div>
                <footer className="text-center text-gray-300 text-sm mt-auto">
                    <p>
                        made with ❤️ by <a href="https://samwho.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover">samwho</a>
                    </p>
                </footer>
            </div>
        </div>
    )
}

export default Result;