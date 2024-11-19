import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h3>오늘은</h3>
      <h1>{new Date().toLocaleDateString()}</h1>

      {/* .toDateString() //Mon Nov 18 2024 */}
      {/* .toLocaleDateString() //2024.11.18. */}
      {/* .toLocaleString() //2024.11.18. 오전 12:52:36 */}
      {/* .toLocaleTimeString() //오전 12:53:59 */}

    </div>
  )
}

export default Header;