import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewPaymentCreate = dynamic(
  () => import("@/views/accounting/payment-create"),
  {
    suspense: true,
    ssr: false,
  }
);

const PaymentCreate: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewPaymentCreate />
    </Suspense>
  );
};

PaymentCreate.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default PaymentCreate;
