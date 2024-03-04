const MenuLink = [
    {
        name: "Dashboard",
        icon: "fa-solid fa-gauge",
        route: "/",
    },
    {
        name: "Catalog",
        icon: "fa-solid fa-list-ul",
        subs: [
            {
                name: "Categories",
                icon: "fa-solid fa-angles-right",
                subs: [
                    {
                        name: "Group",
                        icon: "fa-solid fa-angle-right",
                        route: "/categories/categoriesGroup"
                    },
                    {
                        name: "Sub-Groups",
                        icon: "fa-solid fa-angle-right",
                        route: "/categories/categoriesSubGroups"
                    },
                    {
                        name: "Categories",
                        icon: "fa-solid fa-angle-right",
                        route: "/categories/categories"
                    }
                ]
            },
            {
                name: "Attributes",
                icon: "fa-solid fa-angles-right",
                route: "/catalog/attributes"
            },
            {
                name: "Product",
                icon: "fa-solid fa-angles-right",
                route: "/catalog/product"
            },
            {
                name: "Manufacturers",
                icon: "fa-solid fa-angles-right",
                route: "/catalog/manufacturers"
            },

        ]
    }
];

export default MenuLink;