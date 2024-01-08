import Navbar from "#/components/navbar"

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode,
  modal : React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex">
        <div>
          <Navbar/>
          
        </div>
        <div>
          {children}
          {modal}
          <div id="modal-root">modal root</div>
        </div>
        </body>
    </html>
  )
}
