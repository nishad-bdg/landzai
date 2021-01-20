<template>
    <section class="cart-page-area section-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8">
                        <div class="cart-top d-flex justify-content-between align-items-center">
                            <div class="cart-title">
                                <h2 class="title">Shopping Cart</h2>
                            </div>
                            <div class="delet-item">
                                <a class="delet-btn" href="#">Delete Items</a>
                            </div>
                        </div>
                        <div class="cart-product-list">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                      <tr>
                                        <th></th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td><input type="checkbox" class="product-check" id="product1"></td>
                                        <td>
                                            <div class="single-prdocut">
                                                <div class="media">
                                                    <div class="product-image mr-3">
                                                        <img src="images/products/cart1.png" alt="cart" />
                                                    </div>
                                                    <div class="media-body align-self-center">
                                                      <h4 class="product-name"><a href="#">Printed Mug</a></h4>
                                                      <span>Size : XL, Color: Blue</span>
                                                      <span>Code : XK58SD2S6FD</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$150.00</td>
                                        <td>10</td>
                                        <td>$1500.00</td>
                                      </tr>
                                      <tr>
                                        <td><input type="checkbox" class="product-check" id="product1"></td>
                                        <td>
                                            <div class="single-prdocut">
                                                <div class="media">
                                                    <div class="product-image mr-3">
                                                        <img src="images/products/cart2.png" alt="cart" />
                                                    </div>
                                                    <div class="media-body align-self-center">
                                                      <h4 class="product-name"><a href="#">Sunglass</a></h4>
                                                      <span>Size : XL, Color: Blue</span>
                                                      <span>Code : XK58SD2S6FD</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$150.00</td>
                                        <td>10</td>
                                        <td>$1500.00</td>
                                      </tr>
                                      <tr>
                                        <td><input type="checkbox" class="product-check" id="product1"></td>
                                        <td>
                                            <div class="single-prdocut">
                                                <div class="media">
                                                    <div class="product-image mr-3">
                                                        <img src="images/products/cart3.png" alt="cart" />
                                                    </div>
                                                    <div class="media-body align-self-center">
                                                      <h4 class="product-name"><a href="#">Wooden Chair</a></h4>
                                                      <span>Size : XL, Color: Blue</span>
                                                      <span>Code : XK58SD2S6FD</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$150.00</td>
                                        <td>10</td>
                                        <td>$1500.00</td>
                                      </tr>
                                      <tr>
                                        <td><input type="checkbox" class="product-check" id="product1"></td>
                                        <td>
                                            <div class="single-prdocut">
                                                <div class="media">
                                                    <div class="product-image mr-3">
                                                        <img src="images/products/cart4.png" alt="cart" />
                                                    </div>
                                                    <div class="media-body align-self-center">
                                                      <h4 class="product-name"><a href="#">T-shirt</a></h4>
                                                      <span>Size : XL, Color: Blue</span>
                                                      <span>Code : XK58SD2S6FD</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$150.00</td>
                                        <td>10</td>
                                        <td>$1500.00</td>
                                      </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="cart-bottom d-flex justify-content-between align-items-center">
                            <div class="cupon-area">
                                <form action="#">
                                    <div class="cupon-code ">
                                        <div class="form-group mb-0">
                                            <input type="text" placeholder="Enter Coupon Code" />
                                            <button type="submit" class="applay-btn">Apply</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="update-area">
                                <a class="update-btn" href="#">Update Cart</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4">
                        <div class="order-summary">
                            <h2>Order Summary</h2>
                            <ul>
                                <li>Total Items <span>05</span></li>
                                <li>Subtotal <span>$560.00</span></li>
                                <li>Standard Shipping  <span>$7.00</span></li>
                                <li>VAT/Tax 15% <span>$25.00</span></li>
                                <li>Discount <span class="discount-amount">-$42.50</span></li>
                            </ul>
                            <div class="total-cost">
                                <h4>Total Cost <span>$500.50</span></h4>
                            </div>
                            <a href="#" class="checkout-btn">Procced to Checkout</a>
                            <a href="#" class="continue-shopping"> <i class="fas fa-long-arrow-alt-left"></i> Continue Shopping</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
export default {
    name: "AppCart"
}
</script>