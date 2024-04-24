import { useEffect } from "react"
import { NavBar } from "../../components/navbars/Navbar"
import { useChannels, useUserDetails } from "../../shared/hooks"
import { LoadingSpinner } from '../../components/LoadingSpinner.jsx'
import { Content } from '../../components/dashboard/Content.jsx'
import './dashboardPage.css'

export const DashboardPage = () => {
  const { getChannels, allChannels, isFetching} = useChannels()
  const { isLogged } = useUserDetails()
  useEffect(() => {
    getChannels(isLogged)
  }, [])

  if(isFetching){
    <LoadingSpinner/>
  }
  return (
    <div className="dashboard-container">
      <NavBar/>
      <Content channels={allChannels || []} getChannels={getChannels}/>
    </div>
  )
}