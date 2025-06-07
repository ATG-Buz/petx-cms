import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewServicesProducts = dynamic(
  () => import("@/views/revenue-statistics/services-products"),
  {
    suspense: true,
    ssr: false,
  }
);

const ServicesProducts: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewServicesProducts />
    </Suspense>
  );
};

ServicesProducts.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default ServicesProducts;
