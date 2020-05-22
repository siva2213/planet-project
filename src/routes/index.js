import Planet from "../container/Planet";
import Home from "../container/Home";
import NoData from "../container/Nodata";

export default [
  {
    name: "Planet",
    path: "/planet/:id",
    isExact: true,
    component: Planet,
  },
  {
    Name: "Home",
    path: "/home",
    isExact: true,
    component: Home,
  },
  {
    Name: "NoData",
    path: "/no-data",
    isExact: true,
    component: NoData,
  },
  {
    Name: "Default",
    path: "*",
    isExact: true,
    component: Home,
  },
];
