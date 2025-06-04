import { DashboardHeading } from '../../components/dashboard-heading';
import CategoryManage from '../../modules/category/CategoryManage';
function DashboardCategory() {
  return (
    <div>
      <DashboardHeading action={'category'}>Category</DashboardHeading>
      <CategoryManage></CategoryManage>
    </div>
  );
}

export default DashboardCategory;
