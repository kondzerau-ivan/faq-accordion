import { useId } from "react"
import { data } from "../faq-data"
import { Accordion } from "./Accordion";

export function Faq() {
  return (
    <section className="faq">
      <h1 className="faq-heading">FAQs</h1>
      <ul className="faq-list">
        {
          data.map(({quastion, answer}) => (
            <Accordion key={useId()} quastion={quastion} answer={answer} />
          ))
        }
      </ul>
    </section>
  )
}