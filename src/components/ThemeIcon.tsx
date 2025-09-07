const MoonIcon = () => (
    <svg className="w-[20px] h-[20px] block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
);

function ThemeIcon() {
    return (
        <button
            aria-label="Toggle theme"
            className="fixed bg-bg-light top-[12px] right-[12px] py-[4px] px-[8px] border-solid border-2 border-gray-600 rounded-md cursor-pointer flex items-center gap-2 text-[1em] text-text-primary hover:bg-bg-lighter hover:border-border-hover hover:translate-y-[-1px] active:translate-y-0 sm:top-[20px] sm:right-[20px] sm:py-[8px] sm:px-[12px]"
        >
            <MoonIcon />
        </button>
    )

}

export { ThemeIcon }