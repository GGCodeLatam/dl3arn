interface Props {
  fill: string;
  className?: string;
  width?: string;
}
function Wave({ fill, className, width }: Props) {
  return (
    <svg
      className={className}
      width={width}
      viewBox="0 0 500 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M311.634 6.58165C240.76 11.6787 75.7539 22.8512 0 25H577V11.5923C509 -8.22785 368.5 2.49211 311.634 6.58165Z"
        fill={fill}
      />
    </svg>
  );
}

export default Wave;
