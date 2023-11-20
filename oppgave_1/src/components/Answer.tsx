"use client"

import { useState } from "react"
import type { FormEvent, MouseEvent } from "react"
import { calculateSolution } from "./Tasks"

export default function Answer() {
  const [answer, setAnswer] = useState(0)

  const send = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
/*
    const correctAnswer = calculateSolution(data, type);

    if (answer === correctAnswer) {
      console.log("Riktig svar!");
    } else {
      console.log("Feil svar!");
    }
    */ 
    console.log(answer)
  }

  const update = (event: FormEvent<HTMLInputElement>) => {
    setAnswer(event.currentTarget.valueAsNumber)
  }

  return (
    <div>
      <label htmlFor="answer">Svar</label>
      <input
        name="answer"
        type="text"
        placeholder="Sett svar her"
        onInput={update}
      />
      {9 + 2 === answer ? "Bra jobbet!" : null}
      <button onClick={send}>Send</button>
    </div>
  )
}
