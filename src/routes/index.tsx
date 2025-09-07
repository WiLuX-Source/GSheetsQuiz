import { useNavigate } from "react-router";
import { ThemeIcon } from "../components/ThemeIcon";
function Index() {
    const navigator = useNavigate();
    const navigate = (redirect: string) => {
        navigator(redirect);
    };

    return (
        <div id="body" className="font-system bg-bg-dark text-text-primary min-h-screen flex flex-col items-center p-[20px] supports-[height:100dvh]:min-h-dvh">
            <ThemeIcon />
            <div id="startScreen" className="flex flex-col items-center gap-[25px] text-center max-w-[800px] w-full p-[20px] mt-auto mb-auto">
                <header>
                    <h1 className="font-mono font-bold text-[2.5rem] sm:text-[4rem]">
                        <span className="text-wong-sky-blue">new</span>
                        &nbsp;
                        <span className="text-wong-orange">Date</span>
                        <span className="text-wong-grey">(</span>
                        <span className="text-wong-bluish-green">"wtf"</span>
                        <span className="text-wong-grey">)</span>
                    </h1>
                    <p className="text-text-secondary text-[1.1em] italic sm:text-[2em]">How well do you know JavaScript's Date class?</p>
                </header>

                <p className="text-text-secondary font-mono w-full max-w-[500px] text-[1em] italic bg-bg-light p-[15px] rounded-lg text-balance sm:text-[1.1em]">
                    All questions verified using NodeJS 24.4.0 on a MacBook Pro set to the BST timezone (UTC+1).
                </p>

                <button onClick={() => navigate('/question')} className="bg-primary hover:bg-primary-hover text-bg-dark border-none rounded-lg font-bold cursor-pointer w-full py-3 text-[1em] font-sans max-w-[200px] sm:text-[1.1em] sm:max-w-[250px]">
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