const Header = ({pantalla}) => {
    return (
        <header>
            <input type="text" name="pantalla" className="header__pantalla" placeholder="0" value={pantalla} readOnly/>
        </header>
    )
}

export default Header;
