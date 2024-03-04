import React from 'react';
import "./index.css"

const MenuItem = ({ item }) => {
    return (
        <li>
            <a href={item.route}>
                {item.name}
                {item.subs && (
                    <ul>
                        {item.subs.map((subItem, index) => (
                            <MenuItem key={index} item={subItem} />
                        ))}
                    </ul>
                )}
            </a>
        </li>
    );
};

const Menu = ({ menuItems }) => {
    return (
        <ul>
            {menuItems.map((item, index) => (
                <MenuItem key={index} item={item} />
            ))}
        </ul>
    );
};

export default Menu;