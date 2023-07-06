import { BookNowPage } from "../pages/BookNowPage";
import { CarsPage } from "../pages/CarsPage";
import { HomePage } from "../pages/HomePage";
import { TermsPage } from "../pages/TermsPage";

export const NavEl=[
    {
        path:"/home",
        page:<HomePage/>,
        pagename:"Home",
        id:1
    },
    {
        path:"/cars",
        page:<CarsPage/>,
        pagename:"Cars",
        id:2
    },
    {
        path:"/book",
        page:<BookNowPage/>,
        pagename:"Book now",
        id:3
    },
    {
        path:"/terms",
        page:<TermsPage/>,
        pagename:"Terms and Conditions",
        id:4
    },
    
]