import * as React from "react"
const TimerIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM9 2h6M15.24 10.76 12 14"
    />
  </svg>
)
export default TimerIcon
