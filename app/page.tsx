'use client'
import { useState } from 'react'

export default function Home() {
  const [dibuka, setDibuka] = useState(false)

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #ff9a9e, #fecfef)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
      color: 'white'
    }}>
      {!dibuka ? (
        <div>
          <h1 style={{fontSize: '40px'}}>🎁 Ada Kado Buat Kamu 🎁</h1>
          <button 
            onClick={() => setDibuka(true)}
            style={{
              padding: '15px 30px', 
              fontSize: '20px', 
              borderRadius: '20px',
              border: 'none',
              background: 'white',
              color: '#ff69b4',
              cursor: 'pointer',
              marginTop: '20px'
            }}
          >
            Klik Disini
          </button>
        </div>
      ) : (
        <div>
          <h1 style={{fontSize: '50px'}}>Selamat Ulang Tahun Adpy! 🎉</h1>
          <p style={{fontSize: '24px'}}>
            Semoga panjang umur, sehat selalu, <br/>
            dan semua doa baik terkabul yaa 💖<br/><br/>
            Dari: Dian
          </p>
          <div style={{fontSize: '60px', marginTop: '20px'}}>🎂🎈🎁🎈🎂</div>
        </div>
      )}
    </main>
  )
          }
