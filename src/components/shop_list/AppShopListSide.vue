<template>
    <section class="shope-page-area section-top">
            <div class="container">
                <div class="shope-toolbar">
                    <div class="row">
                        <div class="col-lg-6 col-md-7">
                            <div class="shope-toolbar-lsft d-flex align-items-center">
                                <div class="shope-search">
                                    <form>
                                        <div class="form-group mb-0">
                                          <input type="text" class="form-control" id="search" name="search" placeholder="Search" />
                                          <button type="submit" class="search-btn"><i class="fas fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div class="shop-result-count">
                                    <p>Showing 1–12 of 100 results</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-5">
                            <div class="shope-toolbar-right d-flex ">
                                <div class="product-view-mode">
                                    <a class="view-btn grid " href="shop-grid-sidebar.html"><i class="fas fa-th"></i></a>
                                    <a class="view-btn list active" href="shop-list-sidebar.html"><i class="fas fa-list"></i></a>
                                </div>
                                <div class="shop-filter">
                                    <ul class="filter-list">
                                        <li class="filter-button">
                                            <a href="#">Filter <i class="fas fa-filter"></i></a>
                                            <ul class="sub-filter-list">
                                                <li><a href="#">Sort by Latest</a></li>
                                                <li><a href="#">Sort by Popularity</a></li>
                                                <li><a href="#">Sort by Rating</a></li>
                                                <li><a href="#">Sort by Featured</a></li>
                                                <li><a href="#">Price: Low to high</a></li>
                                                <li><a href="#">Price: High to low</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-4 order-1 order-md-0">
                        <div class="product-sidebar-widget">
                            <div class="single-widget categories-widget">
                                <h3 class="widget-title">Categories</h3>
                                <ul>
                                    <li><a href="#">Men</a></li>
                                    <li><a href="#">Women</a></li>
                                    <li><a href="#">Baby</a></li>
                                    <li><a href="#">Electronics</a></li>
                                    <li><a href="#">Furniture</a></li>
                                    <li><a href="#">Decoration</a></li>
                                    <li><a href="#">Lighting</a></li>
                                    <li><a href="#">Sports</a></li>
                                </ul>
                            </div>
                            <div class="single-widget popular-products-widget">
                                <h3 class="widget-title">Popular Products</h3>
                                <ul class="populer-product-list">
                                    <li class="single-populer-product">
                                        <div class="media">
                                            <div class="product-thumbnail mr-3">
                                                <a href="#"><img src="assets/images/products/p1.png" alt="product" /></a>
                                            </div>
                                            <div class="media-body align-self-center">
                                                <h4 class="product-name"><a href="#">Meeting Chair</a></h4>
                                                <span class="price">$45.00</span>
                                                <ul class="product-rating">
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star-half-alt"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="single-populer-product">
                                        <div class="media">
                                            <div class="product-thumbnail mr-3">
                                                <a href="#"><img src="assets/images/products/p2.png" alt="product" /></a>
                                            </div>
                                            <div class="media-body align-self-center">
                                                <h4 class="product-name"><a href="#">Girls Hill Shoe</a></h4>
                                                <span class="price">$45.00</span>
                                                <ul class="product-rating">
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star-half-alt"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="single-populer-product">
                                        <div class="media">
                                            <div class="product-thumbnail mr-3">
                                                <a href="#"><img src="assets/images/products/p3.png" alt="product" /></a>
                                            </div>
                                            <div class="media-body align-self-center">
                                                <h4 class="product-name"><a href="#">Aluminiam Chair</a></h4>
                                                <span class="price">$45.00</span>
                                                <ul class="product-rating">
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star-half-alt"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="single-populer-product">
                                        <div class="media">
                                            <div class="product-thumbnail mr-3">
                                                <a href="#"><img src="assets/images/products/p4.png" alt="product" /></a>
                                            </div>
                                            <div class="media-body align-self-center">
                                                <h4 class="product-name"><a href="#">Wooden Chair</a></h4>
                                                <span class="price">$45.00</span>
                                                <ul class="product-rating">
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star"></i></li>
                                                    <li><i class="fas fa-star-half-alt"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="single-widget popular-tags-widget">
                                <h3 class="widget-title">Popular Tags</h3>
                                <ul>
                                    <li><a href="#">Men</a></li>
                                    <li><a href="#">T-shirt</a></li>
                                    <li><a href="#">Cloth</a></li>
                                    <li><a href="#">Winter Suit</a></li>
                                    <li><a href="#">Decor Light</a></li>
                                    <li><a href="#">Clothing</a></li>
                                    <li><a href="#">Wooden</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-8 order-0 order-md-1">
                        <div class="product-list-v2">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="single-list-product">
                                        <div class="product-thumbnail">
                                            <a href="single-product.html"> <img src="assets/images/products/list1.jpg" alt="product" /></a>
                                         </div>
                                        <div class="product-content">
                                            <div class="product-info">
                                                <h3 class="product-name"><a href="single-product.html">Coffee Can</a></h3>
                                                <p class="product-text">Massa maecenas etiam condimentum elementum orci nunc tincidunt est. Turpis tellus feugiat quisque eu, porta diam urna elementum.</p>
                                                <div class="price-box">
                                                    <div class="price-sale">
                                                      <span class="special-price">$95.00</span>
                                                      <span class="old-price">$45.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-bottom">
                                                <div class="bottom-left">
                                                    <a class="cart-btn" href="#">Add to cart</a>
                                                    <a class="wishList" href="#"><i class="fas fa-heart"></i></a>
                                                </div>
                                                <div class="product-rating-area">
                                                    <ul class="product-rating">
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star-half-alt"></i></li>
                                                    </ul>
                                                    <h4 class="rating-point">4.9 (50)</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-list-product">
                                        <div class="product-thumbnail">
                                            <a href="single-product.html"> <img src="assets/images/products/list2.jpg" alt="product" /></a>
                                         </div>
                                        <div class="product-content">
                                            <div class="product-info">
                                                <h3 class="product-name"><a href="single-product.html">Men Winter Hodie</a></h3>
                                                <p class="product-text">Massa maecenas etiam condimentum elementum orci nunc tincidunt est. Turpis tellus feugiat quisque eu, porta diam urna elementum.</p>
                                                <div class="price-box">
                                                    <div class="price-sale">
                                                      <span class="special-price">$95.00</span>
                                                      <span class="old-price">$45.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-bottom">
                                                <div class="bottom-left">
                                                    <a class="cart-btn" href="#">Add to cart</a>
                                                    <a class="wishList" href="#"><i class="fas fa-heart"></i></a>
                                                </div>
                                                <div class="product-rating-area">
                                                    <ul class="product-rating">
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star-half-alt"></i></li>
                                                    </ul>
                                                    <h4 class="rating-point">4.9 (50)</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-list-product">
                                        <div class="product-thumbnail">
                                            <a href="single-product.html"> <img src="assets/images/products/list3.jpg" alt="product" /></a>
                                         </div>
                                        <div class="product-content">
                                            <div class="product-info">
                                                <h3 class="product-name"><a href="single-product.html">Aluminiam Super Chair</a></h3>
                                                <p class="product-text">Massa maecenas etiam condimentum elementum orci nunc tincidunt est. Turpis tellus feugiat quisque eu, porta diam urna elementum.</p>
                                                <div class="price-box">
                                                    <div class="price-sale">
                                                      <span class="special-price">$95.00</span>
                                                      <span class="old-price">$45.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-bottom">
                                                <div class="bottom-left">
                                                    <a class="cart-btn" href="#">Add to cart</a>
                                                    <a class="wishList" href="#"><i class="fas fa-heart"></i></a>
                                                </div>
                                                <div class="product-rating-area">
                                                    <ul class="product-rating">
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star-half-alt"></i></li>
                                                    </ul>
                                                    <h4 class="rating-point">4.9 (50)</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-list-product">
                                        <div class="product-thumbnail">
                                            <a href="single-product.html"> <img src="assets/images/products/list4.jpg" alt="product" /></a>
                                         </div>
                                        <div class="product-content">
                                            <div class="product-info">
                                                <h3 class="product-name"><a href="single-product.html">men Black T-shirt</a></h3>
                                                <p class="product-text">Massa maecenas etiam condimentum elementum orci nunc tincidunt est. Turpis tellus feugiat quisque eu, porta diam urna elementum.</p>
                                                <div class="price-box">
                                                    <div class="price-sale">
                                                      <span class="special-price">$95.00</span>
                                                      <span class="old-price">$45.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-bottom">
                                                <div class="bottom-left">
                                                    <a class="cart-btn" href="#">Add to cart</a>
                                                    <a class="wishList" href="#"><i class="fas fa-heart"></i></a>
                                                </div>
                                                <div class="product-rating-area">
                                                    <ul class="product-rating">
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star-half-alt"></i></li>
                                                    </ul>
                                                    <h4 class="rating-point">4.9 (50)</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-list-product">
                                        <div class="product-thumbnail">
                                            <a href="single-product.html"> <img src="assets/images/products/list5.jpg" alt="product" /></a>
                                         </div>
                                        <div class="product-content">
                                            <div class="product-info">
                                                <h3 class="product-name"><a href="single-product.html">Simple Carry Bag</a></h3>
                                                <p class="product-text">Massa maecenas etiam condimentum elementum orci nunc tincidunt est. Turpis tellus feugiat quisque eu, porta diam urna elementum.</p>
                                                <div class="price-box">
                                                    <div class="price-sale">
                                                      <span class="special-price">$95.00</span>
                                                      <span class="old-price">$45.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-bottom">
                                                <div class="bottom-left">
                                                    <a class="cart-btn" href="#">Add to cart</a>
                                                    <a class="wishList" href="#"><i class="fas fa-heart"></i></a>
                                                </div>
                                                <div class="product-rating-area">
                                                    <ul class="product-rating">
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star-half-alt"></i></li>
                                                    </ul>
                                                    <h4 class="rating-point">4.9 (50)</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-list-product">
                                        <div class="product-thumbnail">
                                            <a href="single-product.html"> <img src="assets/images/products/list6.jpg" alt="product" /></a>
                                         </div>
                                        <div class="product-content">
                                            <div class="product-info">
                                                <h3 class="product-name"><a href="single-product.html">Fashionalbe Sunglass</a></h3>
                                                <p class="product-text">Massa maecenas etiam condimentum elementum orci nunc tincidunt est. Turpis tellus feugiat quisque eu, porta diam urna elementum.</p>
                                                <div class="price-box">
                                                    <div class="price-sale">
                                                      <span class="special-price">$95.00</span>
                                                      <span class="old-price">$45.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-bottom">
                                                <div class="bottom-left">
                                                    <a class="cart-btn" href="#">Add to cart</a>
                                                    <a class="wishList" href="#"><i class="fas fa-heart"></i></a>
                                                </div>
                                                <div class="product-rating-area">
                                                    <ul class="product-rating">
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star"></i></li>
                                                        <li><i class="fas fa-star-half-alt"></i></li>
                                                    </ul>
                                                    <h4 class="rating-point">4.9 (50)</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <nav class="product-pagination">
                                        <ul class="pagination-area">
                                          <li><a href="#"><i class="fas fa-angle-left"></i></a></li>
                                          <li class="current"><a href="#">1</a></li>
                                          <li><a href="#">2</a></li>
                                          <li><a href="#">3</a></li>
                                          <li><a href="#"><i class="fas fa-angle-right"></i></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
</template>
<script>
export default {
    name: "AppShopListSide"
}
</script>