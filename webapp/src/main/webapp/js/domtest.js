/**
 *
 */

// alert("test");
let divObj1 = document.querySelector(".my_box");

// dom 객체에 이벤트 연결하기
// 객체.addEventListener("이벤트명", "이벤트가 발생할 때 실행할 함수")

divObj1.addEventListener("click", function () {
    divObj1.style.backgroundColor = "blue";
    divObj1.style.color = "orange";
    alert("이벤트가 변경된 게 발생됨");

    // 엘리멘트에 클래스를 여러 단계로 정의하기 위해
    divObj1.classList.add("active");
    console.log(divObj1.classList.contains("active"));
    divObj1.classList.remove("active");
    console.log(divObj1.classList.contains("active"));

    console.log(divObj1.textContent); // getter의 역할을 한다.
    divObj1.textContent = "hello dom"; // setter의 역할을 한다.
});
