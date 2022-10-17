import { NextPage } from "next";
import { FC } from "react";
import DefaultPageFrame from "../components/Wrappers/DefaultPageFrame";
import { NavBar } from "../components/Dev/Nav";
import { useDevGSSPData } from "../hooks/react-query/server.data";

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
  const { data } = useDevGSSPData();

  return (
    <DefaultPageFrame>
      <div className="flex bg-cyber-black-500">
        {data?.nav && <NavBar nav={data.nav} />}
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
