import React from 'react';
// import { useParams} from "react-router";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// const Customer = () => {
//     let { id } = useParams();
//     return (
//         <React.Fragment>        
//         <div>
//             Customer component
//             <p>Topic: {id}</p>
//         </div>
//         </React.Fragment>        
//     );
// };

const Navigation = () => {
    return (
        <React.Fragment>        
        <div className="Navigation">
            Hello Navigation!
            {/* <Router>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/customer/6">Customer</Link>
                    </li>
                </ul>
                { <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/customer/:id" component={Customer} />
                    <Route path="/contact" component={Contact} />
                </Switch> }
            </Router> */}
        </div>
        </React.Fragment>        
    );
}

export default Navigation;

