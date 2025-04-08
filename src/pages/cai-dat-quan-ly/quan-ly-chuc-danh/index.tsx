import { Suspense } from "react"
import dynamic from "next/dynamic"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import LayoutMain from "@/layouts/Main"

import type { NextPageWithLayout } from "@/pages/_app"
import type { GetStaticProps } from "next"

const ViewTitleManagement = dynamic(() => import("@/views/setting-manager/components/TitleManagement"), {
  suspense: true,
  ssr: false,
})

const TitleManagement: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewTitleManagement />
    </Suspense>
  )
}

TitleManagement.getLayout = page => {
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

export default TitleManagement
