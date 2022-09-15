import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

import './navigation-bar.css';

export const NavigationBar: FC = () => {
    return (
        <div>
            <nav style={{ "backgroundColor": "purple", "padding": "8px" }} >
                <Link to='/'>Home</Link>
                {/* <a href="/">[Home (a tag)]</a> */}

                <Link to='/all-names'>All Names</Link>
                {/* <a href="/all-names">[All Names (a tag)]</a> */}
            </nav>

            <Outlet />
        </div>
        
    );
}