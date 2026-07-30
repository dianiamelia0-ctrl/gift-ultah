export const metadata = {
  title: 'Selamat Ulang Tahun! 🎉',
  description: 'Kado digital buat kamu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
