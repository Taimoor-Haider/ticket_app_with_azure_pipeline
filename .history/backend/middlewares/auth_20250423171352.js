import jwt from "jsonwebtoken";
export async function authorizationMiddleware(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).send("You have no access");
  }
  try {
    const decode = jwt.verify(token, process.env.JSON_WEB_TOKEN_SECRET);
    req.user = decode;
  } catch (error) {}
  next();
}
