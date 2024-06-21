// Get elements
const dasborStatPenjualan = document.getElementById('penjualan-stat');
const dasborStatKerjaSama = document.getElementById('kerja-sama-stat');
const dasborStatPemasaran = document.getElementById('pemasaran-stat');

const kerjaSamaTable = document.getElementById('kerja-sama-table');
const kerjaSamaTbody = document.getElementById('kerja-sama-tbody');

const penjualanTable = document.getElementById('penjualan-table');
const penjualanTbody = document.getElementById('penjualan-tbody');

const laporanPenjualan = document.getElementById('laporan-penjualan');
const laporanKerjaSama = document.getElementById('laporan-kerja-sama');
const laporanPemasaran = document.getElementById('laporan-pemasaran');

const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('header nav a');

const houseTypesList = document.getElementById('house-types-list');

// Sample data
const kerjaSamaData = [
  { no: 1, jenisKerjaSama: 'Kerja Sama Pemasaran Digital', target: 100, budget: 100000000 },
  { no: 2, jenisKerjaSama: 'Kerja Sama Pameran Properti', target: 200, budget: 200000000 },
  { no: 3, jenisKerjaSama: 'Kerja Sama Media Cetak', target: 150, budget: 150000000 },
  { no: 4, jenisKerjaSama: 'Kerja Sama Influencer', target: 50, budget: 50000000 },
  { no: 5, jenisKerjaSama: 'Kerja Sama Iklan Televisi', target: 300, budget: 300000000 },
];

const penjualanData = [
  { no: 1, nama: 'Agus Santoso', alamat: 'Jalan Merdeka No. 10, Jakarta', noHp: '081234567890' },
  { no: 2, nama: 'Budi Raharjo', alamat: 'Jalan Kebon Jeruk No. 15, Bandung', noHp: '081234567891' },
  { no: 3, nama: 'Citra Dewi', alamat: 'Jalan Pahlawan No. 20, Surabaya', noHp: '081234567892' },
  { no: 4, nama: 'Dewi Lestari', alamat: 'Jalan Cendana No. 25, Yogyakarta', noHp: '081234567893' },
  { no: 5, nama: 'Eko Prasetyo', alamat: 'Jalan Melati No. 30, Semarang', noHp: '081234567894' },
];

const houseTypesData = [
  { type: 'Type A', size: '36m²', price: '500,000,000' },
  { type: 'Type B', size: '45m²', price: '600,000,000' },
  { type: 'Type C', size: '60m²', price: '800,000,000' },
];

// Render kerja sama table
kerjaSamaData.forEach((data) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${data.no}</td>
    <td>${data.jenisKerjaSama}</td>
    <td>${data.target}</td>
    <td>${data.budget}</td>
  `;
  kerjaSamaTbody.appendChild(row);
});

// Render penjualan table
penjualanData.forEach((data) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${data.no}</td>
    <td>${data.nama}</td>
    <td>${data.alamat}</td>
    <td>${data.noHp}</td>
  `;
  penjualanTbody.appendChild(row);
});

// Render house types list
houseTypesData.forEach((data) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <strong>${data.type}</strong>: ${data.size}, Harga: Rp ${data.price}
    `;
    houseTypesList.appendChild(listItem);
  });
  
  // Update stats
  dasborStatPenjualan.textContent = `${penjualanData.length} unit`;
  dasborStatKerjaSama.textContent = `${kerjaSamaData.length} kerja sama`;
  dasborStatPemasaran.textContent = `${houseTypesData.length * 50} leads`;
  
  laporanPenjualan.textContent = `${penjualanData.length} unit`;
  laporanKerjaSama.textContent = `${kerjaSamaData.length} kerja sama`;
  laporanPemasaran.textContent = `${houseTypesData.length * 50} leads`;
  
  // Navigation handling
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
  
      sections.forEach(section => {
        if (section.id === targetId) {
          section.classList.remove('hidden');
        } else {
          section.classList.add('hidden');
        }
      });
    });
  });
  