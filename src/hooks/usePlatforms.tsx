import React from "react";
import useData from "./useData";

interface Platforms {
  id: string;
  name: string;
}

const usePlatforms = () => useData<Platforms>("/platforms/lists/parents");

export default usePlatforms;
