import { DashboardHeading } from '../../components/dashboard-heading';
import CategoryAddForm from '../../modules/category/CategoryAddForm';

function DashboardAddCategory() {
  return (
    <div>
      <DashboardHeading>Add new Category</DashboardHeading>
      <CategoryAddForm></CategoryAddForm>
    </div>
  );
}

export default DashboardAddCategory;
