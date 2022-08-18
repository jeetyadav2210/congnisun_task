
// CREATE TABLE Users(
//     user_id int NOT NULL AUTO_INCREMENT
//     username varchar(255),
//     email varchar(255),
//     password varchar(255),
// PRIMARY KEY(user_id)

// );



// CREATE TABLE Product_item (
//     product_id int NOT NULL AUTO_INCREMENT,
//     product_name varchar(255),
//     product_price int,
//     PRIMARY KEY(product_id),
// );



// CREATE TABLE shopping_Cart(
//     cart_id int NOT NULL AUTO_INCREMENT,
//     product_name varchar(255),
//     product_price int,
//     user_id int,
//     product_id int,
//     PRIMARY KEY(cart_id),
//     FOREIGN KEY(user_id) REFERENCES Users(user_id),
//     FOREIGN KEY(product_id) REFERENCES Product_item(product_id)

// );