
const Contact = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-gray-800">Hubungi Kami</h2>

      <div className="mt-6">
        <p className="text-gray-600">
          Jika Anda memiliki pertanyaan, saran, atau ingin berkolaborasi dengan kami, jangan ragu untuk menghubungi kami.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Informasi Kontak</h3>
          <ul className="mt-4 list-disc">
            <li className="text-gray-600">Email: aditia@websitemovie.com</li>
            <li className="text-gray-600">Aditia Nurohman</li>
            <li className="text-gray-600">Telepon: +62 812-3456-7890</li>
            <li className="text-gray-600">Alamat: Jl. Dakota No. 8A sukaraja</li>
            <li className="text-gray-600">Pelatihan React</li>
            <li className="text-gray-600">Arya segara</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Formulir Kontak</h3>
          <form className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-700">Nama</label>
              <input type="text" id="name" name="name" className="w-full p-2 border rounded shadow-sm" />
            </div>

            <div className="mb-4">
              <label  className="block text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 border rounded shadow-sm" />
            </div>

            <div className="mb-4">
              <label  className="block text-gray-700">Pesan</label>
              <textarea id="message" name="message" className="w-full p-2 border rounded shadow-sm" rows="5"></textarea>
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Kirim</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
