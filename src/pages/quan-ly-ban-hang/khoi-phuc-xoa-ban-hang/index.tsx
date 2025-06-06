import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewRestoreDeletedSales = dynamic(
  () => import("@/views/sell/components/restore-deleted-sales"),
  {
    suspense: true,
    ssr: false,
  }
);

const RestoreDeletedSales: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewRestoreDeletedSales />
    </Suspense>
  );
};

RestoreDeletedSales.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default RestoreDeletedSales;
