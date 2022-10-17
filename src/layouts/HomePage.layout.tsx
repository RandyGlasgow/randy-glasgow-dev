import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import Link from "next/link";
import { FC } from "react";
import DefaultPageFrame from "../components/Wrappers/DefaultPageFrame";

interface HomePageProps {
  dev: {
    title: string;
  };
  creative: {
    title: string;
  };
}

const HomePage: FC<any> = () => {
  const { data } = useQuery<HomePageProps>(["home"], {
    enabled: false,
  });

  return (
    <DefaultPageFrame>
      <div className="flex flex-col w-screen h-screen text-5xl lg:flex-row">
        <Link href={"/dev"}>
          <div className="flex items-center justify-center w-full h-full cursor-pointer group text-cyber-mint-500 bg-cyber-black-500">
            <div className="p-4 font-mono transition-all duration-150 ease-in-out border border-transparent group-hover:border-cyber-mint-500">
              {data?.dev.title}
            </div>
          </div>
        </Link>
        <Link href={"/creative"}>
          <div className="flex items-center justify-center w-full h-full cursor-pointer group bg-ego-corn-silk-500 text-ego-moss-green-500">
            <div className="font-serif drop-shadow">
              {data?.creative.title}
              <div className="w-0 h-1 transition-all duration-75 ease-in rounded-full shadow group-hover:w-full bg-ego-moss-green-500" />
            </div>
          </div>
        </Link>
      </div>
    </DefaultPageFrame>
  );
};

export default HomePage;
