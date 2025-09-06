import RestroCard from "./RestroCard"; 
import { useEffect } from "react";
import React, { useEffect } from "react";


const restList = {
  "restaurants": [
    {
      "id": "101",
      "name": "KFC",
      "slug": "kfc-btm-layout",
      "description": "Kentucky Fried Chicken - World famous fried chicken",
      "image": "https://b.zmtcdn.com/data/pictures/chains/3/18739893/03930951272152d62dfc165ae8b63d7c.jpg?fit=around|960:500&crop=960:500;*,*",
      "logo": "https://images.unsplash.com/photo-1606755962773-d324e9dea936?w=100&h=100&fit=crop",
      "rating": 4.2,
      "totalRatings": 1250,
      "avgRating": "4.2",
      "cuisines": ["American , Fast Food , Fried Chicken , Burgers"],
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
      "menuItems": []
    },
    {
      "id": "102", 
      "name": "Karim Hotel",
      "slug": "karim-old-delhi",
      "description": "Authentic Mughlai cuisine since 1913",
      "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/e2/38/a8/great-place.jpg?w=500&h=-1&s=1",
      "logo": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=100&h=100&fit=crop",
      "rating": 4.5,
      "totalRatings": 2890,
      "avgRating": "4.5",
      "cuisines": ["Mughlai , North Indian , Biryani , Kebabs"],
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
      "offers": [],
      "menuItems": []
    },
    {
      "id": "103",
      "name": "Pizza Hut", 
      "slug": "pizza-hut-koramangala",
      "description": "Delicious pizzas with the finest ingredients",
      "image": "https://mma.prnewswire.com/media/1583100/Pizza_Hut_Logo.jpg?p=facebook",
      "logo": "https://images.unsplash.com/photo-1571407982273-603948e4f5c5?w=100&h=100&fit=crop",
      "rating": 4.1,
      "totalRatings": 956,
      "avgRating": "4.1",
      "cuisines": ["Pizzas , Italian , Fast Food, Desserts"],
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
      "offers": [],
      "menuItems": []
    },
    {
      "id": "104",
      "name": "McDonald's",
      "slug": "mcdonalds-mg-road", 
      "description": "I'm Lovin' It - World's favorite burgers and fries",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/McDonald%27s_square_2020.svg/960px-McDonald%27s_square_2020.svg.png",
      "logo": "https://images.unsplash.com/photo-1606755962773-d324e9dea936?w=100&h=100&fit=crop",
      "rating": 4.0,
      "totalRatings": 1580,
      "avgRating": "4.0",
      "cuisines": ["American , Fast Food , Burgers, Beverages"],
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
      "offers": [],
      "menuItems": []
    },
    {
      "id": "105",
      "name": "Saravana Bhavan",
      "slug": "saravana-bhavan-jayanagar",
      "description": "Authentic South Indian vegetarian restaurant",
      "image": "https://t4.ftcdn.net/jpg/00/86/59/89/360_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg",
      "logo": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=100&h=100&fit=crop",
      "rating": 4.4,
      "totalRatings": 2100,
      "avgRating": "4.4",
      "cuisines": ["South Indian , Vegetarian , Tamil , Breakfast"],
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
      "offers": [],
      "menuItems": []
    },
    {
      "id": "106",
      "name": "Haldiram's",
      "slug": "haldirams-cp",
      "description": "Traditional Indian sweets, snacks and vegetarian food",
      "image": "https://images.seeklogo.com/logo-png/46/2/haldirams-logo-png_seeklogo-466659.png",
      "logo": "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=100&h=100&fit=crop",
      "rating": 4.3,
      "totalRatings": 1750,
      "avgRating": "4.3",
      "cuisines": ["North Indian , Sweets , Snacks , Desserts , Chat"],
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
      "offers": [],
      "menuItems": []
    },
    {
      "id": "107",
      "name": "Subway",
      "slug": "subway-indiranagar",
      "description": "Eat Fresh - Healthy sandwiches and salads",
      "image": "https://i.ytimg.com/vi/c5sa5IEAUA8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDkXEds7d7QljyKR_SfuC8nturpxw",
      "logo": "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=100&h=100&fit=crop",
      "rating": 4.0,
      "totalRatings": 820,
      "avgRating": "4.0",
      "cuisines": ["Healthy Food , Salads , Sandwiches , Fast Food"],
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
      "offers": [],
      "menuItems": []
    },
    {
      "id": "108",
      "name": "Wow! Momo",
      "slug": "wow-momo-sector-18",
      "description": "Delicious momos and Tibetan cuisine",
      "image": "https://vivianamalls.com/wp-content/uploads/2023/10/WOW-Momo-Viviana-Mall-Thane-Mumbai.png",
      "logo": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&h=100&fit=crop",
      "rating": 4.2,
      "totalRatings": 1340,
      "avgRating": "4.2",
      "cuisines": ["Momos , Chinese , Tibetan , Fast Food"],
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
      "offers": [],
      "menuItems": []
    },
    {
      "id": "109",
      "name": "Cafe Coffee Day",
      "slug": "ccd-brigade-road",
      "description": "A lot can happen over coffee",
      "image": "https://b.zmtcdn.com/data/pictures/chains/1/50211/d2aee145b6b9ec8cbf905d11f92ab314_featured_v2.jpg",
      "logo": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=100&h=100&fit=crop",
      "rating": 3.9,
      "totalRatings": 680,
      "avgRating": "3.9",
      "cuisines": ["Cafe , Beverages , Italian , Continental , Desserts"],
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
      "offers": [],
      "menuItems": []
    }
  ],
  "metadata": {
    "totalRestaurants": 9,
    "city": "Bangalore",
    "currency": "INR",
    "lastUpdated": "2025-08-30T12:00:00Z",
    "apiVersion": "v2.1"
  }
}

const Body = () => {
    return (
        <div className="body"> 
            <div className="filter flex ">
                <div className="search" >
                    <input type="text" className="border border-solid"></input>
                    <button className="px-5 border bg-orange-100 rounded-lg">Search</button>
                </div>
                 <button className="px-5 border bg bg-gray-100 rounded-lg  " onClick={() => {restList.restaurants.filter((resto) => restList.restaurants.avgRating > 4.5); 
            
            console.log(restList.restaurants); 
            }} 
            > Top rated Restraunts</button> 
            
            
            </div>
            
            <div className="flex flex-wrap">
                 { restList.restaurants.map((restaurants) => <RestroCard key={restaurants.id} resData={restaurants} />
                  ) 
}              
            </div>
        </div>
    )
}

export default Body;