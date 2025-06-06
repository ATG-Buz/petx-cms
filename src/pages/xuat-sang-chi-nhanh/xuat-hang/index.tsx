import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewDelivery = dynamic(
  () => import("@/views/product-delivery/delivery"),
  {
    suspense: true,
    ssr: false,
  }
);

const DeliveryList: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewDelivery />
    </Suspense>
  );
};

DeliveryList.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default DeliveryList;
