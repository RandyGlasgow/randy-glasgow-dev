import { NextPage } from "next";
import { FC } from "react";
import DefaultPageFrame from "../components/Wrappers/DefaultPageFrame";
import { tryGetComponent } from "../utils/rendering/tryGetComponent";
import { NavBar } from "../components/Dev/Nav";
import { useQuery } from "@tanstack/react-query";

export interface DevPageProps {
  hero: {
    title: string;
    subtitle: string;
  };
  nav: {
    name: string;
    href: string;
  }[];
}

const DevPage: FC<any> = () => {
  const { data } = useQuery<DevPageProps>(["dev"]);
  return (
    <DefaultPageFrame>
      <div className="flex bg-cyber-black-500">
        <NavBar />
        <div className="w-full">
          <div className="flex items-center justify-center w-full pt-2 font-mono text-4xl font-bold text-center border bg-cyber-black-500 text-cyber-electric-blue-500">
            {data?.hero.title}
          </div>
        </div>
      </div>
    </DefaultPageFrame>
  );
};

export default DevPage;
