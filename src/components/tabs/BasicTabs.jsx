import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import BasicTabPanel from "./BasicTabPanel";

export default function BasicTabs({ tabs }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((tab) => {
            return <Tab key={tab.label} label={tab.label} />;
          })}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => {
        return (
          <BasicTabPanel key={index} value={value} index={index}>
            {tab.element}
          </BasicTabPanel>
        );
      })}
    </Box>
  );
}
