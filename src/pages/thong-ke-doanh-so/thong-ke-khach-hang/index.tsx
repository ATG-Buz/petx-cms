import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewCustomerReport = dynamic(
  () => import("@/views/revenue-statistics/customer-report"),
  {
    suspense: true,
    ssr: false,
  }
);

const CustomerReport: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewCustomerReport />
    </Suspense>
  );
};

CustomerReport.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default CustomerReport;
