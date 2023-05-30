import Layout from './app/components/Layout'
import { AuthProvider } from './app/context/AuthContext'

export default function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  )
}
