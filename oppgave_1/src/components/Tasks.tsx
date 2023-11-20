import { type ReactNode } from "react"

import { type Task } from "@/types"
import Home from "@/app/page";

export default function Tasks({ children }: { children: ReactNode }) {
  //Fra den tidligere oppgaven, har jeg lagt til 7 ekstra "tasks" - ettersom API'et ber om 10 tasks, men kun mottok 3 i koden vi mottok.
  const tasks: Task[] = [
    {
      id: "123",
      text: "Skriv resultatet av regneoperasjonen",
      data: "9|2",
      type: "add",
    },
    {
      id: "234",
      text: "Skriv resultatet av regneoperasjonen",
      data: "3|2",
      type: "add",
    },
    {
      id: "298",
      text: "Skriv resultatet av regneoperasjonen",
      data: "4|5",
      type: "subtract",
    },
    {
      id: "132",
      text: "Skriv resultatet av regneoperasjonen",
      data: "7|3",
      type: "subtract",
    },
    {
      id: "713",
      text: "Skriv resultatet av regneoperasjonen",
      data: "1|8",
      type: "divide",
    },
    {
      id: "815",
      text: "Skriv resultatet av regneoperasjonen",
      data: "6|2",
      type: "divide",
    },
    {
      id: "493",
      text: "Skriv resultatet av regneoperasjonen",
      data: "9|1",
      type: "multiply",
    },
    {
      id: "007",
      text: "Skriv resultatet av regneoperasjonen",
      data: "2|4",
      type: "subtract"
    },
    {
      id: "356",
      text: "Skriv resultatet av regneoperasjonen",
      data: "3|2",
      type: "multiply",
    },
  ]

  console.log(tasks);

  return (
    <section>
      {tasks.map((task) => (
        <article key={task.id}>
          <p>{task.type}</p>
          <h3>{task.text}</h3>
          <p>{task.data}</p>
        </article>
      ))}
      {children}
    </section>
  )
}

export const calculateSolution = (data: string, type: string): number => {
  const [number1, number2] = data.split("|").map(Number);
  let result;

  switch (type) {
    case "add":
      result = number1 + number2;
      break;
    case "subtract":
      result = number1 - number2;
      break;
    case "multiply":
      result = number1 * number2;
      break;
    case "divide":
      result = number1 / number2;
      break;
    default:
      throw new Error(`Ukjent operasjonstype: ${type}`);
  }
  return result;
};