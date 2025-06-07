import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewTreatmentDoctor = dynamic(
  () => import("@/views/revenue-statistics/treatment-doctor"),
  {
    suspense: true,
    ssr: false,
  }
);

const TreatmentDoctor: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewTreatmentDoctor />
    </Suspense>
  );
};

TreatmentDoctor.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default TreatmentDoctor;
