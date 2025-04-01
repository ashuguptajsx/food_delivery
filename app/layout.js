import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'Food Delivery App',
  description: 'Order your favorite food online',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#fff',
              color: '#333',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#f97316', 
              },
            },
          }}
        />
      </body>
    </html>
  )
}