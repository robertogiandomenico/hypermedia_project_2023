import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {

    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('Areas').select("id, name, Projects(id, title)").eq('id', 1).limit(1).single()
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    
    return data
})