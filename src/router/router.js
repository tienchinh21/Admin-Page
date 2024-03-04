import RouteConst from "../Shared/RouterConstant";
import dashboard from "../page/Dashboard";
import catalog from "../page/Catalog";
import categories from "../page/Categories";
import group from "../page/Group"
import manufacturers from "../page/Manufacturers";
import product from "../page/Product";
import subgroup from "../page/SubGroup";




const pageAdminRoute = [
    {
        path: RouteConst.dashboard,
        page: dashboard
    },
    {
        path: RouteConst.catalog,
        page: catalog
    },
    {
        path: RouteConst.categories,
        page: categories
    },
    {
        path: RouteConst.group,
        page: group
    },
    {
        path: RouteConst.manufacturers,
        page: manufacturers
    },
    {
        path: RouteConst.product,
        page: product
    },
    {
        path: RouteConst.sub_group,
        page: subgroup
    },

];



export { pageAdminRoute };

