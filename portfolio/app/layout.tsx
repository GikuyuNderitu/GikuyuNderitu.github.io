import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className='pb-20'>
        {children}
      </body>
    </html>
  )
}
