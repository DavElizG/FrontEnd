import AuthProvider from "./context/AuthProvider"
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from "./routers/AppRouter"

function App() {
  return (
    <>
    <AuthProvider>
   <AppRouter/>
   </AuthProvider>
    </>
  )
}

export default App
