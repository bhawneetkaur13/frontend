import * as React from "react"
const InputNode = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 28 28"
    {...props}
  >
    <title>{"input"}</title>
    <path
      fill="#000"
      fillRule="evenodd"
      d="M11 11a.995.995 0 0 0-1-1 .998.998 0 0 0-1 1v7a.996.996 0 0 0 1 1h7a.997.997 0 0 0 1-1 .995.995 0 0 0-1-1h-4.491L27.293 2.217A1 1 0 1 0 25.879.802L11 15.681V11Zm15 2v11c0 1.087-.914 2-2 2l-20.065.033a1.968 1.968 0 0 1-1.968-1.968L2 4c0-1.087.914-2 2-2h11V0H4C1.827 0 0 2.221 0 4.394v19.671A3.935 3.935 0 0 0 3.935 28h19.671C25.779 28 28 26.173 28 24V13h-2Z"
    />
  </svg>
)
export default InputNode
