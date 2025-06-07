import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewStockReport = dynamic(
  () => import("@/views/revenue-statistics/stock-report"),
  {
    suspense: true,
    ssr: false,
  }
);

const StockReport: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewStockReport />
    </Suspense>
  );
};

StockReport.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default StockReport;
