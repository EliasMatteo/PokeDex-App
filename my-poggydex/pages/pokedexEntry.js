import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

import PokemonEvolution from "../components/pokemonEvolution";
import ListButton from "../components/listButton";
import PokemonType from "../components/pokemonType";
import PokemonGen from "../components/pokemonGen";
import BaseStats from "../components/baseStats";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function pokemonEntry() {
  return (
    <div className="pokemonEntry-evolution-display">
      <div className="sec1">
        <div className="pokedex-card-image">
          <Image src={`/pokemon/abomasnow.png`} alt="abomasnow" width={500} height={500} />
        </div>
        <div className="pokedex-card-bg">
          <Image src="/pokeball.png" alt="pokeball" width={180} height={180} />
        </div>
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
              <h2>About tab</h2>
            </div>
          </TabPanel>

          <TabPanel>
            <BaseStats />
            <BaseStats statname={"Attack"} />
            <BaseStats statname={"Sp.Attack"} />
            <BaseStats statname={"Defense"} />
            <BaseStats statname={"Sp.Defense"} />
            <BaseStats statname={"Speed"} />
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
}
