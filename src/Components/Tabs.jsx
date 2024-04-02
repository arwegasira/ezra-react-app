import { useState } from 'react'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('current')
  const handleActiveTab = (tabName) => {
    return setActiveTab(tabName)
  }

  return (
    <section>
      <div
        role='tablist'
        className='tabs tabs-bordered  mt-8 grid-cols-3 tabs-sm md:tabs-md lg:tabs-lg'
      >
        {/* CURRENT TAB */}
        <a
          role='tab'
          className={`tab ${activeTab === 'current' ? 'tab-active' : ''}`}
          onClick={() => handleActiveTab('current')}
        >
          Current
        </a>
        <div role='tabpanel' className='tab-content py-8 px-0'>
          Current
        </div>

        {/* UNPAID TAB */}
        <a
          role='tab'
          className={`tab ${activeTab === 'unpaid' ? 'tab-active' : ''}`}
          onClick={() => handleActiveTab('unpaid')}
        >
          Unpaid
        </a>
        <div role='tabpanel' className='tab-content py-8 px-0'>
          Unpaid
        </div>

        {/* History Tab */}
        <a
          role='tab'
          className={`tab ${activeTab === 'history' ? 'tab-active' : ''}`}
          onClick={() => handleActiveTab('history')}
        >
          History
        </a>
        <div role='tabpanel' className='tab-content py-8 px-0'>
          History
        </div>
      </div>
    </section>
  )
}
export default Tabs
