function check() {
    let n = parseInt(document.getElementById("number").value);
    let i = 2;

    for (; i < n; i++) {
        if (n % i === 0) {
            alert(n + " khong phai la so nguyen to");
            return;
        }

    }

    alert(n + " la so nguyen to");

}



