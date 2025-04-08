import { lazy } from "react";

const ClinicSetting = lazy(() => import('./ClinicSetting'))
const ManagerEmployer = lazy(() => import('./ManagerEmployer'))

export{ 
    ClinicSetting,
    ManagerEmployer
}