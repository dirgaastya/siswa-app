import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
  Select,
  Option,
} from '@material-tailwind/react';
import propTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useStudents } from '../../context/StudentContext';

const StudentForm = ({ open, handle, id, student }) => {
  const [name, setName] = useState(student.name || '');
  const [birthDate, setBirthDate] = useState(student.birthDate || '');
  const [birthPlace, setBirthPlace] = useState(student.birthPlace || '');
  const [gender, setGender] = useState(student.gender || '');
  const [noWhatsapp, setNoWhatsapp] = useState(student.noWhatsapp || '');
  const [kelas, setKelas] = useState(student.kelas || '');
  const [nis, setNis] = useState(student.nis || '');
  const [hobby, setHobby] = useState(student.hobby || '');
  const [errors, setErrors] = useState({});
  const { addStudent, updateStudent } = useStudents();

  const validateForm = () => {
    let formErrors = {};

    if (!name) formErrors.name = 'Nama lengkap wajib diisi';
    if (!birthDate) formErrors.birthDate = 'Tanggal lahir wajib diisi';
    if (!birthPlace) formErrors.birthPlace = 'Tempat lahir wajib diisi';
    if (!gender) formErrors.gender = 'Jenis kelamin wajib dipilih';
    if (!noWhatsapp) {
      formErrors.noWhatsapp = 'No Whatsapp wajib diisi';
    } else if (!/^\d{10,15}$/.test(noWhatsapp)) {
      formErrors.noWhatsapp =
        'No Whatsapp harus berupa angka dengan panjang 10-15 digit';
    }
    if (!kelas) formErrors.kelas = 'Kelas wajib diisi';
    if (!nis) formErrors.nis = 'No Induk Siswa wajib diisi';

    return formErrors;
  };

  const handleConfirm = () => {
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const formData = {
      name,
      birthDate,
      birthPlace,
      gender,
      noWhatsapp,
      kelas,
      nis,
      hobby,
    };

    id.length === 0 ? addStudent(formData) : updateStudent(id, formData);

    setName('');
    setBirthDate('');
    setBirthPlace('');
    setGender('');
    setNoWhatsapp('');
    setKelas('');
    setNis('');
    setHobby('');
    handle();
  };

  useEffect(() => {
    setName(student.name);
    setBirthDate(student.birthDate);
    setBirthPlace(student.birthPlace);
    setGender(student.gender);
    setNoWhatsapp(student.noWhatsapp);
    setKelas(student.kelas);
    setNis(student.nis);
    setHobby(student.hobby);
    setErrors({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Dialog open={open} handler={handle}>
      <DialogHeader className="px-6">
        {id.length !== 0 ? 'Edit' : 'Tambah'} Data Siswa
      </DialogHeader>
      <DialogBody>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 px-6">
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Nama Lengkap
            </Typography>
            <Input
              type="text"
              size="md"
              label="Nama Lengkap"
              placeholder="Masukan Nama Lengkap"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={!!errors.name}
            />
            {errors.name && (
              <Typography color="red" variant="small">
                {errors.name}
              </Typography>
            )}
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Tempat Lahir
            </Typography>
            <Input
              label="Tempat Lahir"
              type="text"
              size="md"
              placeholder="Masukan Tempat Lahir"
              value={birthPlace}
              onChange={(e) => setBirthPlace(e.target.value)}
              error={!!errors.birthPlace}
            />
            {errors.birthPlace && (
              <Typography color="red" variant="small">
                {errors.birthPlace}
              </Typography>
            )}
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Tanggal Lahir
            </Typography>
            <Input
              label="Tanggal Lahir"
              type="date"
              size="md"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              error={!!errors.birthDate}
            />
            {errors.birthDate && (
              <Typography color="red" variant="small">
                {errors.birthDate}
              </Typography>
            )}
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Jenis Kelamin
            </Typography>
            <Select
              label="Pilih Jenis Kelamin"
              value={gender}
              onChange={(e) => setGender(e)}
              error={!!errors.gender}
            >
              <Option value="Laki - Laki">Laki - Laki</Option>
              <Option value="Perempuan">Perempuan</Option>
            </Select>
            {errors.gender && (
              <Typography color="red" variant="small">
                {errors.gender}
              </Typography>
            )}
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              No Whatsapp
            </Typography>
            <Input
              label="No Whatsapp"
              type="text"
              size="md"
              placeholder="Masukan No Whatsapp"
              value={noWhatsapp}
              onChange={(e) => setNoWhatsapp(e.target.value)}
              error={!!errors.noWhatsapp}
            />
            {errors.noWhatsapp && (
              <Typography color="red" variant="small">
                {errors.noWhatsapp}
              </Typography>
            )}
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Kelas
            </Typography>
            <Input
              label="Kelas"
              type="text"
              size="md"
              placeholder="Masukan Kelas"
              value={kelas}
              onChange={(e) => setKelas(e.target.value)}
              error={!!errors.kelas}
            />
            {errors.kelas && (
              <Typography color="red" variant="small">
                {errors.kelas}
              </Typography>
            )}
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              No Induk Siswa
            </Typography>
            <Input
              label="No Induk Siswa"
              type="text"
              size="md"
              placeholder="Masukan No Induk Siswa"
              value={nis}
              onChange={(e) => setNis(e.target.value)}
              error={!!errors.nis}
            />
            {errors.nis && (
              <Typography color="red" variant="small">
                {errors.nis}
              </Typography>
            )}
          </div>
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Hobi
            </Typography>
            <Input
              label="Hobi"
              type="text"
              size="md"
              placeholder="Masukan Hobi"
              value={hobby}
              onChange={(e) => setHobby(e.target.value)}
            />
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button variant="text" color="red" onClick={handle} className="mr-1">
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={handleConfirm}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

StudentForm.propTypes = {
  open: propTypes.bool.isRequired,
  handle: propTypes.func.isRequired,
  id: propTypes.string,
  student: propTypes.object,
};

export default StudentForm;
