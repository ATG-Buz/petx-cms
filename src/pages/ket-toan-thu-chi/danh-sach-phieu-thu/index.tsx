import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewReceiptList = dynamic(
  () => import("@/views/accounting/receipt-list"),
  {
    suspense: true,
    ssr: false,
  }
);

const ReceiptList: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewReceiptList />
    </Suspense>
  );
};

ReceiptList.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default ReceiptList;
