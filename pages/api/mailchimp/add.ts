import Mailchimp from "mailchimp-api-v3";
import { NextApiRequest, NextApiResponse } from "next";
import { Override } from "utils/types/utility";
import { MAILCHIMP_API_KEY } from "constants/index";

const mailchimp = new Mailchimp(MAILCHIMP_API_KEY);

type Req = Override<
  NextApiRequest,
  {
    body: {
      email?: string;
      displayName?: string;
    };
  }
>;

type Res = NextApiResponse;

async function addUser(req: Req, res: Res) {
  const { email, displayName } = req.body;

  try {
    const data = await mailchimp.post(
      `/lists/3b4f9177d1/members?skip_merge_validation=true`,
      {
        email_address: email,
        status: "subscribed",
      }
    );
    const { response } = data;
    if (!response) return res.status(404).json({ error: null, data: null });

    return res.json({ error: null, data });
  } catch (err: any) {
    console.error(err);

    if (err.title === "Member Exists")
      return res.json({
        error: {
          code: "Mailchimp/member-exists",
          message: "Este usuario ya esta registrado",
        },
        data: null,
      });
    res.json({ error: err, data: null });
  }
}

export default addUser;
