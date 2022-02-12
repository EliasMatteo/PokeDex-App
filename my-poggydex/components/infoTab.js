import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

const InfoTab = ({}) =>(
  <Tabs className="info-tabs">
    <TabList className="tab-list">
      <Tab>About</Tab>
      <Tab>Base Stats</Tab>
      <Tab>Evolution</Tab>
    </TabList>

    <TabPanel>
      <p>Spaghetti</p>
    </TabPanel>
    <TabPanel>
      <p>Fettucini</p>
    </TabPanel>
    <TabPanel>
      <p>Ravioli</p>
    </TabPanel>
  </Tabs>
);

export default InfoTab;
// const InfoTab = ({name}) => {
//     return (
//       <button className="info-tab">
//         <h3>{name}</h3>
//       </button>
//     );
//   };
  
//   export default InfoTab;
  

