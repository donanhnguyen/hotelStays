const seededHotels = [
    {
        name: "Seattle Paramount",
        city: "Seattle",
        picUrl: "https://hi-cdn.t-rp.co.uk/images/hotels/1411198/0?width=870&height=480&crop=false",
        rooms: [{
            name: "Small Room",
            price: 50,
            unvailableDates: [],
        },
        {
            name: "Medium Room",
            price: 70,
            unvailableDates: [],
        },
        {
            name: "Large Room",
            price: 100,
            unvailableDates: [],
        }],
    },
    {
        name: "Crowne Plaza Seattle",
        city: "Seattle",
        picUrl: "https://images.trvl-media.com/lodging/1000000/20000/18600/18518/8e156962.jpg?impolicy=resizecrop&rw=500&ra=fit",
        rooms: [
            {
              name: "Small Room",
              price: 50,
              unavailableDates: [],
            },
            {
              name: "Medium Room 1",
              price: 70,
              unavailableDates: [],
            },
            {
              name: "Medium Room 2",
              price: 75,
              unavailableDates: [],
            },
          ],
    },
    {
        name: "Pan Pacific Seattle",
        city: "Seattle",
        picUrl: "https://img1.10bestmedia.com/Images/Photos/336269/Denny-Suite_55_660x440.jpg",
        rooms: [
            {
              name: "Loft",
              price: 120,
              unavailableDates: [],
            },
          ],
    },
    {
        name: "Hotel Zaza Austin",
        city: "Austin",
        picUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/02/3b/b4/hotel-zaza-austin.jpg?w=1200&h=-1&s=1",
        rooms: [
            {
              name: "Small Room",
              price: 50,
              unavailableDates: [],
            },
            {
              name: "Medium Room",
              price: 70,
              unavailableDates: [],
            },
            {
              name: "Large Room",
              price: 85,
              unavailableDates: [],
            },
            {
              name: "Super Room",
              price: 120,
              unavailableDates: [],
            },
          ],
    },
    {
        name: "Hotel Marriott Austin",
        city: "Austin",
        picUrl: "https://media.bizj.us/view/img/11966692/pooltwilight-copysmall*1200xx2000-2000-500-0.jpg",
        rooms: [
            {
              name: "Small Room",
              price: 50,
              unavailableDates: [],
            },
            {
              name: "Medium Room",
              price: 70,
              unavailableDates: [],
            },
          ],
    },
    {
        name: "Hotel Irvine",
        city: "Irvine",
        picUrl: "https://www.fivestaralliance.com/files/fivestaralliance.com/field/image/nodes/2017/45870/0_exterior-G.jpg",
        rooms: [
            {
              name: "Suite",
              price: 220,
              unavailableDates: [],
            },
          ],
    },
    {
        name: "Marriott Irvine",
        city: "Irvine",
        picUrl: "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/139/416/49/snamc-exterior-9376-hor-clsc_O/Marriott-Irvine-Spectrum-Exterior.jpg?tr=w-780%2Ch-437%2Cfo-auto",
        rooms: [{
            name: "Small Room",
            price: 45,
            unvailableDates: [],
        },
        {
            name: "Medium Room",
            price: 65,
            unvailableDates: [],
        },]
    },
    {
        name: "Sutton Place",
        city: "Vancouver",
        picUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/65/96/bf/the-sutton-place-hotel.jpg?w=1200&h=-1&s=1",
        rooms: [
            {
                name: "Small Room",
                price: 50,
                unvailableDates: [],
            },
            {
                name: "Medium Room",
                price: 60,
                unvailableDates: [],
            },
            {
                name: "Loft",
                price: 150,
                unvailableDates: [],
            },
            {
                name: "Penthouse",
                price: 200,
                unvailableDates: [],
            },
        ]
    },
    {
        name: "Hotel Vancouver",
        city: "Vancouver",
        picUrl: "https://dynl.mktgcdn.com/p/-jPP_eS2mNqEdBn_6RcWQW5OGGcY54FXH1CbhCiNhD0/1024x768.jpg",
        rooms: [
            {
                name: "Entire condo",
                price: 230,
                unvailableDates: [],
            },
        ]
    },
    {
        name: "Luxury Beach Hotel Miami",
        city: "Miami",
        picUrl: "https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2021/11/08/50ddd28aa56740c89a4b4b09ad5acaa1_Hero_1Hotel.jpg",
        rooms: [
            {
                name: "Small Room",
                price: 50,
                unvailableDates: [],
            },
            {
                name: "Medium Room",
                price: 60,
                unvailableDates: [],
            },
            {
                name: "Loft",
                price: 150,
                unvailableDates: [],
            },
            {
                name: "Penthouse",
                price: 200,
                unvailableDates: [],
            },
        ]
    },
    {
        name: "Omni Dallas",
        city: "Dallas",
        picUrl: "https://www.omnihotels.com/-/media/images/hotels/daldtn/pool/daldtn-omni-dallas-pool-dusk.jpg?w=11700",
        rooms: [
            {
                name: "Small Room",
                price: 70,
                unvailableDates: [],
            },
            {
                name: "Medium Room",
                price: 90,
                unvailableDates: [],
            },
            {
                name: "Queen's Room",
                price: 120,
                unvailableDates: [],
            },
            {
                name: "King's Room",
                price: 200,
                unvailableDates: [],
            },
        ],
    },
    {
        name: "Venetian Vegas",
        city: "Las Vegas",
        picUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/283163011.jpg?k=e9cebad3117f66b1fd1c000d709fa000af255b178dcb0e25fe510fe2c546da02&o=&hp=1",
        rooms: [
            {
                name: "Small Room",
                price: 75,
                unvailableDates: [],
            },
            {
                name: "Medium Room",
                price: 90,
                unvailableDates: [],
            },
        ],
    },
    {
        name: "Bellagio",
        city: "Las Vegas",
        picUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/8a/e0/b9/bellagio-las-vegas.jpg?w=1200&h=-1&s=1",
        rooms: [
            {
                name: "Basic Room",
                price: 100,
                unvailableDates: [],
            },
            {
                name: "Suite",
                price: 150,
                unvailableDates: [],
            },
            {
                name: "Palace Room",
                price: 200,
                unvailableDates: [],
            },
        ],
    },
    {
        name: "New Yorker",
        city: "New York",
        picUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/83778539.jpg?k=6c3a6f5219ea4d2f89eca9a39bd501dbb4115146a45e200b5d927ceee0bd5e5d&o=&hp=1",
        rooms: [
            {
                name: "Small Room",
                price: 30,
                unvailableDates: [],
            },
            {
                name: "Queen Size Room",
                price: 40,
                unvailableDates: [],
            },
            {
                name: "King Size Room",
                price: 50,
                unvailableDates: [],
            },
        ],
    },
    {
        name: "The Peninsula",
        city: "New York",
        picUrl: "https://www.peninsula.com/en/-/media/images/new-york/compressed/photos/pny_exterior_bellman.jpg?mw=905&hash=1C08838698D0B4562BAD3BA141B807DB",
        rooms: [
            {
                name: "Room 1",
                price: 30,
                unvailableDates: [],
            },
            {
                name: "Room 2",
                price: 35,
                unvailableDates: [],
            },
            {
                name: "Room 3",
                price: 40,
                unvailableDates: [],
            },
        ],
    },
    {
        name: "Boston Park Plaza",
        city: "Boston",
        picUrl: "https://www.bostonparkplaza.com/wp-content/uploads/2020/12/BPP_Hotel_Press-2_0.jpg",
        rooms: [
            {
                name: "Basic Room",
                price: 100,
                unavailableDates: [],
            },
            {
                name: "Advanced Room",
                price: 125,
                unavailableDates: [],
            },
            {
                name: "Supreme Loft",
                price: 250,
                unavailableDates: [],
            }
        ]
        
    },
    {
        name: "Yotel Boston",
        city: "Boston",
        picUrl: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/308960206.jpg?k=8c7bdf24c7aca125d3a2cc210ab467b6c6ef700ddd11e4608d3f13b38882ffd1&o=&hp=1",
        rooms: [
            {
                name: "Party Room",
                price: 350,
                unavailableDates: [],
            }
        ]
    },
    {
        name: "Hotel Ivy",
        city: "Minneapolis",
        picUrl: "https://media.cntraveler.com/photos/53db0462dcd5888e145dd731/16:9/w_2560%2Cc_limit/hotel-ivy-minneapolis-minnesota-104165-1.jpg",
        rooms: [
            {
                name: "Entire Villa",
                price: 500,
                unavailableDates: [],
            }
        ]
    },
    {
        name: "Hewing Hotel",
        city: "Minneapolis",
        picUrl: "https://media.cntraveler.com/photos/61eae725c101d1d3fd6ac206/16:9/w_2560,c_limit/Pool-HewingHotel-MinneapolisMN-CRHotel.jpg",
        rooms: [
            {
                name: "Small Room",
                price: 25,
                unavailableDates: [],
            },
            {
                name: "Medium Room",
                price: 30,
                unavailableDates: [],
            },
            {
                name: "Large Room",
                price: 35,
                unavailableDates: [],
            }
        ]
    },
    {
        name: "Hotel Nelligan",
        city: "Montreal",
        picUrl: "https://media.cntraveler.com/photos/53da88f96dec627b149f0e67/16:9/w_2560,c_limit/hotel-nelligan-montreal-montreal-quebec-101658-1.jpg",
        rooms: [
            {
                name: "Entire Studio",
                price: 190,
                unavailableDates: [],
            }
        ]
    }

]

export {seededHotels}