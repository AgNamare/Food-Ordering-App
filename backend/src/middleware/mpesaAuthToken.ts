import { NextFunction, Request, Response, response } from "express";
const consumerKey = process.env.MPESA_CONSUMER_KEY;
const consumerSecret = process.env.MPESA_CONSUMER_SECRET;

interface CustomRequest extends Request {
  mpesaCredentials?: any;
}

export const mpesaAuthToken = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const credentials = `${consumerKey}:${consumerSecret}`;
  const encodedCredentials = Buffer.from(credentials).toString("base64");
  try {
    const mpesaResponse = await fetch(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      }
    );
    if (!mpesaResponse.ok) {
      return res.status(505).json("Something went wrong!!");
    }
    req.mpesaCredentials = mpesaResponse;
    next();
  } catch (error) {
    console.log(error);
    return res.status(505).json("Something went wrong!");
  }
};
