import { Suspense } from "react"
import dynamic from "next/dynamic"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import LayoutMain from "@/layouts/Main"

import type { NextPageWithLayout } from "@/pages/_app"
import type { GetStaticProps } from "next"

const ViewBackUpData = dynamic(() => import("@/views/Info-treatment/components/BackUpData"), {
  suspense: true,
  ssr: false,
})

const BackUpData: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewBackUpData />
    </Suspense>
  )
}

BackUpData.getLayout = page => {
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

export default BackUpData
