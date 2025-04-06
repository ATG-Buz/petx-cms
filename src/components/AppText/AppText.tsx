import React from "react"

export const AppText = ({ children }: { children: React.ReactNode }) => {

  return (
    <span style={{
      color: 'black',
      fontFamily: "Open Sans, sans-serif",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "24px",
      textAlign: "center",
    }} >
      {children}
    </span>
  )
}

export const AppText600 = ({ children }: { children: React.ReactNode }) => {

  return (
    <span style={{
      color: 'black',
      fontFamily: "Open Sans, sans-serif",
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "24px",
      textAlign: "center",
    }} >
      {children}
    </span>
  )
}