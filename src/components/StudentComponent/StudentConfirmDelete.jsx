import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from '@material-tailwind/react';
import propTypes from 'prop-types';

const ConfirmDelete = ({ open, handleOpen, handleDelete, student }) => {
  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Konfirmasi Hapus</DialogHeader>
      <DialogBody>
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal leading-none opacity-70"
        >
          Apakah Anda yakin ingin menghapus siswa{' '}
          <strong>{student.name}</strong>?
        </Typography>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="red" onClick={handleDelete}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

ConfirmDelete.propTypes = {
  open: propTypes.bool.isRequired,
  handleOpen: propTypes.func.isRequired,
  handleDelete: propTypes.func.isRequired,
  student: propTypes.object.isRequired,
};

export default ConfirmDelete;
