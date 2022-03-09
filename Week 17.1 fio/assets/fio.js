function result() {
    let lastname = document.getElementById('lastname').value.trim();
    let lastnamepast = lastname.toLowerCase().slice(1);

    let firstname = document.getElementById('firstname').value.trim();
    let firstnamepast = firstname.toLowerCase().slice(1);


    let secondname = document.getElementById('secondname').value.trim();
    let secondnamepast = secondname.toLowerCase().slice(1);

    alert("Фамилия: " + lastname[0].toUpperCase() + lastnamepast + ", Имя: " + firstname[0]
        .toUpperCase() +
        firstnamepast + ", Отчество: " + secondname[0].toUpperCase() + secondnamepast);
}