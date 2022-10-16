import "../styles/globals.css";
import Head from "next/head";
import { tryGetMetaTags } from "../utils/rendering/tryGetMetaTags";
import { DefaultPage } from "../types/DefaultPage";
import { FC } from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function MyApp({
  Component,
  pageProps,
}: {
  Component: FC<{ data: DefaultPage<any>["layoutData"] }>;
  pageProps: DefaultPage<any>;
}) {
  const { layoutData, documentConfig } = pageProps;
  const MetaTags = tryGetMetaTags(documentConfig?.metaTags);

  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <title>{documentConfig?.title}</title>
        {MetaTags || []}
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={layoutData}>
          <Component {...layoutData} />
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
