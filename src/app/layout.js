import '../index.css';
import '../App.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Chatbox from '../Components/Chatbox/Chatbox';

export const metadata = {
  title: 'SR',
  description: 'SR Application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Chatbox />
      </body>
    </html>
  );
}
