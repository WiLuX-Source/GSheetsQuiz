interface OptionButtonProps {
  number: number;
  description: string;
  type: "normal" | "correct" | "incorrect" | "disabled"
}

const buttonType = {
  normal: "bg-bg-light border-border cursor-pointer hover:bg-bg-lighter hover:border-border-hover",
  correct: "bg-correct-bg border-accent-green",
  incorrect: "bg-incorrect-bg border-error",
  disabled: "border-border opacity-[0.6] cursor-not-allowed",
};
function OptionButton({ number, description, type }: OptionButtonProps) {
    const baseClass = "px-[20px] py-[15px] border-2 rounded-lg flex items-center gap-[15px] text-[1em] {type}"
    return (
        <div className={`${baseClass} ${buttonType[type]}`}>
            <div className="bg-border-light text-text-primary w-[32px] h-[32px] rounded-md flex items-center justify-center font-bold shrink-0 text-[1em] pointer-events-none">{number}</div>
            <div className="font-mono font-bold pointer-events-none">{description}</div>
        </div>
    )
}

export { OptionButton }