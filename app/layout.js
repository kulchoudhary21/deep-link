import "../style/global.css"
export const metadata = {
  title: "Deep Link",
};
export default function RootLayout({ children }) {
  return (  
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
