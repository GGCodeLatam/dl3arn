import { NextApiRequest, NextApiResponse } from "next";
import Mailchimp from "mailchimp-api-v3";

import { MAILCHIMP_API_KEY } from "constants/index";

const mailchimp = new Mailchimp(MAILCHIMP_API_KEY);

async function getUser(req: NextApiRequest, res: NextApiResponse) {
  return res.json(await mailchimp.get("/lists/3b4f9177d1/members"));
}

export default getUser;
