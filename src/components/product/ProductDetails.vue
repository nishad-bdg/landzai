<template>
    <section class="single-product-page section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="product-slier-big-image">
                            <div class="product-priview-slide">
                                <a href="assets/images/products/single-product-image.png" data-fancybox="gallery">
                                    <img class="product-image" src="assets/images/products/single-product-image.png" alt="image-1" />
                                </a>
                                <a href="assets/images/products/single-product-image.png" data-fancybox="gallery">
                                    <img class="product-image" src="assets/images/products/single-product-image.png" alt="image-1" />
                                </a>
                                <a href="assets/images/products/single-product-image.png" data-fancybox="gallery">
                                    <img class="product-image" src="assets/images/products/single-product-image.png" alt="image-1" />
                                </a>
                            </div>
                        </div>
                        <div class="product-thumbnail-image">
                            <ul class="product-thumb-silide">
                                <li>
                                    <img src="assets/images/products/single-product-image-thumbnail.png" alt="cart" />
                                </li>
                                <li>
                                    <img src="assets/images/products/single-product-image-thumbnail.png" alt="cart" />
                                </li>
                                <li>
                                    <img src="assets/images/products/single-product-image-thumbnail.png" alt="cart" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="product-info">
                            <h2 class="product-title">men Black T-shirt</h2>
                            <div class="price-box">
                                <div class="price-sale">
                                  <span class="special-price">$95.00</span>
                                  <span class="old-price">$45.00</span>
                                </div>
                            </div>
                            <div class="product-rating-area">
                                <ul class="product-rating">
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star-half-alt"></i></li>
                                </ul>
                                <span class="rating-point">4.9 (50)</span>
                            </div>
                            <div class="product-description">
                                <h3>Product Description</h3>
                                <p>Natoque nec, accumsan, aliquam est diam pellentesque tellus et. Convallis sem scelerisque lectus dolor bibendum. Vitae quam vestibulum ornare phasellus id egestas. Nisl quis nibh tristique et. Aliquet commodo at malesuada lectus adipiscing elementum ultricies. </p>
                            </div>
                            <div class="product-size-area">
                                <label>Size</label>
                                <ul class="size-list">
                                    <li class="active"><a href="#">S</a></li>
                                    <li><a href="#">M</a></li>
                                    <li><a href="#">L</a></li>
                                    <li><a href="#">XL</a></li>
                                    <li><a href="#">XXL</a></li>
                                </ul>
                            </div>
                            <div class="product-color-area">
                                <label>Color</label>
                                <ul class="color-list">
                                    <li><a href="#" style="background:#000000;"></a></li>
                                    <li><a href="#" style="background:#2896F7;"></a></li>
                                    <li class="active"><a href="#" style="background:#FF6C5A;"></a></li>
                                    <li><a href="#" style="background:#0FBE7B;"></a></li>
                                </ul>
                            </div>
                            <div class="quantity-box">
                                <label>Quantity</label>
                                <div class="quickview-cart-wrap d-flex align-items-center ">
                                    <div class="quickview-quality">
                                        <div class="cart-plus-minus">
                                            <div class="dec qtybutton btn">-</div>
                                            <input class="cart-plus-minus-box" type="text" name="qtybutton" value="1">
                                            <div class="inc qtybutton btn">+</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="#" class="add-cart-btn">Add to cart</a>
                            <a href="#" class="favourite"><i class="fas fa-heart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
export default {
    name: "ProductDetails"
}
</script>