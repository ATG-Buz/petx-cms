import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewSalesCashflow = dynamic(
  () => import("@/views/revenue-statistics/sales-cashflow"),
  {
    suspense: true,
    ssr: false,
  }
);

const SalesCashflow: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewSalesCashflow />
    </Suspense>
  );
};

SalesCashflow.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default SalesCashflow;
