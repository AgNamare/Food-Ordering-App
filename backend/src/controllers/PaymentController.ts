import { Request, Response, response } from "express";

interface CustomRequest extends Request {
  mpesaCredentials?: any;
}
const PaymentController = async (req: CustomRequest, res: Response) => {
  try {
    const amountToBePaid = req.body.amount;

    const { access_token } = req.mpesaCredentials;

    const response = await fetch(
      "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl",
      {
        method: "POST",
        headers: {
          Authorization: access_token,
        },
        body: JSON.stringify({
          ShortCode: "4214086",
          ConfirmationURL:
            "https://bytes-frontend-htww.onrender.com/search/manchester",
        }),
      }
    );

    if (!response.ok) {
      console.log(response);
      return res.status(500).json({ message: "Something went wrong1" });
    }
    return response;
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
export default PaymentController;
