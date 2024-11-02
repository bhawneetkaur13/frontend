import * as React from "react"
const OutputIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 28 28"
    {...props}
  >
    <title>{"output"}</title>
    <path
      fill="#000"
      fillRule="evenodd"
      d="M26 24c0 1.087-.913 2-2 2l-20.065.033a1.968 1.968 0 0 1-1.968-1.968L2 4c0-1.087.913-2 2-2h11V0H4C1.827 0 0 2.221 0 4.394v19.671A3.935 3.935 0 0 0 3.935 28h19.671C25.779 28 28 26.173 28 24V13h-2v11Zm.979-24H20a.999.999 0 0 0-1 1 .996.996 0 0 0 1 1l4.395-.032L9.308 16.357c-.4.381-.4.998 0 1.379a1.056 1.056 0 0 0 1.445 0L25.971 3.222 26 8a.999.999 0 1 0 2 0V.975c.001-.541-.454-.976-1.021-.975Z"
    />
  </svg>
)
export default OutputIcon
