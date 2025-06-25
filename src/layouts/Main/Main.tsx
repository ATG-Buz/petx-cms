import { useEffect, useState } from "react"

import useStyles from "./Main.styles"
import Home from "@/views/Home"
import { RootState } from "@/utils/store"
import { useSelector } from "react-redux"
import { gotoPage } from "@/utils/helpers/common"

type MainProps = {
  children: React.ReactNode
}

const Main = (props: MainProps) => {
  const { children } = props

  const { classes } = useStyles()
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    if (!user) {
      gotoPage("/auth/login")
    }
  }, [user])

  return (
    <div className={classes.root}>
      <Home childrenChild={children} />
    </div>
  )
}

export default Main
