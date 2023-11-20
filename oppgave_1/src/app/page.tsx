import Answer from "@/components/Answer"
import Header from "@/components/Header"
import Progress from "@/components/Progress"
//I stedet for å importere Task som en value, så importerer vi den som en type. 
//Ettersom Task ikke har noen value, så 
import  { Task } from "@/types/index"
import Tasks from "@/components/Tasks"
import TaskText from "@/components/Text"


const tasks: Task[] = [
  {
    id: "124",
    text: "Skriv resultatet av regneoperasjonen",
    type: "add",
    data: "9|4",
  },
]

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/restapi/", {
    method: "get",
  })

  const result = await response.json()

  return (
    <main>
      {JSON.stringify(result)}
      <Header />
      <Tasks>
        <Answer />
      </Tasks>
      {/* <Task /> */}
      <TaskText text={"Hva blir resultatet av regneoperasjonen?"} />
      <Progress tasks={tasks} />
    </main>
  )
}
