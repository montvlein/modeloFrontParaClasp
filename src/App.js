import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Dashboard from "./components/dashboard"

export default function App() {
  return(
   <>
    <Navbar/>
    <main className="p-4 sm:ml-64">
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/jeeves" element={<Jeeves/>}/>
            <Route path="/amexusd" element={<AmexUSD/>}/>
            <Route path="/amexcdn" element={<AmexCDN/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </main>
   </>
  )
}

  const Jeeves = () => <h1>Jeeves</h1>
  const AmexUSD = () => <h1>Amex USD</h1>
  const AmexCDN = () => <h1>Amex CDN</h1>
  const NotFound = () => <h1>Not Found</h1>