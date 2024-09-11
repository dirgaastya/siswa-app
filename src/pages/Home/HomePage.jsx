import MainLayout from '../../layout/MainLayout';
import { Typography, Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <MainLayout>
      <header className="bg-white p-8">
        <div className="grid mt-16 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
          <div className="container mx-auto px-4 text-center">
            <Typography className="inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary">
              Kabar Terbaru! Perkenalkan sistem manajemen siswa terbaru kami
            </Typography>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug !text-2xl lg:max-w-3xl lg:!text-5xl"
            >
              Bersiaplah untuk mengelola{' '}
              <span className="text-green-500 leading-snug ">data siswa</span>{' '}
              dengan lebih{' '}
              <span className="leading-snug text-green-500">mudah</span> dan{' '}
              <span className="text-green-500 leading-snug">efisien</span>.
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
            >
              Kini, pengelolaan data siswa menjadi lebih cepat, aman, dan
              terstruktur. Saatnya memaksimalkan potensi sekolah Anda.
            </Typography>
            <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                <Button color="gray" className="w-full px-4 md:w-[12rem]">
                  <Link to="/students">Mulai Sekarang</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </MainLayout>
  );
}

export default HomePage;
