import supabaseClient from "./supabaseClient"
import { Response } from "express"

export const createSession = async function (
  req: TypedRequestBody<{ name: string }>,
  res: Response
) {
  const { name: firstUserName } = req
  // first create the conversation
  const session = await supabaseClient
    .from("session")
    .insert({
      created_at: new Date().toISOString().toLocaleString(),
    })
    .select()

  if (session.error) {
    res.status(500)
  }

  const sessionData = session?.data?.[0]
  if (!sessionData) {
    res.status(500).send("Something wrong")
  }
  console.log("sessionData", sessionData)
  res.json(sessionData)

  console.log("session", session)

  // let participants: User[] = []

  // // attach all our users to this conversation
  // const pivotData = await supabaseClient
  //   .from("user_conversation")
  //   .upsert(
  //     participant_ids.map((participant_id) => {
  //       return {
  //         user_id: participant_id,
  //         conversation_id: conversation.data[0].id,
  //       }
  //     })
  //   )
  //   .select()

  // if (participant_ids.length > 1 && conversation.data?.length) {
  //   // attach all our users to this conversation
  //   const pivotData = await supabaseClient
  //     .from("user_conversation")
  //     .upsert(
  //       participant_ids.map((participant_id) => {
  //         return {
  //           user_id: participant_id,
  //           conversation_id: conversation.data[0].id,
  //         }
  //       })
  //     )
  //     .select()

  //   if (pivotData.data?.length) {
  //     // find our actual users
  //     const actualParticipantUsers = await supabase
  //       .from("users")
  //       .select()
  //       .in("id", participant_ids)

  //     if (actualParticipantUsers.data?.length)
  //       participants = actualParticipantUsers.data
  //   }
  // }
}
