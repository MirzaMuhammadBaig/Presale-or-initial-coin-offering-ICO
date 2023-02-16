import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../App.css'
import BuyToken from './BuyToken';
import PrepareForSale from './PrepareForSale';
import WalletConnection from './WalletConnection';

function Navbar() {
  return (
    <div>
      <BrowserRouter>
        <div className="nav me-3 mt-3 background">
          <Link className="nav ms-3 me-3 nav-link nav-item color" to='/connection'>
            Connect Wallet
          </Link>
          <Link className="nav ms-3 me-3 nav-link nav-item color" to='/buy-my-token'>
            Buy My Token
          </Link>
          <Link className="nav ms-3 me-3 nav-link nav-item color" to='/prepare-for-sale'>
            Prepare For Sale
          </Link>
        </div>
        <Routes>
          <Route className="nav-item" path='/buy-my-token' element={<BuyToken />} />
          <Route className="nav-item" path='/prepare-for-sale' element={<PrepareForSale />} />
          <Route className="nav-item" path='/connection' element={<WalletConnection />} />
          <Route className="nav-item" path='/' element={<WalletConnection />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navbar
