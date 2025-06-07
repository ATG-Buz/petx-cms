import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewTreatmentCashflow = dynamic(
  () => import("@/views/revenue-statistics/treatment-cashflow"),
  {
    suspense: true,
    ssr: false,
  }
);

const TreatmentCashflow: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewTreatmentCashflow />
    </Suspense>
  );
};

TreatmentCashflow.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default TreatmentCashflow;
