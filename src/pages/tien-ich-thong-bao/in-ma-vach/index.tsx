import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewBarcodePrinting = dynamic(
  () => import("@/views/notications/barcode-printing"),
  {
    suspense: true,
    ssr: false,
  }
);

const BarcodePrinting: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewBarcodePrinting />
    </Suspense>
  );
};

BarcodePrinting.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default BarcodePrinting;
