import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewBranchTransfer = dynamic(
  () => import("@/views/product-delivery/branch-transfer"),
  {
    suspense: true,
    ssr: false,
  }
);

const BranchTransferList: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewBranchTransfer />
    </Suspense>
  );
};

BranchTransferList.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default BranchTransferList;
