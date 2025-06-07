import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewInventoryCheck = dynamic(
  () => import("@/views/inventory-check/inventory-check"),
  {
    suspense: true,
    ssr: false,
  }
);

const InventoryCheck: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewInventoryCheck />
    </Suspense>
  );
};

InventoryCheck.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default InventoryCheck;
