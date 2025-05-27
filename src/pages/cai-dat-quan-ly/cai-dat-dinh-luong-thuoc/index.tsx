import { Suspense } from "react"
import dynamic from "next/dynamic"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import LayoutMain from "@/layouts/Main"

import type { NextPageWithLayout } from "@/pages/_app"
import type { GetStaticProps } from "next"

const ViewDrugQuantification = dynamic(() => import("@/views/setting-manager/components/DrugQuantification"), {
  suspense: true,
  ssr: false,
})

const DrugQuantification: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewDrugQuantification />
    </Suspense>
  )
}

DrugQuantification.getLayout = page => {
  return (
      <LayoutMain>{page}</LayoutMain>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "")),
    },
  }
}

export default DrugQuantification
