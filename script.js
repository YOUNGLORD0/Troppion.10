// ===== Reveal on scroll =====
(function(){
  const cards=[...document.querySelectorAll('.reveal')];
  const io=new IntersectionObserver((es)=>{es.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('revealed'); io.unobserve(e.target); }
  })},{threshold:.18});
  cards.forEach(c=>io.observe(c));
})();

/* ====== AUTO set gambar kartu dari data-* ======
   Opsi 1 (paling fleksibel): data-file="folder/nama.ext"
            -> src = assets/images/{data-file}
   Opsi 2: data-img="nama" [+ optional data-folder, data-ext]
            -> src = assets/images/{folderDariSection atau data-folder}/{nama}.{ext(default:jpg)}
   Jika gagal, fallback SVG akan tampil.
================================================== */
(function(){
  const FALLBACK =
    'data:image/svg+xml;charset=UTF-8,' +
    encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="#e9f0ff"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#748bb3" font-family="Arial" font-size="20">Gambar belum tersedia</text></svg>');

  const IMG_BASE = 'assets/images';
  const FOLDER_BY_SECTION = {
    'sepak-bola': 'sepak bola',
    'futsal': 'futsal',
    'basket': 'basket',
    'e-sport': 'e-sport',
    'golf': 'golf'
  };
  

  document.querySelectorAll('img[data-file], img[data-img]').forEach(imgEl=>{
    let src = '';

    if(imgEl.hasAttribute('data-file')){
      // data-file sudah termasuk folder + nama + ekstensi (mendukung webp/jpg/png)
      src = `${IMG_BASE}/${imgEl.getAttribute('data-file')}`;
    }else{
      // Bangun dari data-img
      const key = imgEl.getAttribute('data-img');              // contoh: "sepakbola1"
      const ext = (imgEl.getAttribute('data-ext') || 'jpg').toLowerCase();
      let folder = imgEl.getAttribute('data-folder');
      if(!folder){
        const section = imgEl.closest('section[id]');
        const secId = section ? section.id : '';
        folder = FOLDER_BY_SECTION[secId] || '';
      }
      const parts = [IMG_BASE];
      if(folder) parts.push(folder);
      parts.push(`${key}.${ext}`);
      src = parts.join('/');
    }

    // Preload agar fallback mulus
    const probe = new Image();
    probe.onload = ()=> { imgEl.src = src; };
    probe.onerror = ()=> { imgEl.src = FALLBACK; };
    probe.src = src;
  });
})();

/* ===== Data deskripsi (lengkap) ===== */
const DETAILS = {
  // --- Sepak Bola ---
  "PSB 010": { 
  title: "Piala Sepak Bola Juara RSST Futsal Tournament 2024 Klaten", 
  desc: `
    <p>Turnamen Futsal RSST 2024 di Klaten merupakan salah satu kompetisi yang paling dinantikan oleh pecinta olahraga di wilayah tersebut. Acara ini berhasil mengumpulkan tim-tim futsal terbaik dari berbagai sekolah, komunitas, dan klub lokal untuk bersaing secara sportif merebutkan gelar juara. Selain menjadi ajang pembuktian kemampuan, turnamen ini juga menghadirkan suasana meriah yang memperkuat tali persaudaraan antar pemain, pelatih, dan supporter. Dengan atmosfer yang penuh semangat, turnamen ini sekaligus menjadi sarana untuk meningkatkan gairah olahraga di masyarakat Klaten serta memotivasi generasi muda untuk terus berprestasi.</p>
    
    <p><a href="https://troppion.com/piala-event/piala-olahraga/piala-sepak-bola/" target="_blank" rel="noopener" class="highlight-link">Piala Sepak Bola</a> Juara RSST Futsal Tournament 2024 Klaten, yang dibuat khusus oleh Troppion, bukan hanya sekadar hadiah, tetapi juga simbol prestasi tertinggi bagi tim pemenang. Dengan desain yang elegan, detail yang presisi, serta bahan resin berkualitas tinggi, piala ini merepresentasikan dedikasi, kerja keras, dan kebanggaan atas kemenangan yang berhasil diraih. Setiap lekuk dan sentuhan desainnya mencerminkan kejayaan sekaligus menjadi kenangan abadi yang akan selalu mengingatkan para pemain pada momen gemilang mereka di lapangan futsal.</p>
    
    <p>Apakah Anda sedang mencari <a href="https://troppion.com/piala-event/piala-olahraga/piala-sepak-bola/" target="_blank" rel="noopener" class="highlight-link">piala sepak bola</a> atau futsal custom yang unik dan penuh makna untuk turnamen Anda? Troppion hadir dengan solusi terbaik untuk memenuhi kebutuhan tersebut. Kami menawarkan beragam pilihan piala berbahan resin dengan desain yang dapat disesuaikan sesuai karakter acara, memastikan penghargaan yang Anda berikan tidak hanya berkesan tetapi juga bermakna bagi penerimanya. Dengan pengalaman dan keahlian dalam memproduksi piala, Troppion selalu mengutamakan detail, kualitas, dan estetika. Percayakan setiap momen kemenangan Anda bersama Troppion, di mana setiap piala dibuat dengan kecintaan dan dedikasi tinggi untuk menghadirkan penghargaan yang benar-benar istimewa.</p>
  `
},
"PSB 001": { 
  title: "Piala Best Keeper – Liga Soeratin 92+", 
  desc: `
    <p>Dalam perhelatan bergengsi Liga Soeratin 92+, penghargaan Best Keeper menjadi salah satu kategori yang paling prestisius dan ditunggu-tunggu. Penghargaan ini diberikan sebagai bentuk apresiasi terhadap peran penting seorang penjaga gawang yang mampu menjadi tembok pertahanan terakhir bagi timnya. Troppion.com menghadirkan piala custom yang dibuat khusus untuk momen istimewa ini, guna menghormati kiper terbaik yang telah menunjukkan konsistensi, refleks cepat, dan keberanian luar biasa sepanjang turnamen. Desain <a href="https://troppion.com/piala/piala-resin/" target="_blank" rel="noopener" class="highlight-link">Piala Resin</a> yang elegan, dikombinasikan dengan detail ukiran yang menawan, menjadi simbol kebanggaan serta bukti nyata atas dedikasi dan prestasi luar biasa dari sang penerima.</p>
    
    <p><a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> Best Keeper – Liga Soeratin 92+ dirancang dengan penuh perhatian pada kualitas dan nilai estetikanya. Menggunakan bahan resin premium, piala ini tidak hanya menjamin ketahanan jangka panjang, tetapi juga menghadirkan tampilan yang megah dan menawan. Setiap proses produksi dilakukan dengan ketelitian tinggi, memastikan detail halus pada desain mampu mencerminkan keagungan serta kehormatan yang melekat pada penghargaan ini. Bagi para kiper berprestasi, piala ini tidak hanya sekadar hadiah, tetapi juga kenang-kenangan berharga yang akan selalu mengingatkan mereka pada kerja keras, pengorbanan, dan momen kemenangan yang telah diraih.</p>
    
    <p>Bagi klub, sekolah sepak bola, atau penyelenggara liga yang ingin memberikan penghargaan istimewa kepada kiper terbaik dengan piala custom berbahan resin berkualitas tinggi, <a href="https://troppion.com/" target="_blank" rel="noopener" class="highlight-link">Troppion</a> adalah mitra terpercaya untuk mewujudkannya. Kami menawarkan layanan personalisasi sesuai kebutuhan, mulai dari desain hingga ukiran nama penerima, sehingga setiap piala benar-benar unik dan memiliki nilai emosional. Dengan komitmen pada kualitas dan pelayanan, Troppion siap membantu Anda menciptakan momen penghargaan yang tak terlupakan. Segera pesan sekarang, dan abadikan prestasi para pahlawan gawang dengan piala yang menjadi simbol kebanggaan serta pencapaian yang luar biasa!</p>
  `
},
"PSB 013": { 
  title: "Piala Sepak Bola Gema Cup 2024 Ambon", 
  desc: `
    <p>Sepak bola adalah olahraga yang tidak hanya populer di tingkat lokal, tetapi juga menjadi permainan yang dicintai di seluruh dunia. Setiap pertandingan menghadirkan semangat sportivitas, kerja sama tim, dan tekad untuk meraih kemenangan. Hal inilah yang menjadi alasan utama banyaknya turnamen sepak bola digelar di berbagai daerah, termasuk Gema Cup 2024 yang berlangsung di Ambon. Turnamen ini mempertemukan tim-tim terbaik yang bersaing memperebutkan <a href="https://troppion.com/piala-event/piala-olahraga/piala-sepak-bola/" target="_blank" rel="noopener" class="highlight-link">Piala sepak bola</a> bergengsi, simbol kebanggaan dan prestasi yang sangat dinantikan. Piala Gema Cup 2024 didesain dengan detail khusus sehingga menjadi hadiah kemenangan yang tidak hanya kreatif, tetapi juga sarat makna bagi tim juara.</p>
    
    <p>Dalam proses perancangan sebuah <a href="https://troppion.com/piala-event/piala-olahraga/" target="_blank" rel="noopener" class="highlight-link">Piala olahraga</a>, hal yang paling utama adalah memastikan desainnya selaras dengan cabang olahraga yang dipertandingkan agar terasa relevan. Piala untuk turnamen sepak bola tentu memiliki karakteristik yang khas, baik dari segi bentuk maupun ornamen yang melekat. Selain itu, Troppion juga selalu berinovasi dengan menjadikan karya-karya sebelumnya sebagai referensi, lalu memodifikasinya agar tampil lebih modern, elegan, dan berbeda. Dengan begitu, setiap piala yang dihasilkan bukan hanya sebuah trofi, tetapi juga karya seni yang mewakili semangat kompetisi dan penghargaan bagi para atlet.</p>
    
    <p>Bagi Anda yang sedang merencanakan turnamen atau kompetisi olahraga, kini saatnya mewujudkan kebutuhan piala custom yang unik dan berkesan. Bersama Troppion, Anda bisa mengonsultasikan setiap detail piala sesuai dengan keinginan, mulai dari bahan resin berkualitas tinggi hingga desain yang dipersonalisasi. Tim kami siap membantu Anda menciptakan penghargaan yang tidak hanya bernilai estetika, tetapi juga mampu memperkuat makna kemenangan. Percayakan setiap momen prestasi pada Troppion, dan abadikan kejayaan para juara dengan piala yang akan selalu dikenang.</p>
  `
},
"PSB 004": { 
  title: "Piala Juara 1 Sepak Bola Liga Pelajar – Piala Bupati", 
  desc: `
    <p>Sepak Bola Liga Pelajar – Piala Bupati merupakan ajang kompetisi yang sangat dinantikan oleh para pelajar setiap tahunnya. Turnamen ini mempertemukan tim-tim sekolah dari berbagai daerah yang bersaing secara sportif untuk meraih gelar juara bergengsi. Lebih dari sekadar pertandingan, liga ini menjadi wadah untuk menampilkan bakat, kemampuan teknis, dan semangat juang luar biasa dari para pelajar. Selain itu, kompetisi ini juga mengajarkan nilai-nilai penting seperti kerja sama tim, disiplin, tanggung jawab, dan sportivitas yang menjadi bekal berharga dalam kehidupan sehari-hari. Dengan adanya Piala Bupati, diharapkan para generasi muda semakin termotivasi untuk mengembangkan potensinya, baik dalam bidang olahraga maupun prestasi akademik, sehingga mampu berkontribusi lebih luas bagi masa depan bangsa.</p>
    
    <p>Piala Juara 1 Sepak Bola Liga Pelajar – Piala Bupati dirancang secara eksklusif untuk memberikan penghargaan yang pantas bagi tim terbaik yang berhasil keluar sebagai juara. Dibuat dari resin berkualitas tinggi, piala ini memiliki desain elegan dengan detail halus yang mencerminkan keunggulan, ketangguhan, dan semangat juang para peserta. Trofi ini bukan hanya sebuah simbol kemenangan, tetapi juga menjadi motivasi dan inspirasi bagi seluruh peserta untuk terus berkembang dan berkompetisi. <a href="https://troppion.com/piala-event/piala-olahraga/piala-sepak-bola/" target="_blank" rel="noopener" class="highlight-link">Piala Sepak Bola</a> ini menjadi bukti nyata pencapaian luar biasa sekaligus kenang-kenangan berharga yang akan selalu diingat oleh para juara dan pendukungnya.</p>
    
    <p>Apabila Anda membutuhkan <a href="https://troppion.com/piala-event/piala-olahraga/" target="_blank" rel="noopener" class="highlight-link">Piala Olahraga</a> custom berbahan resin dengan kualitas terbaik, TROPPION siap menjadi mitra terpercaya Anda. Kami menawarkan layanan pembuatan piala dan souvenir custom dengan desain yang dapat disesuaikan sesuai karakter acara atau kebutuhan kompetisi. Dengan pengalaman panjang dalam industri ini, TROPPION berkomitmen menghadirkan produk yang tidak hanya indah dipandang, tetapi juga mampu merepresentasikan makna kemenangan dan prestasi. Percayakan kebutuhan Anda kepada kami, dan biarkan TROPPION membantu mewujudkan penghargaan yang sempurna untuk setiap turnamen, kompetisi, maupun pencapaian istimewa Anda.</p>
  `
},

"PSB 014": { 
  title: "Piala Sepak Bola GM Football Championship HUT RI 79th PT KPI RU IV Cilacap", 
  desc: `
    <p>PT Kilang Pertamina Internasional (PT KPI) RU IV Cilacap turut memeriahkan perayaan Hari Ulang Tahun Kemerdekaan Republik Indonesia ke-79 dengan menggelar turnamen sepak bola bertajuk GM Football Championship. Acara ini menjadi bagian dari rangkaian perayaan yang penuh semangat kebersamaan, sportivitas, dan kecintaan terhadap tanah air. Melalui turnamen ini, PT KPI tidak hanya menghadirkan hiburan bagi karyawan dan masyarakat sekitar, tetapi juga menumbuhkan semangat nasionalisme, persaudaraan, serta memperkuat solidaritas antar tim. Dengan atmosfer kompetisi yang penuh energi, GM Football Championship berhasil menjadi wadah untuk menyalurkan bakat sekaligus mempererat tali persaudaraan melalui olahraga sepak bola.</p>
    
    <p>Piala GM Football Championship diperebutkan sebagai hadiah bergengsi sekaligus simbol dari perjuangan, kerja sama tim, dan kemenangan yang diraih di lapangan. <a href="https://troppion.com/piala-event/piala-olahraga/piala-sepak-bola/" target="_blank" rel="noopener" class="highlight-link">Piala Sepak Bola</a> ini dirancang secara khusus dengan memperhatikan detail dan makna mendalam, sehingga tidak hanya sekadar menjadi trofi, tetapi juga representasi dari nilai kebersamaan dan semangat juang. Setiap elemen dalam desainnya mencerminkan kebanggaan serta penghormatan bagi tim terbaik yang berhasil meraih prestasi dalam turnamen penuh gengsi ini.</p>
    
    <p>Tidak hanya dirancang dengan desain spesial, <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> GM Football Championship ini dibuat menggunakan bahan logam premium yang memberikan kualitas terbaik dan daya tahan tinggi. Dipadukan dengan dudukan resin berwarna hitam elegan, tampilannya semakin mewah dan kokoh. Kehadirannya semakin representatif berkat tambahan pita merah putih yang merumbai, simbol kecintaan terhadap Indonesia dan semangat kemerdekaan. Bagi Anda yang ingin memesan piala logam dengan desain serupa, Troppion siap membantu mewujudkannya. Dengan pengalaman dan dedikasi dalam memproduksi piala custom, Troppion menjamin setiap karya bukan hanya indah dipandang, tetapi juga memiliki nilai makna yang mendalam. Percayakan kebutuhan piala Anda kepada Troppion, dan abadikan momen kemenangan dengan trofi yang istimewa.</p>
  `
},

  // --- Futsal ---
"PSB 003": { 
  title: "Piala Bergilir Turnamen Futsal Friend’s Bakery", 
  desc: `
    <p>Turnamen Futsal Friend’s Bakery merupakan sebuah ajang olahraga yang digelar dengan tujuan mempererat tali persaudaraan sekaligus menumbuhkan semangat sportivitas di antara para pemain. Event ini berhasil menarik partisipasi tim futsal dari berbagai kalangan, mulai dari komunitas, instansi, hingga tim independen, sehingga menciptakan atmosfer kompetisi yang seru, menegangkan, dan penuh antusiasme. Lebih dari sekadar pertandingan, turnamen ini juga menjadi sarana silaturahmi antar peserta, memperkuat hubungan sosial, serta memberikan hiburan yang sehat bagi masyarakat sekitar.</p>
    
    <p><a href="https://troppion.com/piala-event/piala-bergilir/" target="_blank" rel="noopener" class="highlight-link">Piala Bergilir</a> Turnamen Futsal Friend’s Bakery dirancang khusus sebagai simbol prestasi tertinggi yang hanya bisa diraih oleh tim terbaik. Dibuat dari bahan logam premium, piala ini tidak hanya menampilkan desain elegan, tetapi juga menghadirkan nilai simbolik yang kuat sebagai representasi semangat kompetisi, kerja keras, dan kebersamaan. Dengan detail yang presisi dan tampilan yang mewah, piala ini menjadi kebanggaan tersendiri bagi tim juara dan sekaligus motivasi bagi tim lain untuk berjuang lebih keras di edisi berikutnya. Setiap kali piala ini berpindah tangan, ia membawa cerita baru tentang perjuangan, strategi, dan kemenangan yang patut dikenang.</p>
    
    <p>Apakah Anda juga ingin memiliki <a href="https://troppion.com/piala-event/piala-bergilir/" target="_blank" rel="noopener" class="highlight-link">Piala Bergilir</a> custom berbahan logam dengan kualitas unggul dan desain yang berkesan? TROPPION hadir untuk mewujudkan kebutuhan tersebut. Dengan pengalaman panjang dalam merancang dan memproduksi piala serta souvenir custom, kami selalu mengutamakan kualitas, detail, dan kepuasan pelanggan. Anda bisa menyesuaikan desain sesuai identitas turnamen, mulai dari ukiran logo, nama event, hingga sentuhan ornamen khusus agar piala benar-benar eksklusif. Percayakan kebutuhan piala Anda pada TROPPION, dan kami akan membantu menciptakan penghargaan sempurna yang mampu merefleksikan prestasi serta menjadi kenangan abadi dalam setiap kompetisi.</p>
  `
},
"PBE 028": { 
  title: "Piala Bergilir Tournament Futsal Bailey Cup PT Bailey Rekatama Bekasi", 
  desc: `
    <p>Setiap pertandingan futsal tidak hanya sekadar tentang meraih kemenangan, melainkan juga tentang bagaimana sebuah tim mampu menunjukkan semangat juang, strategi yang matang, serta kerja sama yang solid di lapangan. Untuk memberikan apresiasi yang pantas kepada para juara, diperlukan sebuah <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> bergengsi yang tidak hanya menjadi trofi penghargaan, tetapi juga simbol kebanggaan yang diwariskan dari generasi ke generasi. Kehadiran piala bergilir dalam sebuah turnamen menambah nilai emosional dan semangat kompetisi, karena setiap tim memiliki ambisi untuk menorehkan namanya pada sejarah juara yang pernah memegangnya.</p>
    
    <p>Piala Bailey Cup dirancang dengan desain megah dan elegan, sehingga mampu memberikan kesan prestisius bagi setiap pemenang. Dibuat dari material logam berkualitas tinggi, piala ini dilengkapi dengan finishing metalik yang mewah sehingga tampil menonjol di setiap acara penghargaan. Dengan bentuk klasik, detail ornamen yang rapi, serta pegangan khas yang menambah karakter, <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> ini menjadi simbol keunggulan dan dedikasi para juara. Trofi ini sangat ideal untuk turnamen bergengsi seperti Bailey Cup, karena tidak hanya merepresentasikan kemenangan, tetapi juga memberikan kesan mendalam yang akan selalu dikenang oleh seluruh peserta dan pendukungnya.</p>
    
    <p><a href="https://troppion.com/" target="_blank" rel="noopener"class="highlight-link">Troppion</a> menghadirkan piala bergilir yang dirancang dengan sentuhan kemewahan, kualitas, dan eksklusivitas. Dengan pengalaman panjang dalam pembuatan piala custom, Troppion memastikan setiap detail terwujud dengan presisi, mulai dari bahan premium hingga personalisasi desain sesuai kebutuhan event Anda. Jadikan piala bergilir sebagai simbol kemenangan yang berharga, yang tidak hanya mengabadikan momen juara tetapi juga menjadi inspirasi bagi generasi berikutnya. Percayakan pembuatan piala turnamen Anda bersama Troppion, dan wujudkan penghargaan yang akan selalu dikenang.</p>
  `
},
"PSB 016": { 
  title: "Piala ESPEELSA Cup Lomba Futsal Putra Tingkat SD Se – Provinsi DIY", 
  desc: `
    <p>ESPEELSA Cup 2025 merupakan ajang kompetisi futsal bergengsi tingkat Sekolah Dasar se-Provinsi Daerah Istimewa Yogyakarta yang diselenggarakan untuk mencari bibit-bibit muda berbakat dalam dunia olahraga. Turnamen ini tidak hanya menjadi sarana penyaluran minat dan bakat, tetapi juga wadah pembinaan generasi muda agar tumbuh dengan semangat sportivitas, kerja sama tim, dan mental kompetitif yang sehat. Ajang ini sekaligus membuktikan bahwa <a href="https://troppion.com/piala-event/piala-olahraga/piala-futsal/" target="_blank" rel="noopener" class="highlight-link">futsal</a> mampu menjadi media pembelajaran berharga, menanamkan nilai disiplin dan solidaritas sejak usia dini.</p>
    
    <p>Piala ESPEELSA Cup didesain secara eksklusif untuk menjadi simbol kemenangan yang membanggakan. Dibuat dari material logam berlapis emas dengan kualitas terbaik, piala ini tidak hanya kuat dan tahan lama, tetapi juga memancarkan kesan prestise tinggi. Dengan bentuk yang kokoh, detail ukiran yang elegan, dan sentuhan desain modern, <a href="https://troppion.com/piala-event/piala-olahraga/piala-futsal/" target="_blank" rel="noopener" class="highlight-link">piala futsal</a> ini merepresentasikan kerja keras, ketangguhan, dan kebanggaan para juara. Setiap elemen desainnya mencerminkan keistimewaan dan kehormatan, menjadikannya hadiah yang pantas untuk diraih di kompetisi sebesar ESPEELSA Cup.</p>
    
    <p>Rayakan kemenangan bersama Troppion, penyedia piala dan souvenir custom terpercaya di Indonesia. <a href="https://troppion.com/" target="_blank" rel="noopener" class="highlight-link">Troppion</a> menghadirkan beragam desain piala yang mewah, berkelas, dan dapat dipersonalisasi sesuai kebutuhan event Anda. Dengan pengalaman panjang dan komitmen pada kualitas, setiap piala yang kami hasilkan tidak hanya menjadi penghargaan, tetapi juga kenangan berharga yang abadi. Percayakan momen juara Anda bersama Troppion, karena setiap kemenangan layak dirayakan dengan piala istimewa yang penuh makna.</p>
  `
},
"PSB 015": { 
  title: "Piala Sepak Bola Euro Futsal Campus Category Super Soccer 2024", 
  desc: `
    <p>Euro Futsal Campus merupakan salah satu turnamen olahraga bergengsi yang mempertemukan para atlet futsal terbaik dari berbagai kampus. Dalam turnamen ini, kategori Super Soccer menjadi salah satu yang paling dinantikan karena menghadirkan pertandingan penuh intensitas, strategi, dan keterampilan teknik yang tinggi. Sebagai bentuk apresiasi atas perjuangan dan pencapaian luar biasa, sebuah <a href="https://troppion.com/piala-event/piala-olahraga/piala-sepak-bola/" target="_blank" rel="noopener" class="highlight-link">Piala Sepak Bola</a> eksklusif diperebutkan sebagai hadiah utama, menjadikannya simbol prestise sekaligus motivasi bagi para peserta untuk memberikan performa terbaik di lapangan.</p>
    
    <p>Secara khusus, <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> Euro Futsal Campus dirancang dengan detail yang sarat makna, sehingga setiap elemen desainnya mampu menghadirkan kesan mendalam bagi penerimanya. Proses perancangan dilakukan dengan cermat untuk memastikan piala benar-benar relevan dengan tema event, menjadikannya lebih dari sekadar trofi, tetapi juga representasi dari kerja keras, kebersamaan, serta semangat kompetisi yang sehat. Setiap piala yang diproduksi Troppion tidak hanya menonjol dari segi estetika, tetapi juga menghadirkan nilai emosional yang mampu dikenang sepanjang masa.</p>
    
    <p>Dibuat menggunakan bahan logam pilihan yang kokoh dan berkualitas, piala ini dipadukan dengan dudukan resin berwarna hitam yang menambah kesan elegan serta modern. Kombinasi tersebut menjadikan piala tampil mewah dan eksklusif, cocok untuk event berskala besar seperti Euro Futsal Campus. Apabila Anda memiliki kebutuhan piala custom untuk turnamen futsal, sepak bola, atau event olahraga lainnya, jangan ragu untuk menghubungi <a href="https://troppion.com/" target="_blank" rel="noopener" class="highlight-link">Troppion</a>. Dengan pengalaman panjang dan komitmen terhadap kualitas, Troppion siap menghadirkan piala yang tidak hanya menjadi simbol kemenangan, tetapi juga kebanggaan yang akan selalu dikenang.</p>
  `
},
"PBE 015": { 
  title: "Piala Bergilir MR Futsal Series Maluku", 
  desc: `
    <p>MR Futsal Series Maluku merupakan salah satu turnamen futsal paling prestisius yang mempertemukan tim-tim terbaik dari berbagai daerah di Maluku. Ajang ini bukan hanya menjadi arena kompetisi untuk menguji kemampuan teknik dan strategi, tetapi juga wadah untuk mempererat kebersamaan dan sportivitas antar pemain. Setiap pertandingan yang berlangsung penuh semangat, menjadi bukti nyata bahwa futsal adalah olahraga yang mampu membangun solidaritas sekaligus memacu adrenalin. Sebagai puncak dari kompetisi ini, sebuah <a href="https://troppion.com/piala-event/piala-bergilir/" target="_blank" rel="noopener" class="highlight-link">Piala Bergilir</a> eksklusif diperebutkan sebagai simbol supremasi yang penuh kebanggaan.</p>
    
    <p><a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> MR Futsal Series Maluku bukan hanya sekadar trofi, melainkan lambang kemenangan, kehormatan, dan kebanggaan yang akan selalu dikenang oleh para juara. Kompetisi ini menuntut lebih dari sekadar strategi permainan, tetapi juga mental baja, disiplin, dan ketangguhan tim dalam menghadapi lawan-lawan tangguh. Setiap kali piala bergilir ini berpindah tangan, ia membawa cerita baru tentang perjuangan, semangat, dan pencapaian luar biasa yang telah ditorehkan oleh tim juara, menjadikannya warisan prestasi yang bernilai tinggi.</p>
    
    <p>Piala MR Futsal Series dibuat dengan material logam berkualitas tinggi yang dipadukan dengan desain elegan untuk mencerminkan keanggunan serta prestise turnamen ini. Detail ukirannya yang rapi memberikan sentuhan eksklusif, menjadikannya lebih dari sekadar trofi biasa. Raih penghargaan yang pantas untuk tim juara Anda dengan piala eksklusif dari <a href="https://troppion.com/" target="_blank" rel="noopener"class="highlight-link">Troppion</a>. Dengan pengalaman dan dedikasi dalam memproduksi piala custom, Troppion selalu menghadirkan produk yang indah, bermakna, dan mampu menjadi simbol kemenangan sejati di setiap kompetisi bergengsi.</p>
  `
},

  // --- Basket ---
"PBE 022": { 
  title: "Piala Bergilir Sanford Student Basketball League", 
  desc: `
    <p>Sanford Student Basketball League adalah turnamen bola basket pelajar yang dirancang untuk menumbuhkan semangat kompetisi sehat serta menjunjung tinggi nilai sportivitas. Ajang ini menghadirkan kesempatan emas bagi para atlet muda untuk menunjukkan kemampuan terbaik mereka, sekaligus menjadi sarana pembinaan prestasi sejak dini. Pertandingan yang berlangsung dengan intensitas tinggi memberikan pengalaman berharga, mengajarkan kerja sama tim, strategi permainan, dan mental juara. Tidak heran jika setiap tahunnya, turnamen ini selalu dinanti karena menjadi wadah lahirnya bintang-bintang basket masa depan.</p>
    
    <p>Piala Sanford Student Basketball League tampil dengan desain menawan yang terbuat dari logam emas berkualitas tinggi, memancarkan keanggunan dan prestise. Bagian atasnya berbentuk bola basket, simbol dedikasi dan pencapaian luar biasa dalam dunia olahraga. Detail rancangannya yang elegan menjadikan <a href="https://troppion.com/piala-event/piala-bergilir/" target="_blank" rel="noopener" class="highlight-link">Piala Bergilir</a> ini sebagai simbol supremasi yang diperebutkan setiap tahunnya, menambah semangat para tim untuk tampil maksimal. Setiap kali piala ini berpindah tangan, ia membawa cerita baru tentang perjuangan dan kemenangan yang patut dikenang.</p>
    
    <p><a href="https://troppion.com/" target="_blank" rel="noopener"class="highlight-link">Troppion</a> siap membantu Anda menghadirkan momen penghargaan yang lebih istimewa dengan piala berkualitas premium. Dengan pengalaman dan keahlian dalam merancang piala custom, kami memastikan setiap detail diproduksi dengan presisi tinggi, menjadikan piala bukan hanya simbol kemenangan tetapi juga karya seni yang bernilai. Percayakan kebutuhan piala turnamen Anda kepada Troppion, dan wujudkan penghargaan yang berkesan untuk setiap prestasi.</p>
  `
},

"PBA 003": { 
  title: "Piala SOERABAJA CHAMPIONS LEAGUE", 
  desc: `
    <p>SOERABAJA CHAMPIONS LEAGUE merupakan salah satu ajang basket paling bergengsi, di mana setiap pertandingan menghadirkan tensi tinggi, strategi tajam, dan semangat sportivitas yang luar biasa. Setiap momen dalam turnamen ini menjadi catatan sejarah tak terlupakan, baik bagi peserta maupun penggemar yang menyaksikannya. Untuk mengabadikan momen penting tersebut, Troppion.com menghadirkan <a href="https://troppion.com/portofolio/" target="_blank" rel="noopener" class="highlight-link">piala custom</a> eksklusif sebagai lambang kehormatan yang mewakili kekuatan, dedikasi, dan perjuangan para atlet basket.</p>
    
    <p>Piala SOERABAJA CHAMPIONS LEAGUE – CHAMPION THE FINAL, dengan dukungan sponsor DIABLO BASKETBALL, menjadi simbol prestasi tertinggi yang paling diidamkan setiap tim. Dibuat dari material logam berkualitas dan dirancang dengan keahlian tinggi, <a href="https://troppion.com/piala-event/piala-olahraga/piala-basket/" target="_blank" rel="noopener" class="highlight-link">piala basket</a> ini menampilkan keindahan artistik sekaligus kekuatan dan daya tahan. Piala ini bukan hanya sekadar hadiah, tetapi juga representasi kejayaan yang layak dikenang sepanjang masa.</p>
    
    <p>Bagi tim atau penyelenggara yang ingin menghadirkan piala logam custom dengan kualitas premium, <a href="https://troppion.com/" target="_blank" rel="noopener" class="highlight-link">Troppion.com</a> adalah pilihan yang tepat. Kami menyediakan layanan personalisasi desain sesuai kebutuhan turnamen Anda, memastikan setiap piala benar-benar unik dan bermakna. Hubungi customer service kami untuk mendiskusikan piala impian Anda, dan biarkan Troppion membantu mengabadikan setiap kemenangan dengan karya seni yang memukau.</p>
  `
},

"PBA 001": { 
  title: "Piala Cakra Sakti Basketball Club – PT Mitra Properti Sukses", 
  desc: `
    <p>Cakra Sakti Basketball Club yang didukung oleh PT Mitra Properti Sukses adalah salah satu tim basket berprestasi yang dikenal akan dedikasi dan semangatnya di dunia olahraga. Tim ini tidak hanya menonjol dalam berbagai kompetisi lokal, tetapi juga menjadi representasi kerja sama, disiplin, dan semangat juang yang tinggi. Keberhasilan mereka dalam pertandingan menjadi inspirasi bagi banyak atlet muda dan komunitas basket.</p>
    
    <p>Piala Cakra Sakti Basketball Club – PT Mitra Properti Sukses dirancang khusus untuk merayakan kontribusi sekaligus pencapaian luar biasa tim dalam dunia basket. Dibuat dengan desain modern dan elegan, piala ini menggunakan material logam berkualitas tinggi yang mampu bertahan lama sekaligus memancarkan nilai prestise. <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> ini tidak hanya menjadi simbol kemenangan, tetapi juga kebanggaan atas dedikasi yang diberikan seluruh anggota tim serta dukungan solid dari sponsor.</p>
    
    <p>Untuk kebutuhan <a href="https://troppion.com/piala-event/piala-olahraga/piala-basket/" target="_blank" rel="noopener" class="highlight-link">Piala Basket</a> custom berkualitas, TROPPION hadir sebagai solusi terpercaya. Dengan pengalaman luas dalam pembuatan piala logam dan souvenir custom, kami berkomitmen menghasilkan produk yang tidak hanya estetis, tetapi juga penuh makna. Percayakan kebutuhan piala Anda kepada kami, dan wujudkan penghargaan yang mampu merefleksikan semangat dan prestasi.</p>
  `
},

"PBA 005": { 
  title: "Piala Juara 1 Women’s Basketball Championship", 
  desc: `
    <p>Dalam rangka merayakan Dies Natalis ke-64 GK UNSRAT, Troppion.com menghadirkan koleksi piala custom istimewa yang dirancang untuk menandai perayaan penting ini. Ajang Women’s Basketball Championship menjadi salah satu momen puncak, memperlihatkan bakat luar biasa, strategi tim, dan semangat juang tinggi dari para atlet wanita. <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> khusus dipersembahkan sebagai simbol prestasi sekaligus bentuk apresiasi atas dedikasi mereka.</p>
    
    <p>Khusus Piala Juara 1 Women’s Basketball Championship, Troppion.com menawarkan <a href="https://troppion.com/piala-event/piala-olahraga/piala-basket/" target="_blank" rel="noopener" class="highlight-link">Piala Basket</a> logam berkualitas tinggi yang dibuat dengan desain elegan serta detail yang rapi. Setiap elemen mencerminkan pengakuan atas kerja keras dan dedikasi tim pemenang. Piala ini bukan hanya sebuah hadiah, tetapi juga kenangan yang akan selalu melekat bagi mereka yang berhasil meraih posisi puncak.</p>
    
    <p>Bagi penyelenggara turnamen yang ingin memberikan penghargaan tak terlupakan, piala custom dari Troppion.com adalah pilihan terbaik. Kami menyediakan layanan personalisasi desain sesuai kebutuhan Anda, sehingga setiap <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> menjadi unik dan bermakna. Dengan Troppion, setiap kemenangan akan lebih istimewa dan berkesan.</p>
  `
},

"PBA 002": { 
  title: "Piala Basket Juara Umum Elha Basket League", 
  desc: `
    <p>Elha Basket League merupakan liga basket bergengsi yang mempertemukan tim-tim dari berbagai daerah untuk berkompetisi dengan semangat sportivitas tinggi. Ajang ini bukan hanya menjadi wadah untuk menampilkan kemampuan olahraga, tetapi juga sarana mempererat persaudaraan dan menumbuhkan semangat kerja sama tim. Pertandingan yang seru dan penuh talenta menjadikan liga ini selalu dinantikan oleh komunitas basket.</p>
    
    <p><a href="https://troppion.com/piala-event/piala-olahraga/piala-basket/" target="_blank" rel="noopener" class="highlight-link">Piala Basket</a> Juara Umum Elha Basket League dirancang dengan desain elegan serta material logam berkualitas tinggi untuk mencerminkan prestasi luar biasa dari tim pemenang. Trofi ini bukan hanya lambang keberhasilan, tetapi juga kebanggaan yang akan selalu dikenang oleh setiap anggota tim. Dengan tampilan yang mewah dan detail yang presisi, piala ini layak menjadi simbol supremasi dalam liga bergengsi.</p>
    
    <p>Jika Anda membutuhkan <a href="https://troppion.com/piala-event/piala-olahraga/" target="_blank" rel="noopener" class="highlight-link">Piala Olahraga</a> custom dengan kualitas terbaik, TROPPION siap menjadi mitra terpercaya. Kami berpengalaman dalam menghadirkan piala logam maupun plakat custom yang mampu memenuhi sekaligus melampaui ekspektasi Anda. Percayakan kebutuhan piala untuk turnamen basket atau event olahraga lainnya pada TROPPION, dan wujudkan penghargaan sempurna untuk setiap prestasi juara.</p>
  `
},


  // --- E-Sport ---
"PBE 002": { 
  title: "Piala Bergilir E-Sport Mobile Legends RS Persahabatan Jakarta", 
  desc: `
    <p>Mobile Legends telah menjadi salah satu game E-Sport paling populer, dimainkan oleh jutaan gamer dari seluruh dunia. Permainan ini bukan hanya sekadar tentang strategi dan keterampilan individu, tetapi juga tentang bagaimana membangun kerja sama tim yang solid serta menjalin persahabatan di antara para pemain. Dalam konteks turnamen, setiap pertandingan selalu menghadirkan keseruan, ketegangan, dan semangat kompetitif yang mampu menghibur sekaligus mempererat hubungan antar peserta.</p>
    
    <p>Untuk memperkuat tali persahabatan sekaligus meningkatkan kebersamaan, RS Persahabatan Jakarta menyelenggarakan Persahabatan Cup E-Sport Mobile Legends yang memperebutkan <a href="https://troppion.com/piala-event/piala-olahraga/piala-e-sport/" target="_blank" rel="noopener" class="highlight-link">piala bergilir</a> eksklusif. Turnamen ini menjadi ajang seru bagi karyawan dan komunitas sekitar untuk unjuk kemampuan dalam suasana menyenangkan dan penuh sportivitas. Piala bergilir yang diperebutkan dalam event ini tidak hanya menjadi simbol kemenangan, tetapi juga kehormatan yang membawa nilai kebersamaan di dalamnya.</p>
    
    <p>Bagi penyelenggara turnamen E-Sport yang ingin memberikan penghargaan eksklusif, Troppion menawarkan layanan pembuatan <a href="https://troppion.com/piala-event/piala-bergilir/" target="_blank" rel="noopener" class="highlight-link">piala e-sport</a> custom berbahan logam berkualitas tinggi. Dengan desain unik, modern, dan berkarakter, piala ini tidak hanya menjadi lambang keberhasilan, tetapi juga representasi semangat kompetisi dan kerja sama tim. Hubungi customer service Troppion sekarang untuk konsultasi dan wujudkan piala E-Sport impian Anda.</p>
  `
},

"PES 004": { 
  title: "Piala E-Sport M-Well Championship Mobile Legend Kudus", 
  desc: `
    <p>Mobile Legends menjadi salah satu game favorit yang kini mendunia, dan popularitasnya membuat berbagai turnamen E-Sport bermunculan. Salah satunya adalah M-Well Championship di Kudus, yang mempertemukan tim-tim terbaik untuk berkompetisi merebutkan <a href="https://troppion.com/piala-event/piala-olahraga/piala-e-sport/" target="_blank" rel="noopener" class="highlight-link">Piala e-sport</a> prestisius. Ajang ini tidak hanya menghadirkan pertandingan seru, tetapi juga menumbuhkan semangat sportivitas dan persahabatan di antara para peserta.</p>
    
    <p>Piala M-Well Championship didesain dengan gaya yang elegan dan modern. Dibuat menggunakan bahan resin berkualitas yang membuat tampilannya estetik, piala ini diperkaya dengan tambahan glitter emas yang menonjolkan kemewahan. Desainnya yang inovatif dan unik menjadikan trofi ini lebih dari sekadar hadiah kemenangan, tetapi juga simbol prestasi yang membanggakan bagi tim juara.</p>
    
    <p>Jika Anda ingin memberikan penghargaan istimewa di ajang serupa, Troppion siap membantu menghadirkan <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> custom sesuai kebutuhan Anda. Dengan layanan personalisasi desain dan material, kami memastikan setiap piala yang dihasilkan benar-benar unik, berkesan, dan mewakili semangat kompetisi. Hubungi customer service kami sekarang dan wujudkan penghargaan terbaik untuk event olahraga maupun E-Sport Anda.</p>
  `
},

"PBE 001": { 
  title: "Piala Best In Culture Program Corporate SBU Kalla Makassar", 
  desc: `
    <p>Corporate SBU Kalla Makassar dikenal sebagai entitas bisnis yang terus mendorong inovasi dan penguatan budaya kerja. Melalui berbagai program pengembangan kultur perusahaan, mereka berkomitmen menciptakan lingkungan kerja yang inspiratif, produktif, dan memberikan motivasi tinggi bagi karyawan. Upaya ini tidak hanya meningkatkan kualitas kerja, tetapi juga memperkuat fondasi perusahaan untuk menghadapi tantangan masa depan.</p>
    
    <p><a href="https://troppion.com/piala-event/piala-bergilir/" target="_blank" rel="noopener" class="highlight-link">Piala Bergilir</a> Best In Culture Program Corporate SBU Kalla Makassar dibuat untuk memberikan penghargaan kepada unit atau individu yang berhasil menunjukkan kontribusi nyata dalam penerapan budaya kerja terbaik. Terbuat dari kombinasi logam dan resin berkualitas, piala ini memancarkan prestise sekaligus memberikan motivasi agar budaya perusahaan terus berkembang dan menjadi teladan.</p>
    
    <p>Untuk perusahaan yang ingin memberikan apresiasi dengan cara istimewa, Troppion menawarkan layanan pembuatan <a href="https://troppion.com/piala-event/piala-olahraga/piala-e-sport/" target="_blank" rel="noopener" class="highlight-link">piala e-sport</a> maupun penghargaan custom lainnya. Dengan desain yang dapat disesuaikan, kami siap menciptakan piala yang tidak hanya indah secara visual, tetapi juga penuh makna dan relevansi. Hubungi customer service Troppion untuk konsultasi gratis dan wujudkan piala impian Anda.</p>
  `
},

"PBE 003": { 
  title: "Piala Bergilir Penerapan K3 Terbaik Perum Jasa Tirta 1 Malang", 
  desc: `
    <p>Perum Jasa Tirta 1 Malang memberikan penghargaan “K3 Terbaik” sebagai bentuk apresiasi kepada unit kerja yang mampu menerapkan standar Keselamatan dan Kesehatan Kerja (K3) dengan optimal. Penghargaan ini menunjukkan komitmen perusahaan untuk terus meningkatkan keamanan, kenyamanan, dan kesejahteraan karyawan, sekaligus menumbuhkan kesadaran pentingnya budaya K3 dalam setiap operasional perusahaan.</p>
    
    <p><a href="https://troppion.com/piala-event/piala-bergilir/" target="_blank" rel="noopener" class="highlight-link">Piala Bergilir</a> Penerapan K3 Terbaik dirancang eksklusif sebagai simbol prestasi dan penghargaan tinggi atas pencapaian tersebut. Dibuat dari kombinasi logam dan resin berkualitas, piala ini menonjolkan desain yang elegan, tahan lama, sekaligus penuh nilai. Dengan keanggunan yang dimilikinya, piala ini tidak hanya menjadi hadiah, tetapi juga pengingat pentingnya keselamatan kerja.</p>
    
    <p>Bagi institusi atau organisasi yang ingin menghadirkan penghargaan serupa, Troppion menyediakan layanan pembuatan piala custom sesuai kebutuhan Anda. Kami mampu merancang <a href="https://troppion.com/" target="_blank" rel="noopener"class="highlight-link">Troppion</a> trofi dengan desain unik, penuh makna, dan relevan dengan tema acara. Dengan pengalaman panjang, Troppion siap mewujudkan penghargaan yang tak hanya berkesan, tetapi juga memotivasi penerima untuk terus berprestasi.</p>
  `
},

"PES 001": { 
  title: "Piala PBNC Champion", 
  desc: `
    <p>PBNC Champion adalah gelar prestisius dalam dunia E-Sport yang menandakan keberhasilan tim menjuarai Point Blank National Championship. Gelar ini menjadi bukti nyata dari kemampuan strategi, keterampilan, serta dedikasi tinggi para pemain. Tidak hanya menjadi simbol kemenangan, PBNC Champion juga merepresentasikan kerja keras, komitmen, dan semangat kompetitif yang luar biasa.</p>
    
    <p>Piala PBNC Champion dirancang khusus untuk merayakan prestasi gemilang tersebut. Dibuat dari logam berkualitas tinggi dengan desain modern dan simbolis, piala ini mencerminkan kebanggaan sekaligus keagungan dunia E-Sport. <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> ini menjadi hadiah bergengsi yang diidamkan setiap tim, serta pengingat abadi akan perjuangan panjang menuju puncak kemenangan.</p>
    
    <p>Siap mengabadikan kemenangan tim Anda dengan <a href="https://troppion.com/piala-event/piala-olahraga/piala-e-sport/" target="_blank" rel="noopener" class="highlight-link">Piala e-sport</a> custom dari logam berkualitas? Troppion hadir sebagai mitra terpercaya yang siap membantu Anda menghadirkan penghargaan eksklusif. Dengan layanan personalisasi dan pengalaman panjang, kami memastikan setiap piala tidak hanya indah, tetapi juga sarat makna. Hubungi customer service Troppion sekarang dan rayakan setiap momen juara dengan cara yang lebih istimewa.</p>
  `
},


  // --- Golf ---
"1": { 
  title: "Piala Golf Hole in One Club Merapi Golf Yogyakarta", 
  desc: `
    <p>Acara eksklusif Hole in One Club yang digelar oleh Merapi Golf Yogyakarta merupakan momen istimewa yang penuh prestise. Event ini menjadi ajang penghargaan bagi para pegolf yang berhasil mencetak hole-in-one, sebuah pencapaian langka yang membutuhkan perpaduan keterampilan, keberanian, dan keberuntungan. Perayaan ini bukan hanya sekadar kompetisi, tetapi juga bentuk apresiasi terhadap dedikasi para pemain golf dalam menguasai olahraga yang penuh teknik ini.</p>
    
    <p>Piala Hole in One Club dirancang dengan tampilan elegan dan penuh simbolisme, menjadikannya lebih dari sekadar trofi. Dengan desain pemain golf yang dinamis serta detail bola yang presisi, piala ini merepresentasikan pencapaian luar biasa dalam dunia golf. Terbuat dari material premium dengan sentuhan emas mewah, <a href="https://troppion.com/piala/" target="_blank" rel="noopener" class="highlight-link">Piala</a> ini menjadi trofi bernilai tinggi yang layak bagi para juara sejati.</p>
    
    <p>Percayakan pembuatan <a href="https://troppion.com/piala-event/piala-olahraga/" target="_blank" rel="noopener" class="highlight-link">Piala Olahraga</a> Anda kepada JogjaPlakat. Dengan pengalaman dan dedikasi dalam menghadirkan desain piala berkualitas, kami memastikan setiap penghargaan menjadi simbol prestasi yang membanggakan. Hubungi kami sekarang untuk mendapatkan produk terbaik yang akan mengabadikan momen spesial Anda.</p>
  `
},

"2": { 
  title: "Piala Golf Tribute To Our Best Regional CEO BRI Semarang", 
  desc: `
    <p>“Tribute To Our Best Regional CEO BRI Semarang” adalah perayaan penting yang diselenggarakan untuk menghormati kepemimpinan, dedikasi, dan kontribusi luar biasa seorang Regional CEO dalam membawa kesuksesan besar bagi BRI Semarang. Momen ini menjadi bukti nyata apresiasi terhadap komitmen yang kuat serta inspirasi yang diberikan kepada seluruh tim dan organisasi.</p>
    
    <p>Untuk menandai perayaan tersebut, Troppion menghadirkan piala custom yang dirancang eksklusif dengan penuh ketelitian. <a href="https://troppion.com/piala-set/" target="_blank" rel="noopener" class="highlight-link">Piala Set</a> ini menampilkan desain elegan dengan detail halus yang mencerminkan kehormatan dan keunggulan. Dibuat dari resin berkualitas tinggi, <a href="https://troppion.com/piala-event/piala-olahraga/piala-golf/" target="_blank" rel="noopener" class="highlight-link">Piala Golf</a> ini bukan hanya simbol penghargaan, tetapi juga karya seni yang mengabadikan pencapaian serta pengaruh positif dari kepemimpinan yang inspiratif.</p>
    
    <p>Untuk menjadikan acara penghargaan Anda lebih berkesan, Troppion menyediakan layanan pembuatan piala golf custom yang dapat disesuaikan dengan kebutuhan. Dengan pelayanan terbaik dan desain premium, kami menghadirkan produk yang tidak hanya memukau secara visual, tetapi juga penuh makna. Hubungi customer service kami hari ini dan wujudkan penghargaan elegan yang pantas bagi para pemimpin berprestasi.</p>
  `
},

"3": { 
  title: "Trophy Golf Go Bar Baruna Bina Utama – Longest Drive", 
  desc: `
    <p>Go Bar Baruna Bina Utama – Longest Drive adalah salah satu kategori paling bergengsi dalam turnamen golf, di mana para pegolf bersaing untuk menghasilkan pukulan terjauh. Kategori ini menguji kekuatan, teknik, serta strategi para pemain, sekaligus menampilkan kemampuan luar biasa mereka dalam menguasai peralatan dan gaya pukulan yang tepat.</p>
    
    <p>Trophy khusus untuk kategori Longest Drive ini dirancang sebagai simbol keunggulan bagi pegolf yang berhasil mencatat pukulan terbaik. Dibuat dari logam berkualitas tinggi, trophy ini menonjolkan desain elegan dan mewah yang sepadan dengan prestasi besar di lapangan golf. Setiap detailnya menggambarkan keanggunan dan prestise, menjadikannya piala yang layak menjadi kebanggaan pemenang.</p>
    
    <p>Jika Anda ingin merayakan pencapaian luar biasa dalam turnamen golf dengan <a href="https://troppion.com/piala-event/piala-olahraga/piala-golf/" target="_blank" rel="noopener" class="highlight-link">Piala Golf</a> custom dari logam, TROPPION adalah solusi terpercaya. Kami menghadirkan layanan pembuatan piala custom sesuai kebutuhan, memastikan setiap penghargaan menjadi unik, berkualitas tinggi, dan penuh makna. Hubungi kami sekarang dan wujudkan penghargaan terbaik untuk setiap momen kemenangan.</p>
  `
},

"4": { 
  title: "Piala Best Gross Overall – Serikat Pekerja Pertamina Patra Wijayakusuma (SPP PWK)", 
  desc: `
    <p>Ajang Best Gross Overall yang diselenggarakan oleh Serikat Pekerja Pertamina Patra Wijayakusuma (SPP PWK) menjadi perhelatan prestisius dalam dunia golf. Turnamen ini tidak hanya menampilkan persaingan sengit antar pegolf, tetapi juga menjadi momen penting untuk merayakan pencapaian tertinggi dalam olahraga golf. Troppion menghadirkan piala eksklusif yang dirancang khusus untuk menandai penghargaan ini.</p>
    
    <p>Piala Best Gross Overall dibuat dengan menggabungkan estetika modern dan kekuatan material logam pilihan. Desainnya yang elegan dan detail yang presisi menjadikannya simbol prestasi yang abadi. <a href="https://troppion.com/piala-event/piala-olahraga/piala-golf/" target="_blank" rel="noopener" class="highlight-link">Piala Golf</a> ini bukan hanya sekadar hadiah, tetapi juga karya seni yang memberikan penghormatan setinggi-tingginya kepada pegolf terbaik.</p>
    
    <p>Jika Anda membutuhkan <a href="https://troppion.com/piala-event/piala-olahraga/piala-golf/" target="_blank" rel="noopener" class="highlight-link">Piala Golf</a> custom berkualitas tinggi untuk event prestisius Anda, TROPPION siap membantu. Dengan layanan personalisasi dan pengalaman panjang, kami mampu menciptakan piala yang sesuai kebutuhan, indah, serta penuh makna. Pesan sekarang dan hadirkan penghargaan yang abadi untuk setiap kemenangan.</p>
  `
},

"5": { 
  title: "Piala Akrilik Monthly Fun Golf Andalan Fluid Sistem", 
  desc: `
    <p>Andalan Fluid Sistem menyelenggarakan acara Monthly Fun Golf sebagai bentuk apresiasi terhadap partisipasi sekaligus pencapaian para peserta. Acara yang digelar di Kaleang Golf Course, Batulijau, Sumbawa, pada November 2024 ini menjadi momen penting untuk mempererat hubungan, menghibur, dan memberikan penghargaan bagi para pemenang.</p>
    
    <p>Piala eksklusif untuk event ini dibuat dari akrilik berkualitas tinggi dengan desain modern yang menampilkan siluet pegolf dinamis serta detail logo acara. Dengan tampilan yang elegan dan kesan mewah, <a href="https://troppion.com/piala-event/piala-olahraga/piala-golf/" target="_blank" rel="noopener" class="highlight-link">Piala Golf</a> ini sangat cocok untuk memperingati pencapaian luar biasa di dunia olahraga golf.</p>
    
    <p>Percayakan kebutuhan piala custom Anda kepada <a href="https://troppion.com/" target="_blank" rel="noopener"class="highlight-link">Troppion</a>. Kami siap menghadirkan desain premium sesuai karakter event yang Anda selenggarakan. Dengan pengalaman dan dedikasi kami, setiap piala yang diproduksi akan menjadi simbol prestasi sekaligus kenangan berharga yang tak terlupakan.</p>
  `
},
};

/* ===== Modal + zoom controller ===== */
const fallbackSVG =
  'data:image/svg+xml;charset=UTF-8,' +
  encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><rect width="100%" height="100%" fill="#e9f0ff"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#748bb3" font-family="Arial" font-size="28">Gambar belum tersedia</text></svg>');

const backdrop = document.getElementById('backdrop');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.getElementById('closeBtn');

const zoomStage = document.getElementById('zoomStage');
const modalImg = document.getElementById('modalImg');
const btnIn = document.getElementById('zoomIn');
const btnOut = document.getElementById('zoomOut');
const btnFit = document.getElementById('zoomFit');
const btnReset = document.getElementById('zoomReset');

let scale = 1, tx = 0, ty = 0, minScale = 0.25, maxScale = 6;
let naturalW = 0, naturalH = 0, fitScale = 1;

// Ambil src gambar dari kartu yang diklik
function getCardImageSrcFromButton(btn){
  const card = btn.closest('.card');
  const imgEl = card ? card.querySelector('img[data-file], img[data-img]') : null;
  return imgEl && imgEl.src ? imgEl.src : null;
}

function applyTransform(){
  modalImg.style.transform = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(${scale})`;
}

function computeFitScale(){
  const st = zoomStage.getBoundingClientRect();
  if(!naturalW || !naturalH || !st.width || !st.height) return 1;
  return Math.min(st.width / naturalW, st.height / naturalH);
}

function setModalImage(src){
  modalImg.src = '';
  modalImg.onload = ()=>{
    naturalW = modalImg.naturalWidth;
    naturalH = modalImg.naturalHeight;
    fitScale = computeFitScale();
    scale = fitScale;
    tx = ty = 0;
    applyTransform();
  };
  modalImg.onerror = ()=>{
    modalImg.src = fallbackSVG;
    naturalW = 1200; naturalH = 800;
    fitScale = computeFitScale(); scale = fitScale; tx = ty = 0; applyTransform();
  };
  modalImg.src = src || fallbackSVG;
}

function openModal(id, triggerBtn){
  const item = DETAILS[id];
  if(!item) return;

  modalTitle.textContent = item.title || 'Detail Produk';
  modalContent.innerHTML = item.desc || '<p>Deskripsi belum tersedia.</p>';

  const srcFromCard = triggerBtn ? getCardImageSrcFromButton(triggerBtn) : null;
  setModalImage(srcFromCard);

  backdrop.classList.add('show');
  modal.classList.add('show');
  backdrop.setAttribute('aria-hidden','false');
  closeBtn.focus();
}
function closeModal(){
  modal.classList.remove('show');
  backdrop.classList.remove('show');
  backdrop.setAttribute('aria-hidden','true');
}

document.addEventListener('click', (e)=>{
  const btn = e.target.closest('[data-id]');
  if(btn){ openModal(btn.getAttribute('data-id'), btn); }
  if(e.target === backdrop){ closeModal(); }
  if(e.target === closeBtn){ closeModal(); }
});
document.addEventListener('keydown',(e)=>{
  if(e.key === 'Escape'){ closeModal(); }
});

// Zoom controls
btnIn.addEventListener('click', ()=>{ scale = Math.min(maxScale, scale*1.25); applyTransform(); });
btnOut.addEventListener('click', ()=>{ scale = Math.max(minScale, scale/1.25); applyTransform(); });
btnReset.addEventListener('click', ()=>{ scale = 1; tx = ty = 0; applyTransform(); });
btnFit.addEventListener('click', ()=>{
  fitScale = computeFitScale();
  scale = fitScale; tx = ty = 0; applyTransform();
});

// Wheel zoom
zoomStage.addEventListener('wheel', (e)=>{
  e.preventDefault();
  const delta = e.deltaY < 0 ? 1.1 : 0.9;
  const newScale = Math.min(maxScale, Math.max(minScale, scale * delta));
  scale = newScale;
  applyTransform();
}, {passive:false});

// Double click toggle zoom
zoomStage.addEventListener('dblclick', ()=>{
  if(Math.abs(scale - fitScale) < 0.01){ scale = Math.min(2, maxScale); }
  else { scale = fitScale; tx = ty = 0; }
  applyTransform();
});

// Drag / pan
let dragging = false, startX = 0, startY = 0;
zoomStage.addEventListener('pointerdown', (e)=>{
  dragging = true; startX = e.clientX; startY = e.clientY;
  zoomStage.setPointerCapture(e.pointerId);
});
zoomStage.addEventListener('pointermove', (e)=>{
  if(!dragging) return;
  tx += (e.clientX - startX);
  ty += (e.clientY - startY);
  startX = e.clientX; startY = e.clientY;
  applyTransform();
});
zoomStage.addEventListener('pointerup', (e)=>{
  dragging = false; zoomStage.releasePointerCapture(e.pointerId);
});
zoomStage.addEventListener('pointerleave', ()=>{ dragging = false; });

// Recompute fit on resize
window.addEventListener('resize', ()=>{
  if(backdrop.classList.contains('show')){
    fitScale = computeFitScale();
    scale = Math.max(scale, fitScale*0.5);
    applyTransform();
  }
});
