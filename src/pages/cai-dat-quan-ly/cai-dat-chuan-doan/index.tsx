import { Suspense } from "react"
import dynamic from "next/dynamic"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import LayoutMain from "@/layouts/Main"

import type { NextPageWithLayout } from "@/pages/_app"
import type { GetStaticProps } from "next"

const ViewDiagnosticSettings = dynamic(() => import("@/views/setting-manager/components/DiagnosticSettings"), {
  suspense: true,
  ssr: false,
})

const DiagnosticSettings: NextPageWithLayout = () => {
  return (
    <Suspense fallback="...">
      <ViewDiagnosticSettings />
    </Suspense>
  )
}

DiagnosticSettings.getLayout = page => {
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

export default DiagnosticSettings
