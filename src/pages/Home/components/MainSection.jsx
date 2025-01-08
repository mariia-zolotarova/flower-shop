import "./mainSection.scss"
export default function MainSection() {
    return (
        <div className="main">
            <div className="main__left-column">
                <div className="left-column__row1">
                    <h2 className="row1__title">Kyiv LuxeBouquets<sup className="row1__sup">®</sup></h2>
                    <p className="row1__description">Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower
                        Delivery Service</p>
                </div>
                <div className="left-column__row2">
                    <img className="row2__img" src="./img/main-right.png" alt="main img girl with flower" width="256"/>
                    <p className="row2__description">Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</p>
                </div>
            </div>
            <div className="main__right-column">
                <div className="right-column__content">
                    <div className="right-column__content-category content-category__fresh">
                        <p>Fresh Flowers</p>
                        <a>Shop now →</a>
                    </div>
                    <img className="right-column__content-img" src="./img/card-dried-flowers.png" alt="dried flowers"></img>
                    <div className="right-column__content-category content-category__live">
                        <p>Live Plants </p>
                        <a>Shop now →</a>
                    </div>
                    <img className="right-column__content-img" src="./img/card-candles.png" alt="candles"></img>
                    <div className="right-column__content-category">
                        <p>Fresheners</p>
                        <a>Shop now →</a>
                    </div>
                </div>
                <div className="right-column__content">
                    <img className="right-column__content-img" src="./img/card-fresh-flowers.png" alt="fresh flowers"></img>
                    <div className="right-column__content-category content-category__dried">
                        <p>Dried Flowers</p>
                        <a>← Shop now</a>
                    </div>
                    <img className="right-column__content-img" src="./img/card-live-plants.png" alt="live plants"></img>
                    <div className="right-column__content-category content-category__aroma">
                        <p>Aroma Candels</p>
                        <a>← Shop now</a>
                    </div>
                    <img className="right-column__content-img" src="./img/card-fresheners.png" alt="fresheners"></img>
                </div>
            </div>
        </div>
    )
}