// Создание объекта «Квартира» с четырьмя свойствами
const apartment = {
    address: "г. Нижний Новгород, ул. Большая Покровская, д. 15",
    rooms: 3,
    price: 7500000,
    renovation: "Евроремонт"
};

// Обработка нажатия кнопки
document.getElementById("showApartment").addEventListener("click", function () {
    const result = document.getElementById("result");

    result.innerHTML = `
        <h2>Свойства квартиры</h2>
        <p><strong>Адрес:</strong> ${apartment.address}</p>
        <p><strong>Количество комнат:</strong> ${apartment.rooms}</p>
        <p><strong>Цена:</strong> ${apartment.price.toLocaleString("ru-RU")} ₽</p>
        <p><strong>Ремонт:</strong> ${apartment.renovation}</p>
    `;
});
