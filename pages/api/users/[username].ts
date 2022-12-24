import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      const response = await fetch(
        `https://api.github.com/users/${req.query.username}`
      );
      if (response.ok) {
        const user = await response.json();
        return res.status(200).json({
          user,
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
