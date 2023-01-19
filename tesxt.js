
    // Hotel Home Page
    import { useNavigate } from "react-router-dom";
    const onClickFn = async (data) => {        
    let res = await data
    const queryString = new URLSearchParams(res).toString();
    Navigate(`/hotellist/query?${queryString}`)
    }

    // Hotel Listing Page
    import { useLocation } from 'react-router-dom';
    const queryParams = new URLSearchParams(useLocation().search);
    const location = queryParams.get('location') || "";
    const checkin = queryParams.get('checkin') || "";
    const checkout = queryParams.get('checkout') || "";
    const adult = queryParams.get('adult') || "";
    const children = queryParams.get('children') || "";
    console.log({ location, checkin, checkout, adult, children})

    console.log({ location, checkin, checkout, adult, children })
    // will log == 
    //  {
    //     adult: "2",
    //     checkin: "Tue Jan 24 2023 00:00:00 GMT+0530 (India Standard Time)",
    //     checkout: "Sat Jan 28 2023 00:00:00 GMT+0530 (India Standard Time)",
    //     children: "3"
    //     location: "delhi"
    // }