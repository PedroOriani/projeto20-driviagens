export function tooManyResultsError (){
    return {
        type: "internalServerError",
        message: `Too Many Results`
    }
}