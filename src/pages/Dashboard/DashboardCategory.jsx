import { DashboardHeading } from '../../components/dashboard-heading';
import CategoryManage from '../../modules/category/CategoryManage';
function DashboardCategory() {
  return (
    <div>
      <DashboardHeading tableName={'categories'} action={'category'}>Category</DashboardHeading>
      <CategoryManage></CategoryManage>
      
    </div>
  );
}

export default DashboardCategory;
