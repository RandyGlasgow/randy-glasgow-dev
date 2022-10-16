import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { DefaultPage } from "../types/DefaultPage";

export const gsspHomePage: GetServerSideProps = async (
  context
): Promise<GetServerSidePropsResult<DefaultPage<any>>> => {
  const queryClient = new QueryClient();

  const testData = {
    dev: {
      title: "The Developer",
    },
    creative: {
      title: "The Creative",
    },
  };
  queryClient.prefetchQuery(["home"], {
    initialData: testData,
  });
  return {
    props: {
      documentConfig: {
        title: "Home",
      },
      layoutData: dehydrate(queryClient),
    },
  };
};
