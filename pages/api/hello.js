import axios from "axios";
import { get } from "http";

export default async (req, res) => {
  const URL = `https://api.i.require.keys/?&api_key=${process.env.SECRET_KEY}`;
  const response = await axios.get(URL);
  res.status(200).json({ data: response.data })
}



