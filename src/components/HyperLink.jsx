
import HyperLink from "../components/HyperLink";
import { Link } from "react-router-dom"; 
export default function Home( {to, children}) {

    return (
        <Link to={ to }>
                <div className="text-lg p-4 bg-green-500 rounded-full my-2 w-fit hover:bg-green-700 text wihte font-semibold uppercase">
                    {children}
                </div>
            </Link>

    );
}
