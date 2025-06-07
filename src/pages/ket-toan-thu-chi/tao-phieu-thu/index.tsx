import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewReceiptCreate = dynamic(
  () => import("@/views/accounting/receipt-create"),
  {
    suspense: true,
    ssr: false,
  }
);

const ReceiptCreate: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewReceiptCreate />
    </Suspense>
  );
};

ReceiptCreate.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default ReceiptCreate;
