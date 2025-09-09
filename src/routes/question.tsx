import { ThemeIcon } from "../components/ThemeIcon";
import { OptionButton } from "../components/OptionButton";
import { ExplanationSection } from "../components/ExplanationSection";
import { QuestionSection } from "../components/QuestionSection";

function Question() {

    return (
        <div id="body" className="font-system bg-bg-dark text-text-primary min-h-screen flex flex-col items-center py-[20px] px-[8px] supports-[height:100dvh]:min-h-dvh">
            <ThemeIcon />
            <div id="quizScreen" className="flex flex-col items-center gap-[15px] text-center max-w-[800px] w-full p-[20px] mb-auto">
                <div id="progress" className="text-text-secondary text-[1em] h-[40px]">Question 1 / 28 </div>
                <QuestionSection question="Hello World" type="string"></QuestionSection>
                <ExplanationSection description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime iste ad voluptatibus rerum quisquam" type="correct" />
                <div id="options" className="gap-[12px] sm:gap-[15px] flex flex-col max-w-[600px] m-0 w-full">
                    <OptionButton number={1} description="Normal" type="normal" />
                    <OptionButton number={2} description="Correct" type="correct" />
                    <OptionButton number={3} description="Incorrect" type="incorrect" />
                    <OptionButton number={4} description="Disabled" type="disabled" />
                </div>
                <button className="bg-primary hover:bg-primary-hover text-bg-dark border-none rounded-lg font-bold cursor-pointer w-full py-3 text-[1em] font-sans max-w-[200px] sm:text-[1.1em] sm:max-w-[250px]">
                    Next Question
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

export default Question;