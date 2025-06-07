import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewInventoryInfo = dynamic(
  () => import("@/views/inventory-check/info"),
  {
    suspense: true,
    ssr: false,
  }
);

const InventoryInfo: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewInventoryInfo />
    </Suspense>
  );
};

InventoryInfo.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default InventoryInfo;
