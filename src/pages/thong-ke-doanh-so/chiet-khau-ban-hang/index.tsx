import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewSaleDiscount = dynamic(
  () => import("@/views/revenue-statistics/sales-discount"),
  {
    suspense: true,
    ssr: false,
  }
);

const SaleDiscount: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewSaleDiscount />
    </Suspense>
  );
};

SaleDiscount.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default SaleDiscount;
