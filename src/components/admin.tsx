import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return <div className="container mx-auto">
    <h1>Dashboard</h1>
    <Outlet />
    <footer>

    </footer>
  </div>
}

export default AdminLayout