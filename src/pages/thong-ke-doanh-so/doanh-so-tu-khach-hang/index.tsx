import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewCustomerSales = dynamic(
  () => import("@/views/revenue-statistics/customer-sales"),
  {
    suspense: true,
    ssr: false,
  }
);

const CustomerSales: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewCustomerSales />
    </Suspense>
  );
};

CustomerSales.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default CustomerSales;
