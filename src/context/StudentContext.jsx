import { useContext, createContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
} from 'firebase/firestore';
import propTypes from 'prop-types';

const StudentsContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useStudents = () => {
  return useContext(StudentsContext);
};

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStudents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'students'));
      const studentsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudents(studentsData);
    } catch (error) {
      console.error('Error fetching students: ', error);
    } finally {
      setLoading(false);
    }
  };

  const addStudent = async (student) => {
    try {
      await addDoc(collection(db, 'students'), student);
    } catch (error) {
      console.error('Error adding student: ', error);
    }
    fetchStudents();
  };
  const updateStudent = async (id, student) => {
    const studentDocRef = doc(db, 'students', id);
    await updateDoc(studentDocRef, student);
    fetchStudents();
  };

  const deleteStudent = async (id) => {
    const studentDocRef = doc(db, 'students', id);
    await deleteDoc(studentDocRef);
    fetchStudents();
  };

  const value = {
    students,
    addStudent,
    updateStudent,
    deleteStudent,
    loading,
    fetchStudents,
  };

  useEffect(() => {
    fetchStudents();
  }, []);
  return (
    <StudentsContext.Provider value={value}>
      {children}
    </StudentsContext.Provider>
  );
};

StudentProvider.propTypes = {
  children: propTypes.node.isRequired,
};
