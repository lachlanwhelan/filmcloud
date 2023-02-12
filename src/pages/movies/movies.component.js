import { Route, Routes } from "react-router-dom";

const Movies = () => {
    return (
            <Routes>
                <Route index element={<h1>Movies</h1>}/>
                <Route path="popular" element={<h1>popular</h1>}/>
                <Route path="now-playing" element={<h1>now playing</h1>}/>
                <Route path="up-coming" element={<h1>up coming</h1>}/>
            </Routes>
    )
}

export default Movies;