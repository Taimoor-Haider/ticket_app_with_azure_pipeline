export function authorizationMiddleware(req, res, next) {
  const token = req.header("x-auth-token");
  if(!token){
    return res.status(404).json({"You have no access"})
  }
}
