import { Route } from 'react-router-dom';
import DashboardCategory from '../../pages/Dashboard/DashboardCategory';
import DashboardAddCategory from '../../pages/Dashboard/DashboardAddCategory';
import CategoryUpadate from './CategoryUpdate';
import CategoryIndex from './categoryIndex.page';

const CategoryRoutes = () => (
    <>
        <Route path="categories" element={<CategoryIndex />}>
            <Route index element={<DashboardCategory />} />
            <Route path="create-new-category" element={<DashboardAddCategory />} />
            <Route path="update" element={<CategoryUpadate />} />
        </Route>
    </>
);

export default CategoryRoutes;