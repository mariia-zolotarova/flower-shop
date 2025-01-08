import "./header.scss"

export default function Header() {
    return (
        <div className="header">
            <div className="header__side">
                <a className="header__button header__button-shop">Shop</a>
                <a className="header__button header__button-contact">Contact</a>
            </div>
            <div className="header__side">
                <a className="header__button header__button-sign-in">Sign in</a>
                <a className="header__button header__button-cart">Cart</a>
            </div>
        </div>
    )
}