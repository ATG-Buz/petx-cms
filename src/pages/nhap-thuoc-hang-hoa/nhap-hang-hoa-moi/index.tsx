import { Suspense } from "react";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutMain from "@/layouts/Main";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const ViewProductImportCreate = dynamic(
  () => import("@/views/product-import/create"),
  {
    suspense: true,
    ssr: false,
  }
);

const ProductImportCreate: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewProductImportCreate />
    </Suspense>
  );
};

ProductImportCreate.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  };
};

export default ProductImportCreate;
