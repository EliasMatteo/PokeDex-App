// import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

// import PokemonEvolution from "../../components/pokemonEvolution";
// import ListButton from "../../components/listButton";
// import PokemonType from "../../components/pokemonType";
// import PokemonGen from "../../components/pokemonGen";
// import BaseStats from "../../components/baseStats";
// import ContextHeader from "../../components/contextHeader";

// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

const PokemonEntry = () => {
  const router = useRouter();
  const { pokemonName } = router.query;

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const matchPokemon = async () => {
      const res = await axios.get("/api/pokemon");
      setPokemon(res.pokemon);
    };
    matchPokemon(pokemonName);
  }, []);

  return (
    <div>
      <div>{pokemonName}</div>
      {pokemon.map((pokemon) => {
        <div key={pokemon.Name}>{pokemon.Name}</div>;
      })}
    </div>
  );
};

export default PokemonEntry;

// <div className="pokemonEntry-evolution-display">
//   <div className="sec1">
//       <div>
//         <ContextHeader />
//       </div>

//       <div>
//         <Image src={`/pokemon/abomasnow.png`} alt="abomasnow" width={350} height={350} />
//       </div>

//       <div>
//         Heart Icon
//       </div>
//       {/* <Image src="/pokeball.png" alt="pokeball" width={180} height={180} /> */}

//   </div>
//   <div className="sec2">
//     <Tabs>
//       <TabList className="tabs-cont">
//         <Tab>About</Tab>
//         <Tab>Base Stats</Tab>
//         <Tab>Evolution</Tab>
//       </TabList>

//       <TabPanel>
//         <div className="about-sec">
//           <h2>About tab</h2>
//         </div>
//       </TabPanel>

//       <TabPanel>
//         <BaseStats />
//         <BaseStats statname={"Attack"} />
//         <BaseStats statname={"Sp.Attack"} />
//         <BaseStats statname={"Defense"} />
//         <BaseStats statname={"Sp.Defense"} />
//         <BaseStats statname={"Speed"} />
//       </TabPanel>

//       <TabPanel>
//         <PokemonEvolution pokemonname="bulbasaur" arrowDisplay="show" />
//         <PokemonEvolution pokemonname="ivysaur" arrowDisplay="show" />
//         <PokemonEvolution pokemonname="venusaur" arrowDisplay={null} />
//       </TabPanel>
//     </Tabs>
//   </div>
//   <hr />
//   {/* <ListButton />
//   <ListButton listtext={"Generations"} />
//   <PokemonType />
//   <PokemonGen /> */}
// </div>
// )
