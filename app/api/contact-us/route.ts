import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSdC-MmmvDA15r3NFAoP6nBY00XL0oNulA7RWfN8RwFR3WnxtA/formResponse";

    const formData = new URLSearchParams();
    formData.append("entry.2005620554", req.body.firstName);
    formData.append("entry.1518530968", req.body.lastName);
    formData.append("entry.1045781291", req.body.email);
    formData.append("entry.1166974658", req.body.phoneNo);
    formData.append("entry.839337160", req.body.message);

    await axios.post(formUrl, formData, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    res.status(200).json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Form submission error:", error);
    res.status(500).json({ success: false, error: error });
  }
}
