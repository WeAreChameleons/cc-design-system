import { createContext, useContext, useState } from 'react'
import './Tabs.css'

const TabsContext = createContext<{ activeTab: string; setActiveTab: (t: string) => void }>({
  activeTab: '',
  setActiveTab: () => {},
})

export interface TabsProps {
  defaultTab: string
  children: React.ReactNode
}

export const Tabs = ({ defaultTab, children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab)
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="cc-tabs">{children}</div>
    </TabsContext.Provider>
  )
}

export const TabList = ({ children }: { children: React.ReactNode }) => (
  <div className="cc-tab-list" role="tablist">{children}</div>
)

export interface TabProps {
  value: string
  children: React.ReactNode
}

export const Tab = ({ value, children }: TabProps) => {
  const { activeTab, setActiveTab } = useContext(TabsContext)
  return (
    <button
      role="tab"
      className={`cc-tab ${activeTab === value ? 'cc-tab--active' : ''}`}
      onClick={() => setActiveTab(value)}
      aria-selected={activeTab === value}
    >
      {children}
    </button>
  )
}

export interface TabPanelProps {
  value: string
  children: React.ReactNode
}

export const TabPanel = ({ value, children }: TabPanelProps) => {
  const { activeTab } = useContext(TabsContext)
  if (activeTab !== value) return null
  return <div role="tabpanel" className="cc-tab-panel">{children}</div>
}
