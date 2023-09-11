export function badRequest (resource){
    return {
        type: "badRequest",
        message: `${resource}`
    }
}