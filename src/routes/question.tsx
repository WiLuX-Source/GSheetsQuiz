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