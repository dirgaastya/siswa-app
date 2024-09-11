import { Card, Typography, IconButton } from '@material-tailwind/react';
import { useStudents } from '../../context/StudentContext';
import propTypes from 'prop-types';
import { useState } from 'react';
import ConfirmDelete from './StudentConfirmDelete';

const TABLE_HEAD = [
  'Nomor Induk Siswa',
  'Nama',
  'Kelas',
  'No Whatsapp',
  'Jenis Kelamin',
  'Tempat Lahir',
  'Tanggal Lahir',
  'Hobi',
  'Aksi',
];

const StudentTable = ({ handleEdit }) => {
  const { students, loading, deleteStudent } = useStudents();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  if (loading) {
    return <p>Loading students...</p>;
  }

  const handleDeleteModal = (student = null) => {
    setSelectedStudent(student);
    setOpenDeleteModal(!openDeleteModal);
  };

  const handleDelete = () => {
    if (selectedStudent) {
      deleteStudent(selectedStudent.id);
    }
    handleDeleteModal();
  };

  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {student.nis}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {student.name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {student.kelas}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {student.noWhatsapp}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {student.gender}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {student.birthPlace}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {student.birthDate}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {student.hobby}
                </Typography>
              </td>
              <td className="p-4 space-x-3">
                <IconButton
                  size="sm"
                  color="yellow"
                  onClick={() => handleEdit(student.id, student)}
                >
                  <i className="fas fa-edit" />
                </IconButton>
                <IconButton
                  size="sm"
                  color="red"
                  onClick={() => handleDeleteModal(student)}
                >
                  <i className="fas fa-trash" />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Delete Confirmation Modal */}
      {selectedStudent && (
        <ConfirmDelete
          open={openDeleteModal}
          handleOpen={handleDeleteModal}
          handleDelete={handleDelete}
          student={selectedStudent}
        />
      )}

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </Card>
  );
};

StudentTable.propTypes = {
  handleEdit: propTypes.func.isRequired,
};

export default StudentTable;
