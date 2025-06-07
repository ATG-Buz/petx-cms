import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewLoyaltyPoints = dynamic(
  () => import("@/views/revenue-statistics/loyalty-points"),
  {
    suspense: true,
    ssr: false,
  }
);

const LoyaltyPoints: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewLoyaltyPoints />
    </Suspense>
  );
};

LoyaltyPoints.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default LoyaltyPoints;
