import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewReturnOrder = dynamic(
  () => import("@/views/sell/components/return-order"),
  {
    suspense: true,
    ssr: false,
  }
);

const ReturnOrder: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewReturnOrder />
    </Suspense>
  );
};

ReturnOrder.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default ReturnOrder;
