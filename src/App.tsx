const MoonIcon = () => (
  <svg className="w-[20px] h-[20px] block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

function App() {
  return (
    <div className='font-system bg-bg-dark h-dvh flex flex-col items-center justify-center text-center px-4'>
<button
        aria-label="Toggle theme"
        className="fixed top-[20px] right-[20px] bg-bg-light border-solid border-2 border-gray-600 rounded-sm pt-[8px] pb-[8px] pr-[12px] pl-[12px] cursor-pointer flex items-center gap-2 text-[1em] text-text-primary hover:bg-bg-lighter hover:border-border-hover hover:translate-y-[-1px] active:translate-y-0"
      >
        <MoonIcon />
      </button>
      <div className="max-w-[800px] flex flex-col gap-6 items-center justify-center">
        <h1 className="font-mono font-bold text-4xl sm:text-5xl md:text-6xl" id="main-title">
          <span className="text-wong-sky-blue">new</span>
          &nbsp;
          <span className="text-wong-orange">Date</span>
          <span className="text-wong-grey">(</span>
          <span className="text-wong-bluish-green">"wtf"</span>
          <span className="text-wong-grey">)</span>
        </h1>
        <p className="text-gray-300 text-2xl sm:text-3xl italic">How well do you know JavaScript's Date class?</p>
        <p className="text-gray-300 font-mono italic rounded-lg bg-bg-light text-base sm:text-lg p-4 text-balance w-full md:w-[75%]">
          All questions verified using NodeJS 24.4.0 on a MacBook Pro set to the BST timezone (UTC+1).
        </p>
        <button className="bg-primary hover:bg-primary-hover text-bg-dark border-none rounded-lg font-bold cursor-pointer w-full max-w-[250px] pt-3 pb-3 text-base sm:text-xl">
          Start Quiz
        </button>
      </div>
      <footer className="absolute bottom-0 left-0 right-0 p-4 text-center text-gray-300 text-sm">
        <p>
          made with ❤️ by <a href="https://samwho.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover">samwho</a>
        </p>
      </footer>
    </div>
  );
}

export default App;