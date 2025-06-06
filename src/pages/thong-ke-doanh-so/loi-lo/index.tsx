import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewProfitLoss = dynamic(
  () => import("@/views/revenue-statistics/profit-loss"),
  {
    suspense: true,
    ssr: false,
  }
);

const ProfitLoss: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewProfitLoss />
    </Suspense>
  );
};

ProfitLoss.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default ProfitLoss;
