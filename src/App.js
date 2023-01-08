import './App.css';

import Sidebar from './components/Sidebar.component';
import TransitionRoot from './components/TransitionRoot.component';
import Dashboard from './components/MainColumn.jsx/Dashboard.component';

//Proba de push

export default function Example() {

  return (
    <>
      <div className="min-h-full">
        {/* TransitionRoot - per a ajustar responsiveness */}
        <TransitionRoot />

        {/* Static sidebar per a desktop */}
        <Sidebar />

        {/* Main column */}
        <Dashboard />
      </div>
    </>
  )
}