interface iconProps {
  className?: string;
}

export const Play = ({ className }: iconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="49"
      height="57"
      viewBox="0 0 49 57"
      fill="none"
      className={className}
    >
      <path
        d="M49 28.5L0.249997 56.6458L0.25 0.354172L49 28.5Z"
        fill="#D9D9D9"
      />
    </svg>
  );
};
