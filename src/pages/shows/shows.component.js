import { Route, Routes } from "react-router-dom";

const Shows = () => { 
    return (
            <Routes>
                <Route index element={<h1>Shows</h1>}/>
                <Route path="popular" element={<h1>popular</h1>}/>
                <Route path="airing-today" element={<h1>airing today</h1>}/>
                <Route path="on-tv" element={<h1>on tv</h1>}/>
            </Routes>
    )
}

export default Shows;