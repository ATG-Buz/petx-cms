import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewRevisit = dynamic(
  () => import("@/views/setting-manager/components/Revisit"),
  {
    suspense: true,
    ssr: false,
  }
);

const Revisit: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewRevisit />
    </Suspense>
  );
};

Revisit.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default Revisit;
