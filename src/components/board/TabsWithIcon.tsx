import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
 
export function TabsWithIcon() {
  const data = [
    {
      label: "나의 TIL",
      value: "dashboard",
      icon: Square3Stack3DIcon,
      desc: ``,
    },
    {
      label: "마이페이지",
      value: "profile",
      icon: UserCircleIcon,
      desc: ``,
    },
    {
      label: "설정",
      value: "settings",
      icon: Cog6ToothIcon,
      desc: ``,
    },
  ];
  return (
    <Tabs value="dashboard">
      <TabsHeader className="bg-yellow-50">
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2 ">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}