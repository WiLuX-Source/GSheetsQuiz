function App() {
  return (
    <div className='font-system bg-bg-dark h-dvh flex flex-col items-center justify-center text-center'>
      <div className="max-w-[800px] flex flex-col gap-6 items-center justify-center">
        <h1 className="font-mono font-bold text-6xl" id="main-title">
          <span className="text-wong-sky-blue">new</span>
          &nbsp;
          <span className="text-wong-orange">Date</span>
          <span className="text-wong-grey">(</span>
          <span className="text-wong-bluish-green">"wtf"</span>
          <span className="text-wong-grey">)</span>
        </h1>
        <p className="text-gray-300 text-3xl italic">How well do you know JavaScript's Date class?</p>
        <p className="text-gray-300 font-mono italic rounded-lg bg-bg-light text-lg p-4 text-balance w-[75%]">
          All questions verified using NodeJS 24.4.0 on
          a MacBook Pro set to the BST timezone (UTC+1).
        </p>
        <button className="bg-wong-orange text-bg-dark border-none rounded-lg font-bold cursor-pointer max-w-[250px] w-full p-4 text-xl">Start Quiz</button>
      </div>
    </div>
  )
}

export default App
