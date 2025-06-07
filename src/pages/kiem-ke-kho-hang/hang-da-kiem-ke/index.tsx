import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewInventoryChecked = dynamic(
  () => import("@/views/inventory-check/inventory-checked/index"),
  {
    suspense: true,
    ssr: false,
  }
);

const InventoryChecked: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewInventoryChecked />
    </Suspense>
  );
};

InventoryChecked.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default InventoryChecked;
