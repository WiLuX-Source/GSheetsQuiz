interface ExplanationProps {
    description: string;
    type: "correct" | "incorrect" | "disabled"
}

const explanationType = {
    correct: "bg-correct-bg border-l-accent-green",
    incorrect: "bg-incorrect-bg border-l-error",
    disabled: "invisible"
};
function ExplanationSection({ description, type }: ExplanationProps) {
    const baseClass = "flex items-center justify-center max-w-[600px] text-center p-[15px] border-l-4 text-[1.1em] text-balance min-h-[6rem] lining-nums rounded-md"
    return (
        <div className={`${baseClass} ${explanationType[type]}`}>
            <p>{description}</p>
        </div>
    )
}

export { ExplanationSection }