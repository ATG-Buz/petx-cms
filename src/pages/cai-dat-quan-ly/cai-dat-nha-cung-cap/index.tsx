import { Suspense } from "react"
import dynamic from "next/dynamic"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import LayoutMain from "@/layouts/Main"

import type { NextPageWithLayout } from "@/pages/_app"
import type { GetStaticProps } from "next"

const ViewProviderSetting = dynamic(() => import("@/views/setting-manager/components/ProviderSetting"), {
  suspense: true,
  ssr: false,
})

const ProviderSetting: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewProviderSetting />
    </Suspense>
  )
}

ProviderSetting.getLayout = page => {
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

export default ProviderSetting
