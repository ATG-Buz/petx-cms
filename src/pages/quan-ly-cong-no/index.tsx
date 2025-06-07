import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewErp = dynamic(() => import("@/views/erp/erp"), {
  suspense: true,
  ssr: false,
});

const Erp: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewErp />
    </Suspense>
  );
};

Erp.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default Erp;
