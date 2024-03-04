import '@fortawesome/fontawesome-free/css/all.css';
import { pageAdminRoute } from './router/router';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Routes>
                    {pageAdminRoute.map((route, index) => {
                        const Page = route.page;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={<Page />}
                            />
                        )
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}



export default App;


