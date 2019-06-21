const users = [
    {
        "id": 1,
        "username": Jayne.Gleichner,
        "password": Ge0FWznHo4ZseuZ
    },
    {
        "id": 2,
        "username": Nelle_Collins87,
        "password": g8QgqArR5zetdgn
    }
  ];
  
  const markets = [
        {
            "id": 1,
            "market_name": "Kemmer, Kihn and Rogahn",
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
                    116,
                    116,
                    112,
                    58,
                    47,
                    47,
                    108,
                    111,
                    114,
                    101,
                    109,
                    112,
                    105,
                    120,
                    101,
                    108,
                    46,
                    99,
                    111,
                    109,
                    47,
                    54,
                    52,
                    48,
                    47,
                    52,
                    56,
                    48,
                    47,
                    102,
                    97,
                    115,
                    104,
                    105,
                    111,
                    110
                ]
            },
            "days_open": 1,
            "hours_of_operation": 1,
            "user_market": null
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
                    116,
                    112,
                    58,
                    47,
                    47,
                    108,
                    111,
                    114,
                    101,
                    109,
                    112,
                    105,
                    120,
                    101,
                    108,
                    46,
                    99,
                    111,
                    109,
                    47,
                    54,
                    52,
                    48,
                    47,
                    52,
                    56,
                    48,
                    47,
                    102,
                    97,
                    115,
                    104,
                    105,
                    111,
                    110
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
                    116,
                    116,
                    112,
                    58,
                    47,
                    47,
                    108,
                    111,
                    114,
                    101,
                    109,
                    112,
                    105,
                    120,
                    101,
                    108,
                    46,
                    99,
                    111,
                    109,
                    47,
                    54,
                    52,
                    48,
                    47,
                    52,
                    56,
                    48,
                    47,
                    110,
                    105,
                    103,
                    104,
                    116,
                    108,
                    105,
                    102,
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
                    116,
                    112,
                    58,
                    47,
                    47,
                    108,
                    111,
                    114,
                    101,
                    109,
                    112,
                    105,
                    120,
                    101,
                    108,
                    46,
                    99,
                    111,
                    109,
                    47,
                    54,
                    52,
                    48,
                    47,
                    52,
                    56,
                    48,
                    47,
                    102,
                    97,
                    115,
                    104,
                    105,
                    111,
                    110
                ]
            },
            "stall_price": "59.00",
            "rent_message": false
        }
    ]
const vendors = [
        {
            "id": 1,
            "vendor_name": "Jacobson Group",
            "bio": "Ea exercitationem et aut illo quae doloribus. Eveniet consectetur quisquam possimus consequatur sed nulla. Eius provident distinctio. In assumenda est. Vel mollitia possimus. Sint ipsa perferendis quis mollitia quas tempora.",
            "phone_number": "036-565-6501",
            "market_id": 1,
            "products": null,
            "user_vendor": null
        },
        {
            "id": 2,
            "vendor_name": "Pfeffer Inc",
            "bio": "Voluptatum qui id. Blanditiis ipsum laboriosam qui. Quis consequatur accusamus fugiat. Quia beatae sint. Velit similique et. Eveniet possimus natus est ex sit et qui.",
            "phone_number": "864-013-0343",
            "market_id": 1,
            "products": null,
            "user_vendor": null
        }
];
    
  
  module.exports = {
    
    users,
    markets,
    stalls,
    vendors

  };