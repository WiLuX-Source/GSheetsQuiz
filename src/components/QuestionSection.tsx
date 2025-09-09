interface QuestionProps {
    question: string
    type: "string" | "image"
}

function QuestionSection({question, type}: QuestionProps) {
    if (type === "image") {
        return (
            <div id="code-block-container" className="text-[1em] p-[15px] sm:text-[1.25rem] sm:p-[20px] flex justify-center items-center w-full bg-code-bg border-2 border-border rounded-lg font-mono text-text-primary overflow-x-auto max-w-[600px] text-center text-nowrap min-h-[4rem]">
            <div id="content">
                Not Implemented Yet.
            </div>
        </div>
        )
    }
    return (
        <div id="code-block-container" className="text-[1em] p-[15px] sm:text-[1.25rem] sm:p-[20px] flex justify-center items-center w-full bg-code-bg border-2 border-border rounded-lg font-mono text-text-primary overflow-x-auto max-w-[600px] text-center text-nowrap min-h-[4rem]">
            <span id="content">
                {question}
            </span>
        </div>
    )
}

export { QuestionSection }