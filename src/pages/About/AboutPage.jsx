import MainLayout from '../../layout/MainLayout';
import { Typography } from '@material-tailwind/react';

function AboutPage() {
  return (
    <MainLayout>
      <div className="p-4 md:p-8">
        <div className="container  px-4">
          <Typography variant="h1" color="blue-gray" className=" mb-8">
            Tentang Kami
          </Typography>
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="lg:w-3/4 text-justify">
              <Typography
                variant="h2"
                color="blue-gray"
                className="text-2xl font-semibold mb-4"
              >
                Selamat Datang di Sistem Manajemen Siswa Kami
              </Typography>
              <Typography
                variant="lead"
                color="blue-gray"
                className="text-base mb-6"
              >
                Kami adalah penyedia solusi lengkap untuk pengelolaan data
                siswa. Dengan sistem kami, sekolah Anda dapat dengan mudah
                mengelola informasi siswa, termasuk data pribadi, riwayat
                akademis, dan komunikasi dengan orang tua. Kami berkomitmen
                untuk memberikan pengalaman yang efisien dan ramah pengguna bagi
                administrasi sekolah.
              </Typography>
              <Typography
                variant="lead"
                color="blue-gray"
                className="text-base mb-6"
              >
                Sistem kami dirancang dengan antarmuka yang intuitif dan fitur
                yang lengkap untuk memudahkan pengelolaan data. Kami percaya
                bahwa teknologi yang tepat dapat membantu sekolah dalam
                meningkatkan efisiensi dan kualitas pendidikan.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default AboutPage;
