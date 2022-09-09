import jwt from 'jsonwebtoken';
import handler from 'pages/api/parent/add-parent';

const withProtect = () => {
  return async(req, res) =>{

    const authHeaders = req.headers["authorization"];
    const accessToken = authHeaders && authHeaders.split("")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try{
      jwt.verify(accessToken, "very unique secret key", (error, data)=>{
      if(error){
        return res.status(403).json({message: "Unauthorized"});
      }
      req.user = data?.payload;
      return handler(req, res);
    });
  }
  catch(error){
    console.log(error);
    return res.status(403).json({ message: "Unauthorized" });
  }
  }
}

export default withProtect;