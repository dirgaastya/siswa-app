import { useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import { Button, Typography } from '@material-tailwind/react';
import StudentTable from '../../components/StudentComponent/StudentTable';
import { StudentProvider } from '../../context/StudentContext';
import StudentForm from '../../components/StudentComponent/StudentForm';

function StudentPage() {
  const [open, setOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null); // to handle edit vs add
  const [editId, setEditId] = useState('');

  const handleOpen = () => {
    setSelectedStudent(null);
    setOpen(!open);
  };

  const handleEdit = (id, student) => {
    setEditId(id);
    console.log(student);
    setSelectedStudent(student);
    setOpen(true);
  };

  return (
    <MainLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <Typography variant="h1" color="blue-gray">
            Daftar Siswa
          </Typography>
          <Button onClick={handleOpen}>Tambah Siswa</Button>
        </div>
        <StudentProvider>
          <StudentTable handleEdit={handleEdit} />
          <StudentForm
            open={open}
            handle={handleOpen}
            id={editId}
            student={selectedStudent || {}}
          />
        </StudentProvider>
      </div>
    </MainLayout>
  );
}

export default StudentPage;
