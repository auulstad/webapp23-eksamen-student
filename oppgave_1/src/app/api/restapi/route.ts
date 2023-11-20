import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

import { type Task } from "@/types"

const tasks: Task[] = [
  {
    id: "124",
    text: "Skriv resultatet av regneoperasjonen",
    type: "add",
    data: "9|4",
  },
]

// TODO: Denne skal brukes til å "samle" svarene (om du ikke bruker database)
const answers = new Map<Task["id"], { attempts: number }>()

export function PUT(request: NextRequest) {
   //I koden vi mottok sto count som en spesifikk variabel på -1. 
  //Endret til å hente count fra urlen. 
  //Dette gjør at vi kan hente ut antall oppgaver vi ønsker å hente ut, som oppgaveteksten etterspurte.
  const countParam = request.nextUrl.searchParams.get("count");
  //For å ikke hente ut en string, så bruker jeg parseInt for å hente ut et tall.
  const count = countParam ? parseInt(countParam) : -1

  const taskIdParam = request.nextUrl.searchParams.get("id");
  const taskId = taskIdParam ? taskIdParam : ""

  if (!count)
    return NextResponse.json({ success: false, error: "Invalid count" })

    answers.set(taskId, { attempts: count });

  if (!taskId)
    return NextResponse.json({ success: false, error: "Invalid taskId" })

  return NextResponse.json({ success: true, data: tasks }, { status: 207 })
}

export function GET(request: NextRequest) {
  //I koden vi mottok sto count som en spesifikk variabel på -1. 
  //Endret til å hente count fra urlen. 
  //Dette gjør at vi kan hente ut antall oppgaver vi ønsker å hente ut, som oppgaveteksten etterspurte.
  const countParam = request.nextUrl.searchParams.get("count");
  //For å ikke hente ut en string, så bruker jeg parseInt for å hente ut et tall.
  const count = countParam ? parseInt(countParam) : -1;

  //I følge oppgaveteksten skulle count sjekke om det var et tall mellom 1 - 10. 
  //I koden vi mottok var det bare en sjekk om count var false. 
  //Endret til å sjekke om count er mellom 1 - 10, som oppgaveteksten etterspurte. 
  if (count < 1 || count > 10)
    return NextResponse.json({ success: false, error: "Invalid count" })
  return NextResponse.json({ success: true, data: tasks }, { status: 200 })
}
