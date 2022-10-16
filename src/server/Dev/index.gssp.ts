import { dehydrate, DehydratedState, QueryClient } from "@tanstack/react-query";
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { DevPageProps } from "../../layouts/DevPage.layout";
import { DefaultPage } from "../../types/DefaultPage";

export const gsspDevPage: GetServerSideProps = async (
  context
): Promise<GetServerSidePropsResult<DefaultPage<DehydratedState>>> => {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery(["dev"], {
    initialData: {
      nav: [
        {
          name: "Home",
          href: "/",
        },
      ],
      hero: {
        title: "Dev Page",
        subtitle: "This is the dev page",
      },
    } as DevPageProps,
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
