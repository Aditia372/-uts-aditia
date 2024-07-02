// ErrorPage.jsx
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full mx-4 md:mx-auto">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Oops! Ada yang salah nihh</h2>
        <p className="text-gray-800 text-lg mb-4">Were sorry, halaman yang kamu cari tidak ditemukan.</p>
        <p className="text-gray-800 text-lg">Periksa kembali URL dan coba lagi</p>
        <div className="mt-8 flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg transition duration-300"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
