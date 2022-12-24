import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      const response = await fetch(
        `https://api.github.com/users?per_page=${
          req.query?.per_page ? req.query.per_page : "10"
        }`
      );
      if (response.ok) {
        const users = await response.json();
        return res.status(200).json({
          users,
        });
      } else {
        return res.status(400).json({});
      }
    }
    default: {
      return res.status(404).json({});
    }
  }
}
