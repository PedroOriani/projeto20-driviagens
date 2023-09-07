import httpStatus from "http-status"

export default function erroHandler (error, req, res, next){
    console.log(error)

    if (error.type === "notFound"){
        return res.status(httpStatus.NOT_FOUND).send(error.message)
    }

    if (error.type === "conflict"){
        return res.status(httpStatus.CONFLICT).send(error.message)
    }

    if (error.type === "unprocessableEntity"){
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
    }
}