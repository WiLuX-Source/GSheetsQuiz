const MoonIcon = () => (
    <svg className="w-[20px] h-[20px] block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
);

function Question() {

    return (
        <div id="body" className="font-system bg-bg-dark text-text-primary min-h-screen flex flex-col items-center p-[20px] supports-[height:100dvh]:min-h-dvh">
            <button
                aria-label="Toggle theme"
                className="fixed top-[20px] right-[20px] bg-bg-light border-solid border-2 border-gray-600 rounded-md pt-[8px] pb-[8px] pr-[12px] pl-[12px] cursor-pointer flex items-center gap-2 text-[1em] text-text-primary hover:bg-bg-lighter hover:border-border-hover hover:translate-y-[-1px] active:translate-y-0"
            >
                <MoonIcon />
            </button>
            <div id="quizScreen" className="flex flex-col items-center gap-[25px] text-center max-w-[800px] w-full p-[20px] mb-auto">
                <div id="progress" className="text-text-secondary text-[1em] h-[40px]">Question 1 / 28 </div>
                <div id="code-block-container" className="flex justify-center align-center w-full bg-code-bg border-2 border-border rounded-lg p-[20px] font-mono text-[1.25rem] text-text-primary overflow-x-auto max-w-[600px] text-center text-nowrap min-h-[4rem]">
                    <div id="content">
                        Lorem ipsum dolor sit, amet consectetur adipisic
                    </div>
                </div>
                <div id="explanation" className="flex items-center justify-center max-w-[600px] text-center p-[15px] bg-correct-bg border-l-4 border-l-accent-green visible text-[1.1em] text-balance min-h-[6rem] lining-nums rounded-l-md">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sed rerum modi alias voluptatem necessitatibus suscipit repudiandae quod. Repellat perferendis libero, deleniti provident ad porro doloribus ipsam mollitia blanditiis fuga!</p>
                </div>
                <div id="options" className="flex flex-col gap-[15px] max-w-[600px] m-0 w-full">
                    <div id="option1" className="bg-bg-light border-2 border-border rounded-lg px-[20px] py-[15px] cursor-pointer flex items-center gap-[15px] text-[1em]">
                        <div className="bg-border-light text-text-primary w-[32px] h-[32px] rounded-md flex items-center justify-center font-bold shrink-0 text-[1em] pointer-events-none">1</div>
                        <div className="font-mono font-bold pointer-events-none">Invalid Date</div>
                    </div>
                    <div id="option2" className="bg-bg-light border-2 border-border rounded-lg px-[20px] py-[15px] cursor-pointer flex items-center gap-[15px] text-[1em]">
                        <div className="bg-border-light text-text-primary w-[32px] h-[32px] rounded-md flex items-center justify-center font-bold shrink-0 text-[1em] pointer-events-none">2</div>
                        <div className="font-mono font-bold pointer-events-none">2000-01-01T00:00:00.000Z</div>
                    </div>
                    <div id="option3" className="bg-bg-light border-2 border-border rounded-lg px-[20px] py-[15px] cursor-pointer flex items-center gap-[15px] text-[1em]">
                        <div className="bg-border-light text-text-primary w-[32px] h-[32px] rounded-md flex items-center justify-center font-bold shrink-0 text-[1em] pointer-events-none">3</div>
                        <div className="font-mono font-bold pointer-events-none">Throws an error</div>
                    </div>
                    <div id="option4" className="bg-bg-light border-2 border-border rounded-lg px-[20px] py-[15px] cursor-pointer flex items-center gap-[15px] text-[1em]">
                        <div className="bg-border-light text-text-primary w-[32px] h-[32px] rounded-md flex items-center justify-center font-bold shrink-0 text-[1em] pointer-events-none">4</div>
                        <div className="font-mono font-bold pointer-events-none">1970-01-01T00:00:00.000Z</div>
                    </div>
                </div>
            </div>
            <footer className="text-center text-gray-300 text-sm">
                <p>
                    made with ❤️ by <a href="https://samwho.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover">samwho</a>
                </p>
            </footer>
        </div>
    )
}

export default Question;