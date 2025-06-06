import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewReturnProduct = dynamic(
  () => import("@/views/sell/components/return-product"),
  {
    suspense: true,
    ssr: false,
  }
);

const ReturnProduct: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewReturnProduct />
    </Suspense>
  );
};

ReturnProduct.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default ReturnProduct;
