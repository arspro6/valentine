
function changegif() {
    document.getElementById('gifImage').src = 'source/YAg6.gif';
}

var gifImages = ['source/d3r.gif', 'source/1FaK.gif', 'source/D4D9.gif'];
var texts = ["������ ���?", "����, �� ����������", "�� ��������"];
var currentIndex = 0;

function changeGif() {
    currentIndex++; 
    if (currentIndex >= gifImages.length) {
        currentIndex = 0;
    }
    document.getElementById('gifImage').src = gifImages[currentIndex]; // ������������� ����� ���� � �����
    var button2 = document.getElementById('myButton2');
    button2.value = texts[currentIndex];
}
