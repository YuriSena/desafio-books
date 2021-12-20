const ArrowLeft = ({ ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="15.5" stroke="#333333" stroke-opacity="0.2" />
      <path
        d="M18 12L14 16L18 20"
        stroke="#333333"
        stroke-opacity={props.disable ? "0.2" : "1"}
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowLeft;
