import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewSendSystemAlerts = dynamic(
  () => import("@/views/notications/send-system-alerts"),
  {
    suspense: true,
    ssr: false,
  }
);

const SendSystemAlerts: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewSendSystemAlerts />
    </Suspense>
  );
};

SendSystemAlerts.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default SendSystemAlerts;
