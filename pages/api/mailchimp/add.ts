import Mailchimp from "mailchimp-api-v3";
import { NextApiRequest, NextApiResponse } from "next";
import { Override } from "utils/types/utility";

const API_KEY = "899eb91e5e877cf6873dedba79440340-us10";
const mailchimp = new Mailchimp(API_KEY);

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

  mailchimp
    .post(`/lists/3b4f9177d1/members`, {
      email_address: email,
      status: "suscribed",
      merge_filed: {
        NAME: displayName || "",
      },
    })
    .then((results) => {
      res.json(results);
    })
    .catch((err: any) => {
      res.json(err);
    });
}

export default addUser;
