function convertDataKor(currentDate) {
    const dayKors = ["일","월","화","수","목","금","토"];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    const day = dayKors[currentDate.getDay()];
    return `${year}년 ${month}월 ${date}일 ${(day)}요일`;
}