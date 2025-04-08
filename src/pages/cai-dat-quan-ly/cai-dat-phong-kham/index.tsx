import { Suspense } from "react"
import dynamic from "next/dynamic"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import LayoutMain from "@/layouts/Main"

import type { NextPageWithLayout } from "@/pages/_app"
import type { GetStaticProps } from "next"

const ViewClinicSetting = dynamic(() => import("@/views/setting-manager/components/ClinicSetting"), {
  suspense: true,
  ssr: false,
})

const ClinicSetting: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewClinicSetting />
    </Suspense>
  )
}

ClinicSetting.getLayout = page => {
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

export default ClinicSetting
