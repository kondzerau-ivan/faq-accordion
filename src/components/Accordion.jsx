import { useState } from "react"

export function Accordion(props) {
  const { quastion, answer } = props;
  const [active, setActive] = useState(false);

  function handleToggle() {
    setActive(!active);
  }

  return (
    <li className="accordion">
      <button onClick={handleToggle} 
      className={active ? "accordion-quastion accordion-quastion--open" : "accordion-quastion"}
      >{quastion}</button>
      {active && <p className='accordion-answer'>{answer}</p>}
    </li>
  )
}