import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewPaymentList = dynamic(
  () => import("@/views/accounting/payment-list"),
  {
    suspense: true,
    ssr: false,
  }
);

const PaymentList: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewPaymentList />
    </Suspense>
  );
};

PaymentList.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default PaymentList;
