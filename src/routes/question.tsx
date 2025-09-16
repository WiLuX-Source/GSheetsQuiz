import { ThemeIcon } from "../components/ThemeIcon";
import { OptionButton } from "../components/OptionButton";
import { ExplanationSection } from "../components/ExplanationSection";
import { QuestionSection } from "../components/QuestionSection";
import { useNavigate, useParams, useSearchParams } from "react-router";
import Questions from "../data/data";
import { useEffect, useState } from "react";

function Question() {
    const { quizId } = useParams()
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const navigate = useNavigate()
    // it should become useState when dynamic logic is implemented.
    const quizData = Questions;
    const questionNumber = Number(searchParams.get("question")!)
    const questionData = quizData[questionNumber - 1]
    useEffect(() => {
        if (!searchParams.has('question')) {
            setSearchParams({ question: '1' });
        }
    }, [searchParams, setSearchParams]);

    if (!quizId || quizId !== "demo") {
        return (
            <div id="body" className="font-system bg-bg-dark text-text-primary min-h-screen flex flex-col items-center py-[20px] px-[8px] supports-[height:100dvh]:min-h-dvh">
                <ThemeIcon />
                <div id="quizScreen" className="flex flex-col items-center gap-[15px] text-center max-w-[800px] w-full p-[20px] mb-auto">
                    <p className="text-text-secondary text-[1.1em] italic sm:text-[2em]">Not yet implemented for demo.</p>
                </div>
                <footer className="text-center text-gray-300 text-sm">
                    <p>
                        made with ❤️ by <a href="https://samwho.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover">samwho</a>
                    </p>
                </footer>
            </div>
        )
    }

    if (!questionData) {
        return (
            <div id="body" className="font-system bg-bg-dark text-text-primary min-h-screen flex flex-col items-center py-[20px] px-[8px] supports-[height:100dvh]:min-h-dvh">
                <ThemeIcon />
                <div id="quizScreen" className="flex flex-col items-center gap-[15px] text-center max-w-[800px] w-full p-[20px] mb-auto">
                    <p className="text-text-secondary text-[1.1em] italic sm:text-[2em]">Out of bounds</p>
                </div>
                <footer className="text-center text-gray-300 text-sm">
                    <p>
                        made with ❤️ by <a href="https://samwho.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover">samwho</a>
                    </p>
                </footer>
            </div>
        )
    }

    const hasAnswer = selectedAnswer !== null;
    const handleAnswer = (selectedIndex: number) => {
        if (selectedAnswer !== null) return
        setSelectedAnswer(selectedIndex);
    };
    const handleNext = () => {
        setSelectedAnswer(null);
        if (questionNumber + 1 > quizData.length) {
            navigate("/results", { state: { score: 5, total: quizData.length } });
            return
        }
        setSearchParams({ question: String(questionNumber + 1) });
    }
    return (
        <div id="body" className="font-system bg-bg-dark text-text-primary min-h-screen flex flex-col items-center py-[20px] px-[8px] supports-[height:100dvh]:min-h-dvh">
            <ThemeIcon />
            <div id="quizScreen" className="flex flex-col items-center gap-[15px] text-center max-w-[800px] w-full p-[20px] mb-auto">
                <div id="progress" className="text-text-secondary text-[1em] h-[40px]"> {questionNumber} / {quizData.length}</div>
                <QuestionSection question={questionData.code} type="string"></QuestionSection>
                <ExplanationSection description={questionData.explanation} type={selectedAnswer === null ? 'disabled' : (selectedAnswer === questionData.correct ? 'correct' : 'incorrect')} />
                <div id="options" className="gap-[12px] sm:gap-[15px] flex flex-col max-w-[600px] m-0 w-full">
                    {questionData.options.map((option, index) => {
                        let type: "normal" | "correct" | "incorrect" | "disabled" = "normal";
                        if (hasAnswer) {
                            switch (true) {
                                case index === questionData.correct:
                                    type = "correct";
                                    break;
                                case index === selectedAnswer:
                                    type = "incorrect";
                                    break;
                                default:
                                    type = "disabled";
                                    break;
                            }
                        }

                        return (
                            <OptionButton
                                key={index}
                                number={index + 1}
                                description={option}
                                type={type}
                                onClick={() => handleAnswer(index)}
                            />
                        );
                    })}
                </div>
                {hasAnswer &&
                    <button onClick={handleNext} className="bg-primary hover:bg-primary-hover text-bg-dark border-none rounded-lg font-bold cursor-pointer w-full py-3 text-[1em] font-sans max-w-[200px] sm:text-[1.1em] sm:max-w-[250px]">
                        {questionNumber + 1 > quizData.length ? "End Quiz" : "Next Question"}
                    </button>
                }
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