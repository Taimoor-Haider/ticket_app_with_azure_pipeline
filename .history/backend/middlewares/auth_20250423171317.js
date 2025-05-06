import jwt from "jsonwebtoken";
export async function authorizationMiddleware(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).send("You have no access");
  }
  const decode = await jwt.verify(token, process.env.JSON_WEB_TOKEN_SECRET);
}
