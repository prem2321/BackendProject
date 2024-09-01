const asyncHandler = (requestHandler) => {
    (req, res ,next) => {
        Promise.resolve(requestHandler(req, res, next)).
        reject((error) => next(error))
    }
}

export {asyncHandler}


//const asyncHandler = (func) => { () => {}}





// const asyncHandler = (fn) => async (req, res ,next) => {
//     try{
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: errror.message
//         })
//     }
//}