const users = [
    { id: 1, username: 'rowValue1', password: 'pass1' },
    { id: 2, username: 'rowValue2', password: 'pass2'},
    { id: 3, username: 'rowValue3', password: 'pass3' },
    { id: 4, username: 'test-uid', password: 'pass4' },
  ];
  
  const markets = [
    {
        "id": 1,
        "market_name": "test market",
        "address": "7316 Rippin Corners",
        "city": "East Pascalemouth",
        "state": "OH",
        "zip_code": "63084",
        "phone_num": "066-673-3816",
        "market_info": "Accusamus sunt itaque. Aliquam ipsum necessitatibus quae aut ut velit rem. Et saepe voluptatum ea.",
        "market_map_file": {
            "type": "Buffer",
            "data": [
                104,
                116
             
            ]
        },
        "days_open": 1,
        "hours_of_operation": 1,
        "user_market": null,
    },
    {
    "id": 2,
    "market_name": "Hessel LLC",
    "address": "53563 Satterfield Track",
    "city": "Kayliestad",
    "state": "OR",
    "zip_code": "55892",
    "phone_num": "872-800-9173",
    "market_info": "Et consectetur necessitatibus sint minima. Quisquam nihil sit. Consectetur soluta repellendus magni cumque similique cum architecto numquam quia. Autem iure natus et ut consectetur repellendus.",
    "market_map_file": {
        "type": "Buffer",
        "data": [
            104,
            116,
         
        ]
    },
    "days_open": 1,
    "hours_of_operation": 1,
    "user_market": null
}
];
const stalls = [
    {
        "id": 1,
        "market_id": 2,
        "vendor_id": 1,
        "category_id": 3,
        "stall_size": 3,
        "availability": true,
        "comments": "Minus tempore asperiores aut autem rerum fugiat dolor vel quia. Quae qui qui. Officia totam quasi est ipsa explicabo non.",
        "stall_photo": {
            "type": "Buffer",
            "data": [
                104,
                101
            ]
        },
        "stall_price": "108.00",
        "rent_message": false
    },
    {
        "id": 2,
        "market_id": 3,
        "vendor_id": 5,
        "category_id": 2,
        "stall_size": 1,
        "availability": true,
        "comments": "Qui error omnis magnam mollitia qui deleniti. Vero maxime unde amet aspernatur. Ex quos natus. Commodi ut placeat voluptatum molestiae. Sunt impedit cum odio excepturi omnis eum eius aut minima. Omnis explicabo neque vitae distinctio facilis aspernatur quidem qui vel.",
        "stall_photo": {
            "type": "Buffer",
            "data": [
                104,
                116,
          
            ]
        },
        "stall_price": "59.00",
        "rent_message": false
    }
];
const vendors = [
{
    "id": 12,
    "vendor_name": "Welch Group",
    "bio": "Voluptas necessitatibus voluptatibus natus facilis rem est. Facere eum qui est laboriosam laudantium aliquid quas. Voluptatibus ullam doloremque modi aliquid. Et quisquam quae voluptas placeat repudiandae quos. Soluta laboriosam placeat molestias. Libero ut ratione veniam eum.",
    "phone_number": "861-508-5359",
    "market_id": 1,
    "products": null,
    "user_vendor": null
},
{
    "id": 13,
    "vendor_name": "Fay and Sons",
    "bio": "Rerum rerum sit iste nihil facere doloremque quaerat consequatur voluptatum. Nemo ut nemo dolor quo voluptatum doloremque voluptatibus mollitia ut. Aut impedit perspiciatis autem a. Aut cumque ut earum voluptatem et ipsum quam. Sunt voluptatem aut perferendis expedita aut debitis eos.",
    "phone_number": "596-430-8734",
    "market_id": 1,
    "products": null,
    "user_vendor": null
},
];
    
  
  module.exports = {
    
    users,
    markets,
    stalls,
    vendors

  };