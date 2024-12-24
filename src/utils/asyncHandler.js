const asyncHandlear = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error))
    }
}


export { asyncHandlear }





// const asyncHandlear = () => {}
// const asyncHandlear = (funct) => () => {}
// const asyncHandlear =(func) => async () => {}


// const asyncHandlear = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message || "Internal Server Error"
//         })      
//     }
// }