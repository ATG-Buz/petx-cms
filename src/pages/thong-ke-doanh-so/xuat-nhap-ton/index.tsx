import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewInventory = dynamic(
  () => import("@/views/revenue-statistics/inventory"),
  {
    suspense: true,
    ssr: false,
  }
);

const Inventory: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewInventory />
    </Suspense>
  );
};

Inventory.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default Inventory;
