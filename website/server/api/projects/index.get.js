import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('Projects').select('id, title, score, foundation_year').order('title', {ascending: true})
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    return data
})