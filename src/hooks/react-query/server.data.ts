import { useQuery } from "@tanstack/react-query";
import { DevPageProps } from "../../layouts/DevPage.layout";

// typed query that returns a react-query query without the possibility of undefined data
export const useDevGSSPData = () =>
  useQuery<DevPageProps>(["dev"], {
    retry: false,
  });
