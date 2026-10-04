// Menyalin email ke clipboard
function copyEmail() {
    const email = "aulisechasaska@gmail.com"; // Silakan ubah dengan email asli
    navigator.clipboard.writeText(email).then(() => {
        alert("Email (" + email + ") berhasil disalin!");
    }).catch(err => {
        console.error('Gagal menyalin text: ', err);
    });
}
// Fungsi untuk memunculkan/menyembunyikan menu mobile
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}