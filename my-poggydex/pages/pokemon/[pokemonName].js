import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//components
import PokemonEvolution from "../../components/pokemonEvolution";
import ListButton from "../../components/listButton";
import PokemonType from "../../components/pokemonType";
import PokemonGen from "../../components/pokemonGen";
import BaseStats from "../../components/baseStats";
import ContextHeader from "../../components/contextHeader";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import InfoTab from "../../components/infoTab";
import StatValue from "../../components/statValue";
import FavHeartIcon from "../../components/favHeartIcon";

const PokemonEntry = () => {
  const router = useRouter();
  const { pokemonName } = router.query;
  const [pokemon, setPokemon] = useState(null);

  // match the pokemon to dynamic prop pokemonName using search api
  useEffect(() => {
    const matchPokemon = async (pokemonName) => {
      const res = await axios.get("/api/pokemon", {
        params: {
          name: pokemonName?.toUpperCase(),
        },
      });
      // get the first result of the list
      setPokemon(res.data[0]);
    };
    matchPokemon(pokemonName);
  }, [pokemonName]);

  // while searching loading screen
  // prevents run time error
  if (pokemon === null) {
    return <div>loading...</div>;
  }

  return (
    // how to call data
    // <div>{pokemon.name}</div>
    <div className="pokemonEntry-evolution-display">
      <div className="sec1">
        <div className="name-img">
          <div>
            <ContextHeader
              name={pokemon.name}
              japanese_name={pokemon.japanese_name}
              species={pokemon.species}
              pokedex_number={pokemon.pokedex_number}
            />
          </div>
          <div>
            <Image
              src={`/pokemon/${pokemon.name}.png`}
              alt={pokemon.name}
              width={350}
              height={350}
            />
          </div>
        </div>
        <div className="heart-cont">
          <FavHeartIcon />
        </div>

        {/* <Image src="/pokeball.png" alt="pokeball" width={180} height={180} /> */}
      </div>
      <div className="sec2">
        <Tabs>
          <TabList className="tabs-cont">
            <Tab>About</Tab>
            <Tab>Base Stats</Tab>
            <Tab>Evolution</Tab>
          </TabList>

          <TabPanel>
            <div className="about-sec">
              <div className="left">
                <h3>About</h3>
                <StatValue category={"Generation:"} value={pokemon.generation}></StatValue>
                <StatValue category={"Status:"} value={pokemon.status}></StatValue>
                <StatValue category={"Species:"} value={pokemon.species}></StatValue>
                <StatValue category={"Height:"} value={pokemon.height_m}></StatValue>
                <StatValue category={"Weight:"} value={pokemon.weight_kg}></StatValue>
                <StatValue category={"Abilities:"} value={pokemon.ability_1}></StatValue>
              </div>
              <div className="right">
              <h3>Training</h3>
                <StatValue category={"Catch Rate:"} value={pokemon.catch_rate}></StatValue>
                <StatValue category={"Base Friendship:"} value={pokemon.base_friendship}></StatValue>
                <StatValue category={"Base Experience:"} value={pokemon.base_experience}></StatValue>
                <StatValue category={"Growth Rate:"} value={pokemon.growth_rate}></StatValue>
                <StatValue category={"Egg Type:"} value={pokemon.egg_type_1}></StatValue>
                <StatValue category={"Egg Cycle:"} value={pokemon.egg_cycles}></StatValue>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <BaseStats ststname={"HP"} stat={pokemon.hp} />
            <BaseStats statname={"Attack"} stat={pokemon.attack} />
            <BaseStats statname={"Sp.Attack"} stat={pokemon.sp_attack} />
            <BaseStats statname={"Defense"} stat={pokemon.defense} />
            <BaseStats statname={"Sp.Defense"} stat={pokemon.sp_defense} />
            <BaseStats statname={"Speed"} stat={pokemon.speed} />
            {/* missing base_experience & base_friendship */}
          </TabPanel>

          <TabPanel>
            <PokemonEvolution pokemonname="bulbasaur" arrowDisplay="show" />
            <PokemonEvolution pokemonname="ivysaur" arrowDisplay="show" />
            <PokemonEvolution pokemonname="venusaur" arrowDisplay={null} />
          </TabPanel>
        </Tabs>
      </div>
      <hr />
      {/* <ListButton />
  <ListButton listtext={"Generations"} />
  <PokemonType />
  <PokemonGen /> */}
    </div>
  );
};

export default PokemonEntry;
