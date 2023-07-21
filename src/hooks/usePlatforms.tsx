import { Platform } from "./useData";
import useData from "./useData";

const usePlatforms = (platformFilter: Platform | null) =>
  useData<Platform>(
    "/platforms",
    { params: { platforms: platformFilter?.id } },
    [platformFilter?.id]
  );

export default usePlatforms;
