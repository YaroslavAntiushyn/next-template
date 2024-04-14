import { Column } from 'react-table';
import { useCallback, FC, Dispatch } from 'react';
import Table from '@/components/atoms/Table';
import { UserData } from '@/components/organisms/MainTable/mockData';

const columns: Column<UserData>[] = [
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    Header: 'Age',
    accessor: 'age'
  },
  {
    Header: 'City',
    accessor: 'city'
  }
];

const AdvancedTable: FC<{
  data: UserData[];
  setSelectedIds: Dispatch<React.SetStateAction<string[]>>;
}> = ({ setSelectedIds, data }) => {
  const handleSelectionChange = useCallback((selectedIds: string[]) => {
    setSelectedIds(selectedIds);
  }, []);

  return (
    <>
      <Table<UserData>
        columns={columns}
        data={data}
        showCheckboxes
        onSelectionChange={handleSelectionChange}
      />
    </>
  );
};

export default AdvancedTable;
