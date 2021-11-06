function sbm(form) {
  var nama = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var pesan = document.getElementById('pesan').value;
  if (nama != '' && email != '' && pesan != '') {
    alert('data Berhasil ditambah');
  } else if (nama != '' && email != '' && pesan != '') {
    document.getElementById('form').requestFullcreen();
  } else {
    alert('Anda harus mengisi data dengan lengkap !');
  }
}

// function refreshPage() {
//   window.location.reload();
// }
