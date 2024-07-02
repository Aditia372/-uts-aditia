
const About = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-gray-800">Tentang Website Movie</h2>

      <div className="mt-6">
        <p className="text-gray-600">
          Website Movie adalah platform online yang memungkinkan Anda untuk mencari, menonton, dan mendiskusikan film favorit Anda. 
          Kami memiliki koleksi film yang luas dari berbagai genre, termasuk film Hollywood, film indie, dan film internasional. 
          Anda juga dapat membuat daftar film Anda sendiri, memberi rating film, dan menulis ulasan.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Fitur Utama</h3>
          <ul className="mt-4 list-disc">
            <li className="text-gray-600">Cari film berdasarkan judul, genre, aktor, dan sutradara</li>
            <li className="text-gray-600">Tonton trailer film dan baca sinopsis</li>
            <li className="text-gray-600">Beri rating film dan tulis ulasan</li>
            <li className="text-gray-600">Buat daftar film Anda sendiri</li>
            <li className="text-gray-600">Diskusikan film dengan pengguna lain</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Tim Kami</h3>
          <p className="mt-4 text-gray-600">
            Website Movie dibuat oleh tim yang bersemangat tentang film. 
            Kami ingin memberikan pengalaman menonton film yang terbaik bagi pengguna kami. 
            Kami selalu berusaha untuk meningkatkan website kami dan menambahkan fitur baru.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
