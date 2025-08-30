import React from "react";
import ReactDOM from "react-dom/client";


const  Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" />
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>Cart</li>
                        <li>About</li>
                        <li>Contact US</li>
                    </ul>

                </div>
        
        </div>

    )
}

const RestroCard = (props) => {
    const {resData} = props;
    
    return (
        <div className="res-card">
            <img alt="res-logo" className="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/39825299E.png"></img>
        <h3>{resData.name}</h3>
        <h4>{resData.cuisines}</h4>
        <h5>{resData.avgRating}</h5>
        <h5>{resData.costForTwo}</h5>


        </div>
    )
};

const restList= {
  "restaurants": [
    {
      "id": "101",
      "name": "KFC",
      "slug": "kfc-btm-layout",
      "description": "Kentucky Fried Chicken - World famous fried chicken",
      "image": "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop",
      "logo": "https://images.unsplash.com/photo-1606755962773-d324e9dea936?w=100&h=100&fit=crop",
      "rating": 4.2,
      "totalRatings": 1250,
      "avgRating": "4.2",
      "cuisines": ["American", "Fast Food", "Fried Chicken", "Burgers"],
      "tags": ["family", "quick service", "crispy"],
      "costForTwo": 400,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 25,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 30,
      "deliveryFee": 25,
      "slaString": "20-30 MINS",
      "lastMileTravel": 2.1,
      "area": "BTM Layout",
      "city": "Bangalore",
      "locality": "Koramangala",
      "address": "123, Brigade Road, Bangalore - 560001",
      "phone": "+91-9876543210",
      "isVeg": false,
      "isPureVeg": false,
      "isOpen": true,
      "hasOnlineOrdering": true,
      "aggregatedDiscountInfo": {
        "header": "FLAT 20% OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "offers": [
        {
          "type": "percentage",
          "value": 20,
          "description": "20% off on orders above ₹299",
          "code": "FLAT20"
        }
      ],
      "menuItems": [
        {
          "id": "1001",
          "name": "Original Recipe Chicken",
          "category": "Chicken",
          "price": 180,
          "image": "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=200&fit=crop",
          "isVeg": false,
          "isSpicy": true,
          "description": "Secret blend of 11 herbs and spices",
          "calories": 320
        },
        {
          "id": "1002", 
          "name": "Zinger Burger",
          "category": "Burgers",
          "price": 220,
          "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
          "isVeg": false,
          "isSpicy": true,
          "description": "Spicy crispy chicken fillet with mayo",
          "calories": 450
        }
      ]
    },
    {
      "id": "102", 
      "name": "Karim Hotel",
      "slug": "karim-old-delhi",
      "description": "Authentic Mughlai cuisine since 1913",
      "image": "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=300&fit=crop",
      "logo": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=100&h=100&fit=crop",
      "rating": 4.5,
      "totalRatings": 2890,
      "avgRating": "4.5",
      "cuisines": ["Mughlai", "North Indian", "Biryani", "Kebabs"],
      "tags": ["authentic", "heritage", "non-veg"],
      "costForTwo": 600,
      "costForTwoString": "₹600 FOR TWO", 
      "deliveryTime": 45,
      "minDeliveryTime": 40,
      "maxDeliveryTime": 50,
      "deliveryFee": 35,
      "slaString": "40-50 MINS",
      "lastMileTravel": 5.2,
      "area": "Old Delhi",
      "city": "New Delhi",
      "locality": "Jama Masjid",
      "address": "16, Gali Kababian, Jama Masjid, Delhi - 110006",
      "phone": "+91-9876543211",
      "isVeg": false,
      "isPureVeg": false,
      "isOpen": true,
      "hasOnlineOrdering": true,
      "aggregatedDiscountInfo": {
        "header": "BUY 1 GET 1",
        "subHeader": "ON BIRYANI",
        "discountTag": "SPECIAL OFFER"
      },
      "offers": [
        {
          "type": "buy_get",
          "value": "1+1",
          "description": "Buy 1 Biryani Get 1 Free",
          "code": "BIRYANI1"
        }
      ],
      "menuItems": [
        {
          "id": "2001",
          "name": "Chicken Biryani",
          "category": "Biryani",
          "price": 280,
          "image": "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&h=200&fit=crop",
          "isVeg": false,
          "isSpicy": true,
          "description": "Aromatic basmati rice with tender chicken",
          "calories": 520
        },
        {
          "id": "2002",
          "name": "Mutton Seekh Kebab",
          "category": "Kebabs", 
          "price": 320,
          "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop",
          "isVeg": false,
          "isSpicy": true,
          "description": "Juicy minced mutton grilled to perfection",
          "calories": 380
        }
      ]
    },
    {
      "id": "103",
      "name": "Pizza Hut", 
      "slug": "pizza-hut-koramangala",
      "description": "Delicious pizzas with the finest ingredients",
      "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
      "logo": "https://images.unsplash.com/photo-1571407982273-603948e4f5c5?w=100&h=100&fit=crop",
      "rating": 4.1,
      "totalRatings": 956,
      "avgRating": "4.1",
      "cuisines": ["Pizzas", "Italian", "Fast Food", "Desserts"],
      "tags": ["family", "cheesy", "value for money"],
      "costForTwo": 500,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 35,
      "deliveryFee": 30,
      "slaString": "25-35 MINS",
      "lastMileTravel": 3.8,
      "area": "Koramangala",
      "city": "Bangalore", 
      "locality": "5th Block",
      "address": "456, Hosur Road, Koramangala, Bangalore - 560095",
      "phone": "+91-9876543212",
      "isVeg": false,
      "isPureVeg": false,
      "isOpen": true,
      "hasOnlineOrdering": true,
      "aggregatedDiscountInfo": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75",
        "discountTag": "SAVE BIG"
      },
      "offers": [
        {
          "type": "percentage",
          "value": 30,
          "description": "30% off upto ₹75",
          "code": "PIZZA30"
        }
      ],
      "menuItems": [
        {
          "id": "3001",
          "name": "Margherita Pizza", 
          "category": "Pizzas",
          "price": 350,
          "image": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&h=200&fit=crop",
          "isVeg": true,
          "isSpicy": false,
          "description": "Classic tomato sauce, mozzarella and fresh basil",
          "calories": 280
        },
        {
          "id": "3002",
          "name": "Chicken Supreme Pizza",
          "category": "Pizzas",
          "price": 450,
          "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
          "isVeg": false,
          "isSpicy": false, 
          "description": "Chicken chunks, onions, bell peppers",
          "calories": 420
        }
      ]
    },
    {
      "id": "104",
      "name": "McDonald's",
      "slug": "mcdonalds-mg-road", 
      "description": "I'm Lovin' It - World's favorite burgers and fries",
      "image": "https://images.unsplash.com/photo-1552566688-dcd8616fb1ba?w=400&h=300&fit=crop",
      "logo": "https://images.unsplash.com/photo-1606755962773-d324e9dea936?w=100&h=100&fit=crop",
      "rating": 4.0,
      "totalRatings": 1580,
      "avgRating": "4.0",
      "cuisines": ["American", "Fast Food", "Burgers", "Beverages"],
      "tags": ["quick service", "kids friendly", "24x7"],
      "costForTwo": 350,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 20,
      "minDeliveryTime": 15,
      "maxDeliveryTime": 25,
      "deliveryFee": 20,
      "slaString": "15-25 MINS",
      "lastMileTravel": 1.5,
      "area": "MG Road",
      "city": "Bangalore",
      "locality": "Central Business District",
      "address": "789, MG Road, Bangalore - 560001",
      "phone": "+91-9876543213",
      "isVeg": false,
      "isPureVeg": false,
      "isOpen": true,
      "hasOnlineOrdering": true,
      "aggregatedDiscountInfo": {
        "header": "FREE DELIVERY",
        "subHeader": "NO MIN ORDER",
        "discountTag": "FREE DEL"
      },
      "offers": [
        {
          "type": "free_delivery",
          "value": 0,
          "description": "Free delivery on all orders",
          "code": "FREEDEL"
        }
      ],
      "menuItems": [
        {
          "id": "4001",
          "name": "Big Mac",
          "category": "Burgers",
          "price": 280,
          "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=200&fit=crop",
          "isVeg": false,
          "isSpicy": false,
          "description": "Two all-beef patties, special sauce, lettuce, cheese",
          "calories": 550
        },
        {
          "id": "4002",
          "name": "McVeggie Burger",
          "category": "Burgers",
          "price": 180,
          "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop",
          "isVeg": true,
          "isSpicy": false,
          "description": "Crispy veggie patty with fresh lettuce",
          "calories": 320
        }
      ]
    },
    {
      "id": "105",
      "name": "Saravana Bhavan",
      "slug": "saravana-bhavan-jayanagar",
      "description": "Authentic South Indian vegetarian restaurant",
      "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop",
      "logo": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=100&h=100&fit=crop",
      "rating": 4.4,
      "totalRatings": 2100,
      "avgRating": "4.4",
      "cuisines": ["South Indian", "Vegetarian", "Tamil", "Breakfast"],
      "tags": ["pure veg", "traditional", "filter coffee"],
      "costForTwo": 250,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 35,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 40,
      "deliveryFee": 15,
      "slaString": "30-40 MINS",
      "lastMileTravel": 4.2,
      "area": "Jayanagar",
      "city": "Bangalore",
      "locality": "4th Block",
      "address": "321, 4th Block, Jayanagar, Bangalore - 560011",
      "phone": "+91-9876543214",
      "isVeg": true,
      "isPureVeg": true,
      "isOpen": true,
      "hasOnlineOrdering": true,
      "aggregatedDiscountInfo": {
        "header": "15% OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "SAVE MORE"
      },
      "offers": [
        {
          "type": "percentage",
          "value": 15,
          "description": "15% off on orders above ₹199",
          "code": "SOUTH15"
        }
      ],
      "menuItems": [
        {
          "id": "5001",
          "name": "Masala Dosa",
          "category": "Dosas",
          "price": 120,
          "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=200&fit=crop",
          "isVeg": true,
          "isSpicy": true,
          "description": "Crispy dosa with spiced potato filling",
          "calories": 280
        },
        {
          "id": "5002",
          "name": "Filter Coffee",
          "category": "Beverages",
          "price": 60,
          "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop",
          "isVeg": true,
          "isSpicy": false,
          "description": "Traditional South Indian filter coffee",
          "calories": 25
        }
      ]
    },
    {
      "id": "106",
      "name": "Haldiram's",
      "slug": "haldirams-cp",
      "description": "Traditional Indian sweets, snacks and vegetarian food",
      "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
      "logo": "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=100&h=100&fit=crop",
      "rating": 4.3,
      "totalRatings": 1750,
      "avgRating": "4.3",
      "cuisines": ["North Indian", "Sweets", "Snacks", "Desserts", "Chat"],
      "tags": ["sweets", "traditional", "family"],
      "costForTwo": 300,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 40,
      "minDeliveryTime": 35,
      "maxDeliveryTime": 45,
      "deliveryFee": 25,
      "slaString": "35-45 MINS",
      "lastMileTravel": 6.1,
      "area": "Connaught Place",
      "city": "New Delhi",
      "locality": "CP Block",
      "address": "789, Connaught Place, New Delhi - 110001",
      "phone": "+91-9876543215",
      "isVeg": true,
      "isPureVeg": true,
      "isOpen": true,
      "hasOnlineOrdering": true,
      "aggregatedDiscountInfo": {
        "header": "25% OFF",
        "subHeader": "ON SWEETS",
        "discountTag": "SWEET DEAL"
      },
      "offers": [
        {
          "type": "percentage",
          "value": 25,
          "description": "25% off on all sweets",
          "code": "SWEET25"
        }
      ],
      "menuItems": [
        {
          "id": "6001",
          "name": "Gulab Jamun",
          "category": "Sweets",
          "price": 80,
          "image": "https://images.unsplash.com/photo-1626776877229-7e99bf50ed32?w=300&h=200&fit=crop",
          "isVeg": true,
          "isSpicy": false,
          "description": "Soft milk dumplings in sweet syrup",
          "calories": 150
        },
        {
          "id": "6002",
          "name": "Pani Puri",
          "category": "Chat",
          "price": 50,
          "image": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop",
          "isVeg": true,
          "isSpicy": true,
          "description": "Crispy puris with tangy flavored water",
          "calories": 120
        }
      ]
    },
    {
      "id": "107",
      "name": "Subway",
      "slug": "subway-indiranagar",
      "description": "Eat Fresh - Healthy sandwiches and salads",
      "image": "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=300&fit=crop",
      "logo": "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=100&h=100&fit=crop",
      "rating": 4.0,
      "totalRatings": 820,
      "avgRating": "4.0",
      "cuisines": ["Healthy Food", "Salads", "Sandwiches", "Fast Food"],
      "tags": ["healthy", "customizable", "fresh"],
      "costForTwo": 400,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 25,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 30,
      "deliveryFee": 20,
      "slaString": "20-30 MINS",
      "lastMileTravel": 2.8,
      "area": "Indiranagar",
      "city": "Bangalore",
      "locality": "100 Feet Road",
      "address": "234, 100 Feet Road, Indiranagar, Bangalore - 560038",
      "phone": "+91-9876543216",
      "isVeg": false,
      "isPureVeg": false,
      "isOpen": true,
      "hasOnlineOrdering": true,
      "aggregatedDiscountInfo": {
        "header": "BUY 2 GET 1",
        "subHeader": "ON COOKIES",
        "discountTag": "COOKIE DEAL"
      },
      "offers": [
        {
          "type": "buy_get",
          "value": "2+1",
          "description": "Buy 2 cookies get 1 free",
          "code": "COOKIE21"
        }
      ],
      "menuItems": [
        {
          "id": "7001",
          "name": "Chicken Teriyaki Sub",
          "category": "Sandwiches",
          "price": 280,
          "image": "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=300&h=200&fit=crop",
          "isVeg": false,
          "isSpicy": false,
          "description": "Chicken teriyaki with fresh vegetables",
          "calories": 380
        },
        {
          "id": "7002",
          "name": "Veggie Delite Sub",
          "category": "Sandwiches",
          "price": 180,
          "image": "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=300&h=200&fit=crop",
          "isVeg": true,
          "isSpicy": false,
          "description": "Fresh vegetables with choice of sauce",
          "calories": 220
        }
      ]
    },
    {
      "id": "108",
      "name": "Wow! Momo",
      "slug": "wow-momo-sector-18",
      "description": "Delicious momos and Tibetan cuisine",
      "image": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop",
      "logo": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop",
      "rating": 4.2,
      "totalRatings": 1340,
      "avgRating": "4.2",
      "cuisines": ["Momos", "Chinese", "Tibetan", "Fast Food"],
      "tags": ["steamed", "healthy", "affordable"],
      "costForTwo": 200,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 35,
      "deliveryFee": 15,
      "slaString": "25-35 MINS",
      "lastMileTravel": 3.2,
      "area": "Sector 18",
      "city": "Gurgaon",
      "locality": "DLF Phase 1",
      "address": "567, DLF Phase 1, Gurgaon - 122002",
      "phone": "+91-9876543217",
      "isVeg": false,
      "isPureVeg": false,
      "isOpen": true,
      "hasOnlineOrdering": true,
      "aggregatedDiscountInfo": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountTag": "MEGA SAVINGS"
      },
      "offers": [
        {
          "type": "percentage",
          "value": 40,
          "description": "40% off upto ₹80",
          "code": "MOMO40"
        }
      ],
      "menuItems": [
        {
          "id": "8001",
          "name": "Chicken Steam Momo",
          "category": "Momos",
          "price": 140,
          "image": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=200&fit=crop",
          "isVeg": false,
          "isSpicy": true,
          "description": "Steamed chicken momos with spicy sauce",
          "calories": 180
        },
        {
          "id": "8002",
          "name": "Veg Pan Fried Momo",
          "category": "Momos",
          "price": 120,
          "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop",
          "isVeg": true,
          "isSpicy": true,
          "description": "Pan fried vegetable momos",
          "calories": 160
        }
      ]
    },
    {
      "id": "109",
      "name": "Cafe Coffee Day",
      "slug": "ccd-brigade-road",
      "description": "A lot can happen over coffee",
      "image": "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=300&fit=crop",
      "logo": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=100&h=100&fit=crop",
      "rating": 3.9,
      "totalRatings": 680,
      "avgRating": "3.9",
      "cuisines": ["Cafe", "Beverages", "Italian", "Continental", "Desserts"],
      "tags": ["coffee", "casual dining", "wifi"],
      "costForTwo": 450,
      "costForTwoString": "₹450 FOR TWO",
      "deliveryTime": 25,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 30,
      "deliveryFee": 25,
      "slaString": "20-30 MINS",
      "lastMileTravel": 1.8,
      "area": "Brigade Road",
      "city": "Bangalore",
      "locality": "Central Bangalore",
      "address": "890, Brigade Road, Bangalore - 560001",
      "phone": "+91-9876543218",
      "isVeg": false,
      "isPureVeg": false,
      "isOpen": true,
      "hasOnlineOrdering": true,
      "aggregatedDiscountInfo": {
        "header": "20% OFF",
        "subHeader": "ON BEVERAGES",
        "discountTag": "COFFEE TIME"
      },
      "offers": [
        {
          "type": "percentage",
          "value": 20,
          "description": "20% off on all beverages",
          "code": "COFFEE20"
        }
      ],
      "menuItems": [
        {
          "id": "9001",
          "name": "Cappuccino",
          "category": "Beverages",
          "price": 120,
          "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop",
          "isVeg": true,
          "isSpicy": false,
          "description": "Rich espresso with steamed milk foam",
          "calories": 120
        },
        {
          "id": "9002",
          "name": "Chicken Caesar Salad",
          "category": "Salads",
          "price": 280,
          "image": "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop",
          "isVeg": false,
          "isSpicy": false,
          "description": "Grilled chicken with caesar dressing",
          "calories": 350
        }
      ]
    }
  ],
  "metadata": {
    "totalRestaurants": 6,
    "city": "Bangalore",
    "currency": "INR",
    "lastUpdated": "2025-08-30T12:00:00Z",
    "apiVersion": "v2.1"
  }
}

const Body = () => {
    return (
        <div className="body"> 
            <div className="search">Search</div>
            <div className="res-container">
                 { restList.restaurants.map((restaurants) => <RestroCard key={restaurants.id} resData={restaurants} />
                  ) 
}
                {/* <RestroCard restname="KFC" cuisine="Chicken, Burger, Fries"/>
                <RestroCard restname="Karim" cuisine="Biryani, Haleem, Mandi" /> */}
               
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className = "app">
            <Header />
            <Body />
        </div>
    )
}   


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)    