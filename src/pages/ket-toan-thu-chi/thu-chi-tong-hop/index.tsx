import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewCashSummary = dynamic(
  () => import("@/views/accounting/cash-summary"),
  {
    suspense: true,
    ssr: false,
  }
);

const CashSummary: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewCashSummary />
    </Suspense>
  );
};

CashSummary.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default CashSummary;
