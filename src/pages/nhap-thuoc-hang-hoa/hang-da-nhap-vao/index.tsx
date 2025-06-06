import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewProductImport = dynamic(
  () => import("@/views/product-import/product-import"),
  {
    suspense: true,
    ssr: false,
  }
);

const ProductImport: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewProductImport />
    </Suspense>
  );
};

ProductImport.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default ProductImport;
