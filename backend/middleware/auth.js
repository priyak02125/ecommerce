import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  // console.log("Headers received:", req.headers);
// console.log("Token extracted:", token);

  if (!token) return res.json({ success: false, message: "Not Authorized Login Again" });

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("token_decode",token_decode)
    // req.body.userId =  token_decode.id 
     req.user = { id: token_decode.id };  
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
