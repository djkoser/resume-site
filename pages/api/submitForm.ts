import Cors from "cors";
import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import * as nodemailer from "nodemailer";
("use strict");

export interface SubmitFormBody {
  userCaptchaResponse: string;
  fromEmail: string;
  subject: string;
  formText: string;
  firstName?: string;
  lastName?: string;
  company?: string;
}

interface GoogleCaptchaResponseBody {
  success: boolean;
  challenge_ts: string; // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
  hostname: string; // the hostname of the site where the reCAPTCHA was solved
  "error-codes"?: string[]; // optional
}

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ["POST"],
});

const nodeMailerHandler = async (
  fromEmail: string,
  subject: string,
  formText: string,
  firstName?: string,
  lastName?: string,
  company?: string
) => {
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // send mail with defined transport object
    return transporter.sendMail({
      to: "koser.david@gmail.com", // list of receivers
      subject: subject, // Subject line
      text: `Email: ${fromEmail}\n${
        firstName ? `First Name: ${firstName}\n` : ""
      }${lastName ? `Last Name: ${lastName}\n` : ""}${
        company ? `Company: ${company}\n` : ""
      }\nMessage: \n${formText}`, // plain text body
    });
  } catch (err) {
    const errParsed =
      err instanceof Error ? err : new Error(JSON.stringify(err));
    throw errParsed;
  }
};

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const submitFormHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors);
  const { method } = req;
  if (method === "POST") {
    try {
      const {
        userCaptchaResponse,
        fromEmail,
        subject,
        formText,
        firstName,
        lastName,
      } = JSON.parse(req.body) as SubmitFormBody;

      const fetchResolution = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${userCaptchaResponse}`,
        {
          method: "post",
        }
      );

      const result =
        (await fetchResolution.json()) as GoogleCaptchaResponseBody;

      const { success } = result;

      if (success) {
        await nodeMailerHandler(
          fromEmail,
          subject,
          formText,
          firstName,
          lastName
        );
        res.send(200);
      } else {
        res.status(500).send({ errorCodes: result["error-codes"] });
      }
    } catch (err) {
      const errParsed =
        err instanceof Error ? err : new Error(JSON.stringify(err));
      res.status(500).json({ error: errParsed });
    }
  } else {
    res
      .status(400)
      .json({ error: new Error('Request must be of type "POST"') });
  }
};

export default submitFormHandler;
