import { Suspense } from "react"
import dynamic from "next/dynamic"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import LayoutMain from "@/layouts/Main"

import type { NextPageWithLayout } from "@/pages/_app"
import type { GetStaticProps } from "next"

const ViewSettingService = dynamic(() => import("@/views/setting-manager/components/setting-service"), {
  suspense: true,
  ssr: false,
})

const SettingService: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewSettingService />
    </Suspense>
  )
}

SettingService.getLayout = page => {
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

export default SettingService
