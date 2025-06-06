import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewSell = dynamic(() => import("@/views/sell/components/sell"), {
  suspense: true,
  ssr: false,
});

const Sell: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewSell />
    </Suspense>
  );
};

Sell.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default Sell;
