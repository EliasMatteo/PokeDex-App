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
        <h1>Section 1</h1>
      </div>
      <div className="sec2">
        <Tabs>
          <TabList className="tabs-cont">
            <Tab>About</Tab>
            <Tab>Base Stats</Tab>
            <Tab>Evolution</Tab>
            {/* <Tab className="tabs">About</Tab>
          <Tab className="tabs">Base Stats</Tab>
          <Tab className="tabs">Evolution</Tab> */}
          </TabList>

          <TabPanel>
            <h2>About tab</h2>
          </TabPanel>

          <TabPanel>
            <h2>Base Stats tab</h2>
            <BaseStats />
            <BaseStats statname={"Attack"} />
            <BaseStats statname={"Sp.Attack"} />
            <BaseStats statname={"Defense"} />
            <BaseStats statname={"Sp.Defense"} />
            <BaseStats statname={"Speed"} />
          </TabPanel>

          <TabPanel>
            <h2>Evolution tab</h2>
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
