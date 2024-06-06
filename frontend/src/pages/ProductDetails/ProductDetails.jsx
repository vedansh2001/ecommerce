import "./ProductDetails.css"
import Navbar from "../../components/Navbar/Navbar.jsx"
import Footer from "../../components/Footer/Footer.jsx"

const ProductDetails = () => {
  return (
    <>
    <Navbar/>
    <div className="master-product-detail-div">
        <div className="product-detail-div">
        <div className="product-detail-title-div">
            <h3>PRODUCT DETAILS - DEFAULT</h3>
        </div>
        <div className="product-detail-text-div">
            <p>Home - Shop - <span>  Product Details Default</span></p>
        </div>
        </div>
    </div>

    <div className="masterdiv">
        <div className="leftdiv">
          <div className="leftdiv-top">

          </div>
          <div className="leftdiv-bottom">
            <div className="leftdiv-bottom-start">
            •••
            </div>
            <div className="leftdiv-bottom-mid">
              <div className="leftdiv-bottom-mid-images1"></div>
              <div className="leftdiv-bottom-mid-images2"></div>
              <div className="leftdiv-bottom-mid-images3"></div>
              <div className="leftdiv-bottom-mid-images4"></div>
            </div>
            <div className="leftdiv-bottom-end">
              •••
            </div>
          </div>
        </div>
        <div className="rightdiv">
          <div className="rightdiv-title">CHAIR</div>
          <div className="rightdiv-review">* * * * ‎ ‎ ‎ ‎ (customer review)</div> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est 
            tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo 
            gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p> 
            <div className="border-line"></div>
        <div className="product-details">
          <h4>Available Options</h4>
          <div className="stock">️✅ 200 IN STOCK</div>
          <span className="quantity-text">Quantity</span>
          <div className="quantity">
            
            <input type="text" placeholder="1" />
            <button>+ ADD TO CART</button>
          </div>
          <div className="add-to-wishlist">
            <a href="#" className="icons" >Add to wishlist</a>
            <a href="#" className="icons" >Compare</a>
          </div>
        </div>

        <div className="border-line"></div>
        <div className="categories">CATEGORIES :   <p className="categories-options"> BAR STOOL, KITCHEN UTENSILS, TENNIS</p></div>
        <div className="share-product">SHARE THIS PRODUCT :    <p className="categories-options">F X P G L</p></div>
      
        </div>
        
    </div>


    <div className="master-description-specification-reviews">
      <div className="description-specification-reviews">
        <ul>
          <li><strong>DESCRIPTION</strong> <div className="description-line" ></div> </li>
          <li>SPECIFICATION</li>
          <li>REVIEWS</li>
        </ul>
      </div>
      <div className="description-specification-reviews-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique
           auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
            Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
        <p>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis
           eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget 
           sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum 
           dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi
            posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. 
            Etiam gravida vehicula tellus, in imperdiet ligula euismod eget</p>
      </div>
    </div>

{/* ................................................................................................ */}

    <div className="related-product-seller-div">


    <div className='The-best-seller' >
      <h3>RELATED PRODUCTS.</h3>
      <p>Browse the collection of our related products.</p>      
    </div>



    <div className="best-seller-div">

      

      <div className="best-seller-prod-startdiv">

      </div>

      <div className="best-seller-products">

        <div className="best-seller-img">
          <div className="best-seller-div1">
          <span className='sale-tag'>sale</span>
            <a href="#"></a>            
          </div>
          <div className="new-detail-div">
            <a href="#">
              <h6>ALIQUAM LOBORTIS</h6>
            </a>
              <div className="rating">
                <span>*****</span>
                <p>$85.00</p>
                </div>         
          </div>
        </div>

        <div className="best-seller-img">
          <div className="best-seller-div2">
          <span className='sale-tag'>sale</span>
            <a href="#"></a>
            
          </div>
          <div className="new-detail-div">
            <a href="#">
              <h6>CONDIMENTUM PERFUME</h6>
            </a>
              <div className="rating">
                <span>*****</span>
                <p>$60.00</p>
                </div>
          </div>
        </div>

        <div className="best-seller-img">
          <div className="best-seller-div3">
          <span className='sale-tag'>sale</span>
            <a href="#"></a>
            
          </div>
          <div className="new-detail-div">
            <a href="#">
              <h6>ELECTRIC KETTLE</h6>
            </a>
              <div className="rating">
                <span>*****</span>
                <p>$100.00</p>
                </div>
          </div>
        </div>

        <div className="best-seller-img">
          <div className="best-seller-div4">
          <span className='sale-tag'>sale</span>
            <a href="#"></a>
            
          </div>
          <div className="new-detail-div">
            <a href="#">
              <h6>WINDED CHAIR</h6>
            </a>
              <div className="rating">
                <span>*****</span>
                <p>$73.00</p>
                </div>
          </div>
        </div>

        </div>

        <div className="best-seller-prod-enddiv">
        
      </div>

    </div>


    </div>

{/* ...................................................... */}

<Footer/>


    </>
  )
}

export default ProductDetails