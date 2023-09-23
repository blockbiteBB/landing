interface GenericButtonProps {
    children: React.ReactNode;
    className?: string;
    border?: boolean;
}

const GenericButton = ({ children, className = "", border }: GenericButtonProps) => {
    return (
        <div
            className={`flex transform cursor-pointer items-center justify-center rounded-full px-6 py-2 text-sm text-brand-black transition-transform hover:scale-110 xl:px-8 xl:py-3 xl:text-base ${
                border && "border border-white"
            } ${className}`}
        >
            {children}
        </div>
    );
};

export default GenericButton;
