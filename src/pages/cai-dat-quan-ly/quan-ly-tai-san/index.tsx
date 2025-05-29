import { Suspense } from "react"
import dynamic from "next/dynamic"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import LayoutMain from "@/layouts/Main"

import type { NextPageWithLayout } from "@/pages/_app"
import type { GetStaticProps } from "next"

const ViewAssetManagement = dynamic(() => import("@/views/setting-manager/components/AssetManagement"), {
  suspense: true,
  ssr: false,
})

const AssetManagement: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewAssetManagement />
    </Suspense>
  )
}

AssetManagement.getLayout = page => {
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

export default AssetManagement
