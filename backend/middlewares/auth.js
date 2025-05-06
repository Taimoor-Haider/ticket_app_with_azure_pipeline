import jwt from "jsonwebtoken";

export default function authorizationMiddleware(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).send("You have no access");
  }

  try {
    const decode = jwt.verify(token, process.env.JSON_WEB_TOKEN_SECRET);
    req.user = decode;
    next(); // ✅ Call only once
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
}
