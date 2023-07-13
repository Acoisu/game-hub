import React from "react";
import useData from "./useData";

export interface Platforms {
  id: string;
  name: string;
  slug: string;
}

const usePlatforms = (platformFilter: Platforms | null) =>
  useData<Platforms>(
    "/platforms",
    { params: { platforms: platformFilter?.id } },
    [platformFilter?.id]
  );

export default usePlatforms;
