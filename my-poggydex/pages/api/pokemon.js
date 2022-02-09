import { filtering } from "../../utilities/functions.js";
import pokemon from "../../utilities/pokedex.json";

export default async function handler(req, res) {
  const { name } = req.query;

  let lists = filtering(pokemon, {
    name: name,
  });
  res.status(200).json(lists);
}
